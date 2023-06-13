export const fetcher = (url) =>
    fetch(url).then((res) => {
        if (res.ok) {
            return res.json();
        } else {
            throw {
                status: res.status,
                message: res.json(),
            };
        }
    });
