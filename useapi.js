
import axios from "axios";
import { useState,  useEffect } from "react";
export const Api = (url)=>{
    const [pro, setPro] = useState([]);
    const [loading , setLoading] = useState(null)
    const [err, setErr] = useState()
     useEffect( ()=>{
        setLoading(true)
         axios.get(url).then((pro)=>{
             setLoading(false)
            setPro(pro.data)
        
        }).catch(error => {
            setErr("Cheek Your Network");
            setLoading(false);
          });
    },[url])
    // useEffect(()=>{
    //     const timer = setTimeout(()=>{
    //         setLoading()
    //     },3000);

    //     return clearTimeout(timer)
    // })

    return [pro, loading, err]
}
