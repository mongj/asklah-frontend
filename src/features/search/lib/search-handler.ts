import { FormEvent, RefObject } from 'react';

import { NextRouter } from 'next/router';

export default function searchHandler(
    event: FormEvent,
    queryRef: RefObject<HTMLInputElement>,
    router: NextRouter,
) {
    event.preventDefault();
    const query = queryRef.current!.value;
    if (query == '') {
        return;
    } else {
        router.push({
            pathname: '/search',
            query: { q: `${query}` },
        });
    }
}
