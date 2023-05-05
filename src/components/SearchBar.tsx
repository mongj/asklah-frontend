import { useRef } from 'react';
import { FormEvent } from 'react';
import searchHandler from '@/features/search/lib/search-handler';
import { Button, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';
import { Search } from 'lucide-react';
import { useRouter } from 'next/router';

export default function SearchBar(props) {
    const queryRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    function submitHandler(event: FormEvent) {
        searchHandler(event, queryRef, router);
        if (queryRef.current) {
            queryRef.current.value = '';
        }
    }

    return (
        <form className="mb-2 mt-2 w-full" onSubmit={submitHandler}>
            <InputGroup>
                <InputLeftElement className="h-full pl-4" pointerEvents="none">
                    <Search color="gray" strokeWidth={1.5} size={props.iconsize} />
                </InputLeftElement>
                <InputRightElement className="mr-2 h-full w-fit">
                    <Button
                        className="h-3/4 rounded-full bg-sky-500 px-4 text-white hover:bg-sky-600"
                        onClick={submitHandler}
                    >
                        Search
                    </Button>
                </InputRightElement>
                <Input
                    className="border border-solid border-slate-200 pr-24 !shadow-[0_1px_1px_rgba(0,0,0,0.04),0_2px_10px_rgba(0,0,0,0.04)]"
                    placeholder="Ask me anything"
                    size="md"
                    bg="white"
                    h="3rem"
                    pl="3.5rem"
                    width="100%"
                    borderRadius="9999px"
                    borderColor="gray.200"
                    focusBorderColor="gray.300"
                    defaultValue={props.prefillValue}
                    ref={queryRef}
                />
            </InputGroup>
        </form>
    );
}
