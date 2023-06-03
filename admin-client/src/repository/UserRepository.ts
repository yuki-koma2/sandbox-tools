import { IUserRepository } from "@/repository/interface/IUserRepository";
import { User } from "@/domain/User";
import { doc, Firestore, getDoc, setDoc } from "@firebase/firestore";
import { FIRESTORE_COLLECTION_NAME } from "@/repository/base/firestore.constant";
import { db } from "@/settings/firebase";
import { UserCollection } from "@/repository/firebaseSchema/UserCollection";
import { UserMapper } from "@/repository/mapper/UserMapper";
import { DataCreateException } from "@/repository/Exception/DataCreateException";

export class UserRepository implements IUserRepository {
    private readonly database: Firestore = db;
    private readonly collectionPath = FIRESTORE_COLLECTION_NAME.USER;

    async create(user: User) {
        const docRef = doc(this.database, this.collectionPath);
        await setDoc(docRef, UserMapper.toFirestore(user))
            .then(() => {
                return;
            }).catch((error) => {
                    throw new DataCreateException(error.message)
                }
            )
        return;
    }

    async fetch(uid: string): Promise<User | null> {
        const docRef = doc(this.database, this.collectionPath, uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const userCollection = docSnap.data() as UserCollection;
            return UserMapper.fromFirestore(userCollection);
        } else {
            return null
        }
    }
}
