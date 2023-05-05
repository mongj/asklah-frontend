import { useRouter } from 'next/router';
import SearchBar from '@/components/SearchBar';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SkeletonList from '@/components/ui/SkeletonList';
import _ from 'lodash';

const inter = Inter({ subsets: ['latin'] });
const BACKEND_URL = process.env.TESTING_BACKEND_URL;

export default function SearchResultPage() {
    const router = useRouter();

    return (
        <div className={`${inter.className} flex min-h-screen flex-col overflow-auto bg-slate-50`}>
            <Head>
                <title>{router.query.q}</title>
            </Head>
            <main className="flex w-full flex-1 justify-center p-8 font-sans">
                <div className="flex max-w-3xl grow flex-col items-center justify-center ">
                    <SearchBar prefillValue={router.query.q} />
                    <div className="mt-4 flex w-full grow rounded-xl border border-solid border-slate-200 bg-white p-4">
                        <ChatResponse query={router.query.q} />
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

function ChatResponse(props) {
    const target_url = `${BACKEND_URL}/chat`;
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        console.log('loading: true');
        axios({
            method: 'post',
            url: target_url,
            data: { query: props.query },
        })
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setIsLoading(false);
                console.log('loading: false');
            });
    }, []);

    if (isLoading) return <SkeletonList rowCount={25} />;
    if (error) return <div className={`${inter.className}`}>{`Sorry... ${error}.`}</div>;
    return <div className={`${inter.className} text-justify`}>{data['message']}</div>;
}
