import type { AppProps } from 'next/app';
import { AuthProvider } from "@/app/context/AuthProvider";
import RootLayout from "@/app/layout";

export default function MyApp({Component, pageProps}: AppProps) {

    return (
        <RootLayout>
            <AuthProvider>
                <Component {...pageProps} />
            </AuthProvider>
        </RootLayout>
    );
}