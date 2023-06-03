import { User } from "@/domain/User";

export interface IUserRepository {
    fetch(uid: string): Promise<User | null> ;
    create(user: User): void;
}