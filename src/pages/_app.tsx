import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes';
import {Orbitron} from "@next/font/google";
import { NextUIProvider } from '@nextui-org/react';
import {theme} from "@/styles/theme";
import {NextPage} from "next";






const App: NextPage<AppProps> = (props: AppProps) => {
    const { Component, pageProps } = props;
    return (
        // 2. Use at the root of your app
        <ThemeProvider attribute="class" {...theme}>
            <NextUIProvider>
                <Component {...pageProps} />
            </NextUIProvider>
        </ThemeProvider>
    );
}
const orbitron = Orbitron({
    weight:['400','600','700','900'],
    style:['normal'],
    subsets:['latin']})

export const fonts = {
    orbitron: orbitron.style.fontFamily
}

export default App;
