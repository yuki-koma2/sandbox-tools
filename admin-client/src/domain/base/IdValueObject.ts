/**
 *  Idを表現するためのValueObject
 *  IDで定義する内容はここで定義したもの以外には基本的にはないはずなので、共通の処理として継承を利用する。
 *
 */

export abstract class IdValueObject {
    private readonly _id: string;

    protected constructor(id: string) {
        this._id = id;
    }

    get value(): string {
        return this._id;
    }
}