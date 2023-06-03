import { IdValueObject } from "@/domain/base/IdValueObject";

/**
 * Entityを定義する場合はこれをimplementsする。
 * EntityはIDを持つこと、それを取得することができることを表現している。
 */
export interface Entity<ID extends IdValueObject> {
    getId(): ID;
}
