import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export const metadata = {
    title: 'AskLah',
    description: 'AI Search for Government Information',
};

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
