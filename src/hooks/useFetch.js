import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (() => {
            fetch(url)
                .then(res => {
                    if(!res.ok) {
                        throw new Error("Error Fetching Data. Response not OK");
                    }
                    return res.json()
                })
                .then(resData =>{
                        setData(resData)
                        setIsLoading(false);
                })
                .catch(err => {
                    console.log(err)
                    setIsLoading(false);
                });
        })()
    }, [url])

    return { data, isLoading };
}

export default useFetch;
