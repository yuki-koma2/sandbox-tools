import { DatabaseTimestamp } from "@/repository/base/DatabaseTimestamp";
import { Role } from "@/domain/User";
import { UserId } from "@/domain/UserId";
import { ServerTimeStamp } from "@/repository/base/ServerTimeStamp";

export class UserCollection {
    private readonly _name: string;
    private readonly _role: Role;
    // firebase authで発行されるuidを使用する
    private readonly _uid: string;
    private readonly _createAt: ServerTimeStamp;
    private readonly _updateAt: ServerTimeStamp;


    constructor(name: string, role: Role, uid: string, createAt: ServerTimeStamp, updateAt: ServerTimeStamp) {
        this._name = name;
        this._role = role;
        this._uid = uid;
        this._createAt = createAt;
        this._updateAt = updateAt;
    }

    get name(): string {
        return this._name;
    }

    get role(): Role {
        return this._role;
    }


    get uid(): string {
        return this._uid;
    }
}