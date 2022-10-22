import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((res) => {
                    if(!res.ok){
                        throw Error("Something went wrong...")
                    }
                    return res.json();
                })
                .then((data) => {
                    //console.log(data);
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch((err)=>{
                    //setData(null);
                    
                    setError(err.message);
                    setIsPending(false);
                })


        }, 1000);

    }, [url]);

    return {data, isPending, error};
}
 
export default useFetch;