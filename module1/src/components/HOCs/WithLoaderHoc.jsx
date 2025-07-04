import React, { useEffect, useState } from 'react'

const WithLoaderHoc = (WrappedComponent,data) => {
    return function WithLoader(){
        const [isLoading,setIsLoading] = useState(true);
        const [items,setItems] = useState([]);
        useEffect(()=>{
            setTimeout(()=>{
                setIsLoading(false);
                setItems(data);
            },2000)
        },[])
        if(isLoading){
            return <div>Loading....</div>
        }
        return <WrappedComponent items={items}/>
    }
}

export default WithLoaderHoc