import { Stack } from '@chakra-ui/react';

export default function SkeletonList(props) {
    return (
        <Stack flexGrow={1}>
            {Array(props.rowCount)
                .fill(1)
                .map((_, index) => (
                    <div
                        className={`w-full h-${
                            props.rowHeight || 5
                        } animate-pulse rounded-md bg-slate-100`}
                        key={index}
                    />
                ))}
        </Stack>
    );
}
