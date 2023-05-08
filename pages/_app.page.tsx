import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google';

const inter = Inter({
    weight: ['400', '600'],
    subsets: ['latin'],
    variable: '--inter-font',
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className={inter.className}>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
