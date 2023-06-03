import type { AppProps } from 'next/app';
import { AuthProvider } from "@/app/context/AuthProvider";
import RootLayout from "@/app/layout";
import { NextUIProvider } from "@nextui-org/react";

export default function MyApp({Component, pageProps}: AppProps) {

    return (
        <RootLayout>
            <AuthProvider>
                <NextUIProvider>
                    <Component {...pageProps} />
                </NextUIProvider>
            </AuthProvider>
        </RootLayout>
    );
}