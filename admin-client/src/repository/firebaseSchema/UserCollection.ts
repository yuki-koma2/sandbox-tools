import { Timestamp } from "firebase/firestore";
import { DatabaseTimestamp } from "@/repository/base/DatabaseTimestamp";
import { Role } from "@/domain/User";
import { UserId } from "@/domain/UserId";

class UserCollection {
    private readonly _createAt: DatabaseTimestamp;
    private readonly _name: string;
    private readonly _role: Role;
    // firebase authで発行されるuidを使用する
    private readonly _uid: UserId;
    private readonly _updateAt: DatabaseTimestamp;


    constructor(createAt: DatabaseTimestamp, name: string, role: Role, uid: UserId, updateAt: DatabaseTimestamp) {
        this._createAt = createAt;
        this._name = name;
        this._role = role;
        this._uid = uid;
        this._updateAt = updateAt;
    }


    get createAt(): DatabaseTimestamp {
        return this._createAt;
    }

    get name(): string {
        return this._name;
    }

    get role(): Role {
        return this._role;
    }

    get uid(): UserId {
        return this._uid;
    }

    get updateAt(): DatabaseTimestamp {
        return this._updateAt;
    }
}