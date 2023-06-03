// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// 必要な機能をインポート
import { getAnalytics } from 'firebase/analytics';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig_env = {
    apiKey:process.env.FB_API_KEY,
    authDomain:process.env.FB_AUTH_DOMAIN,
    projectId:process.env.FB_PROJECT_ID,
    storageBucket:process.env.FB_STORAGE_BUCKET,
    messagingSenderId:process.env.FB_SENDER_ID,
    appId:process.env.FB_APP_ID,
    measurementId:process.env.FB_MEASUREMENT_ID,
};

// TODO : apiKeyは環境変数経由で入れるとなぜかエラーになる（ログだして全く同じことを確認しているのに！！）ので、仕方がないのでここで入れる。
// apikeyとは書いているものの、これを知ったところで何かができるわけではないので、バックエンド側のruleで縛る。ここに時間かけても仕方ない。
const firebaseConfig = {
    ...firebaseConfig_env,
    apiKey: "AIzaSyDyn6qPFx7cgk3FI2OrhDEJVZzTFnrIkmQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// NOTE: analyticsは使えないらしい。多分何もセットアップしていないから
// export const analytics = getAnalytics(app);

console.log('env', process.env.FB_API_KEY);
console.log('firebaseConfig', firebaseConfig)
console.log('firebaseConfig from env',  firebaseConfig_env)

// NOTE:  何回も初期化されてしまうようであれば対応する
// if (!getApps()?.length) {
//     initializeApp(firebaseConfig);
// }

// export const analytics = getAnalytics();
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

if (process.env.NODE_ENV === 'development') {
    connectAuthEmulator(auth, "http://localhost:9099");
    connectFirestoreEmulator(db, 'localhost', 9080);
}



