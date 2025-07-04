import React, { useEffect, useState } from 'react'

const useFectch = (url) => {
    const [data,setData] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState(null);
    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error("respose failed", response.status);
                }
                const result = await response.json();
                setData(result);
                setError(null);
            } catch (error) {
                setError(error.message);
                setData(null);
            }finally{
                setIsLoading(false);
            }
        }
         fetchData();
    },[url])
  return {data,error,isLoading};
}

export default useFectch