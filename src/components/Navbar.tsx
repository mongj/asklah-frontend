import { Link } from '@chakra-ui/next-js';
import logo from '@public/vercel.svg';
import SearchBar from './SearchBar';
import Image from 'next/image';

export default function Navbar(props) {
    return (
        <nav className="flex h-16 items-center border-2 border-slate-100 px-8 leading-normal">
            <div className="flex-none">
                <Link href="/">AskLah!</Link>
            </div>
            <div className="mx-8 w-96 flex-initial overflow-hidden">
                {props.showSearchBar == true && <SearchBar iconsize={16} />}
            </div>
        </nav>
    );
}
