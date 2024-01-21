import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import express, {Request, Response} from "express";
// eslint-disable-next-line max-len
import {PinpointClient, SendOTPMessageCommand, VerifyOTPMessageCommand} from "@aws-sdk/client-pinpoint";
import admin from "firebase-admin";
import cors from "cors";

admin.initializeApp();
const pinpointProjectId = process.env.PINPOINT_PROJECT_ID;

/**
 * 同通確認用
 */
export const helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  logger.log("REQ" + JSON.stringify(request.headers));
  logger.log("method: " + JSON.stringify(request.method));
  logger.log("REQ" + JSON.stringify(request.body));
  logger.log("REQ" + JSON.stringify(request.body.data.samp));

  response.json({
    status: "success",
    data: {
      text: "Hello from Firebase!",
      requestBody: request.body,
    },
  });
});


const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));
const corsOptions = {
  origin: "https://dev-kaigo-faci.connect.carebook.jp",
  optionsSuccessStatus: 200,
};
// app.use(cors.apply({origin: true}));
app.use(cors(corsOptions));


/**
 * 同通確認用 express
 */
app.get("/", (req:Request, res:Response) => {
  logger.log("REQ GET: " + req);
  logger.log(JSON.stringify(req.cookies));
  logger.log(JSON.stringify(req.headers));
  logger.log(JSON.stringify(req.body));
  const date = new Date();
  const hours = (date.getHours() % 12) + 1; // London is UTC + 1hr;
  res.send(`
    <!doctype html>
    <head>
      <title>Time</title>
      <link rel="stylesheet" href="/style.css">
      <script src="/script.js"></script>
    </head>
    <body>
      <p>In London, the clock strikes:
        <span id="bongs">${"BONG ".repeat(hours)}</span></p>
      <button onClick="refresh(this)">Refresh A </button>
    </body>
  </html>`);
});


app.post("/", (req: Request, res: Response) => {
  logger.log("POST");
  logger.log(JSON.stringify(req.query));
  logger.log(JSON.stringify(req.headers));
  logger.log(JSON.stringify(req.body));
  res.json({requestBody: req.body});
});


// FIXME: 検証用のproject idを指定しています。環境変数から指定にする
const projectId = pinpointProjectId;
const senderId = "CAREBOOK";
const client = new PinpointClient({region: "ap-northeast-1"});


/**
 * @openapi
 * /otp/issue:
 *   post:
 *     description: issue otp
 *     requestBody:
 *       content:
 *        application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phoneNumber:
 *                type: string
 *             required:
 *               - phoneNumber
 *     responses:
 *       200:
 *         description: issue success
 *       400:
 *         description: Bad request.
 */

app.post("/otp/issue", async (req: Request, res: Response) => {
  logger.log("REQ" + req);
  await AuthGuard.authGuard(req, res);

  const phoneNumber = req.body.data.phoneNumber;
  if (!phoneNumber) {
    return res.status(400).send({error: "phoneNumber is required"});
  }

  const input = {
    ApplicationId: projectId,
    SendOTPMessageRequestParameters: {
      AllowedAttempts: 5,
      BrandName: "ケアブック事務局",
      Channel: "SMS",
      CodeLength: 6,
      DestinationIdentity: phoneNumber,
      Language: "ja-JP",
      OriginationIdentity: senderId,
      ReferenceId: "koma2Id",
      ValidityPeriod: 20,
    },
  };
  const command = new SendOTPMessageCommand(input);
  try {
    const response = await client.send(command);
    logger.log("SendOTPMessageCommand", response);
    res.send(response);
  } catch (error) {
    logger.error("Error sending OTP message:", error);
    res.status(500).send({error: "Internal server error"});
  }
  return;
});

app.get("/otp/verify", async (req: Request, res: Response) => {
  // FIXME: 実際の仕様とは異なります。
  logger.log("otp called");
  // req.bodyからphoneNumberを取得
  const phoneNumber = req.body.data.phoneNumber;
  const oneTimePass = req.body.data.otp;

  // phoneNumberが存在しない、または無効である場合のエラーハンドリング
  if (!phoneNumber || !oneTimePass) {
    res.status(400).send({error: "phoneNumber or oneTimePass is required"});
  }

  const command = new VerifyOTPMessageCommand({
    ApplicationId: projectId,
    VerifyOTPMessageRequestParameters: {
      DestinationIdentity: phoneNumber,
      ReferenceId: "koma2Id",
      Otp: oneTimePass,
    },
  });
  const response = await client.send(command);
  logger.log("VerifyOTPMessageCommand", response);
  res.send(response);
});


exports.app = onRequest(app);


/**
 * 認証チェック用ミドルウェア
 * @constructor
 * @return {Promise<void>}
 * @private
 * @static
 * @memberof AuthGuard
 * @description
 * 1. リクエストヘッダーにAuthorizationがあるかどうかをチェック
 */
class AuthGuard {
  /**
   * 認証チェック用ミドルウェア
   * @param {Request} req リクエスト
   * @param {Response} res レスポンス
   */
  static authGuard = async (req: Request,
    res: Response) => {
    // ======
    // 認証チェック
    // ======
    logger.log("Check if request is authorized with Firebase ID token");
    if (
      (!req.headers.authorization ||
            !req.headers.authorization.startsWith("Bearer ")
      ) &&
        !(req.cookies && req.cookies.__session)
    ) {
      logger.error(
        "No Firebase ID token was passed " +
          "as a Bearer token in the Authorization header.",
        "Make sure you authorize your request" +
          " by providing the following HTTP header:",
        "Authorization: Bearer <Firebase ID Token>",
        "or by passing a \"__session\" cookie."
      );
      res.status(403).send("Unauthorized");
    }
    let idToken;
    if (
      req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer ")
    ) {
      logger.log("Found \"Authorization\" header");
      // Read the ID Token from the Authorization header.
      idToken = req.headers.authorization.split("Bearer ")[1];
    } else if (req.cookies) {
      logger.log("Found \"__session\" cookie");
      // Read the ID Token from cookie.
      idToken = req.cookies.__session;
    } else {
      // No cookie
      res.status(403).send("Unauthorized");
    }

    try {
      const decodedIdToken = await admin.auth().verifyIdToken(idToken);
      logger.log("ID Token correctly decoded", decodedIdToken);
    } catch (error) {
      logger.error("Error while verifying Firebase ID token:", error);
      res.status(403).send("Unauthorized");
    }
  };
}
