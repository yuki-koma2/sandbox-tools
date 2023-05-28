import React, { createContext, ReactNode, useEffect, useState } from "react";
import { User } from "@/domain/User";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "@/settings/firebase";
import { UserId } from "@/domain/UserId";

type UserAuthContext = User | null | undefined;

const AuthContext = createContext<UserAuthContext>(undefined);

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [user, setUser] = useState<UserAuthContext>();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseAuthUser) => {
            if (firebaseAuthUser) {
                setUser(new User(new UserId(firebaseAuthUser.uid), firebaseAuthUser.displayName ?? '', "member"))
            } else {
                setUser(null);
            }
            return unsubscribe;
        });
    }, []);

    return <AuthContext.Provider value={user}> {children} </AuthContext.Provider>;
};
