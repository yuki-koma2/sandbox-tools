import { Timestamp } from 'firebase/firestore';
import { IllegalDataException } from "@/repository/Exception/IllegalDataException";

/**
 * firestore側で定義してあるTimestampをwrapする
 */
export class DatabaseTimestamp extends Timestamp {
    declare readonly seconds: number;
    declare readonly nanoseconds: number;

    private constructor(seconds: number, nanoseconds: number) {
        super(seconds, nanoseconds);
    }

    static fromDate(date: Date): DatabaseTimestamp {
        return this.fromFirestoreTimeStamp(Timestamp.fromDate(date));
    }

    static fromMillis(milliseconds: number): DatabaseTimestamp {
        return this.fromFirestoreTimeStamp(Timestamp.fromMillis(milliseconds));
    }

    static now(): DatabaseTimestamp {
        return this.fromFirestoreTimeStamp(Timestamp.now());
    }

    static fromTimeStampString(timestampString: string): DatabaseTimestamp {
        const date = new Date(timestampString);
        const timestamp = Timestamp.fromDate(date);
        return this.fromFirestoreTimeStamp(timestamp);
    }

    /**
     * firestoreのtimestampをDatabaseTimestampに変換する
     * このように書いてもtimestampがundefinedの場合が発生するのでハンドリングしている
     * @param timestamp
     * @return {DatabaseTimestamp}
     * @throws {IllegalDataException}
     */
    static fromFirestoreTimeStamp(timestamp: Timestamp): DatabaseTimestamp {
        if (!timestamp) {
            throw new IllegalDataException('timestamp is undefined');
        }
        return new DatabaseTimestamp(timestamp.seconds, timestamp.nanoseconds);
    }
}