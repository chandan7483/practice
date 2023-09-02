import { useEffect, useState } from "react"
import { Flipcart } from "../../service/flipcart.service";


export const MyUseEffect:React.FC<{}>=()=>{
let [data,setData]=useState<any>([]);
  
useEffect(()=>{
    (async()=>{
        let data1= await Flipcart()
        setData(data1)
        console.log("-->inside",data1)
     })()
},[]);
    
    console.log("-->outside",data)
    return <>
   {data.map((item:any)=>{return <img width='200px' src={`${item.image}`}/>})}
   
    </>
}


