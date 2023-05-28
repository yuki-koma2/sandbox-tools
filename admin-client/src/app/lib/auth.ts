import {
    GoogleAuthProvider,
    signInWithPopup,
    UserCredential,
    signOut,
} from 'firebase/auth';
import { auth } from "@/settings/firebase";

export const doSignIn = (): Promise<UserCredential> => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
};

export const doSignOut = (): Promise<void> => {
    return signOut(auth);
};