import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ContentCard from '@/components/ContentCard';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    const router = useRouter();

    return (
        <div className={`${inter.className} flex min-h-screen flex-col overflow-auto bg-slate-50`}>
            <Head>
                <title>AskLah!: Government Service Assistant</title>
            </Head>
            <header className="flex-none bg-slate-50">
                <Navbar showSearchBar={false} />
            </header>
            <main className="flex w-full flex-1 flex-col items-center justify-center p-8 font-sans">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex w-full max-w-xl flex-col items-center justify-center">
                        <div
                            className={`${inter.className} bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-bold leading-tight text-transparent drop-shadow-sm`}
                        >
                            <p className="m-2 text-4xl sm:mb-3 sm:text-5xl">How may we help you?</p>
                        </div>
                        <div className="my-4 w-full justify-self-stretch">
                            <SearchBar />
                        </div>
                        <div className="my-4 text-2xl font-semibold">Popular now</div>
                        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                            <ContentCard title="Title" content="Something something something" />
                            <ContentCard title="Title" content="Something something something" />
                            <ContentCard title="Title" content="Something something something" />
                            <ContentCard title="Title" content="Something something something" />
                            <ContentCard title="Title" content="Something something something" />
                            <ContentCard title="Title" content="Something something something" />
                        </div>
                    </div>
                </div>
            </main>
            <div
                className={`${inter.className} flex justify-center bg-transparent pb-4 text-sm text-slate-500`}
            >
                <span>Made with ❤️ in SG</span>
            </div>
        </div>
    );
}
