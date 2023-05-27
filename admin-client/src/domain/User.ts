import { UserId } from "@/domain/UserId";
import { Entity } from "@/domain/base/Entity";

export type Role = "admin" | "member";

class User implements Entity<UserId> {
    private readonly _userId: UserId;
    private readonly _name: string;
    private readonly _role: Role;

    constructor(userId: UserId, name: string, role: Role) {
        this._userId = userId;
        this._name = name;
        this._role = role;
    }

    getId(): UserId {
        return this.userId;
    }

    get userId(): UserId {
        return this._userId;
    }

    get name(): string {
        return this._name;
    }

    get role(): Role {
        return this._role;
    }
}