import React, { createContext, ReactNode, useEffect, useState } from "react";
import { User } from "@/domain/User";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "@/settings/firebase";
import { UserId } from "@/domain/UserId";
import { UserRepository } from "@/repository/UserRepository";

type UserAuthContext = User | null | undefined;

const AuthContext = createContext<UserAuthContext>(undefined);

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [user, setUser] = useState<UserAuthContext>();
    const userRepository = new UserRepository();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseAuthUser) => {
            if (firebaseAuthUser) {
                userRepository
                    .fetch(firebaseAuthUser.uid)
                    .then((user) => {
                        setUser(user);
                    })
                    .catch((error) => {
                            console.log(error);
                            console.log("create user");
                            const newUser = new User(new UserId(firebaseAuthUser.uid),
                                firebaseAuthUser.displayName ?? "no name",
                                "member");
                            userRepository.create(newUser).then(() => setUser(newUser));
                        }
                    )
            } else {
                setUser(null);
            }
            return unsubscribe;
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <AuthContext.Provider value={user}> {children} </AuthContext.Provider>;
};
