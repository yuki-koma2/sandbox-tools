import { UserCollection } from "@/repository/firebaseSchema/UserCollection";
import { User } from "@/domain/User";
import { UserId } from "@/domain/UserId";
import { serverTimestamp } from "@firebase/firestore";



export class UserMapper {
    static fromFirestore(userCollection :UserCollection ): User {
        return new User(
            new UserId(userCollection.uid),
            userCollection.name,
            userCollection.role);
    }
    static toFirestore(user: User): UserCollection {
        return new UserCollection(
            user.name,
            user.role,
            user.userId.value,
            serverTimestamp(),
            serverTimestamp()
        )
    }
}