import { useEffect, useState } from "react";

function useCurrencyInfo(currencies){
    const [data, setData] = useState({})
    useEffect(() =>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currencies}.json`)
        .then((res)=> res.json())
        .then((res)=> setData(res[currencies]))
        console.log(data);
        
    },[currencies])
    return data
}

export default useCurrencyInfo;