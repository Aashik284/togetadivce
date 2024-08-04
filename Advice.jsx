
import {useState} from 'react'
import './advice.css'

export const Advice=()=>{
    const [advice,setAdvice]=useState("please click to get advice")
    const [count,setCount]=useState(0)

   async function onchange(e){

    var res = await fetch("https://api.asviceslip.com/advice")
    var data = await res.json()
    setAdvice(data.slip.advice)
    setCount((c)=>c+1)
}



    return (

        <>
        <div className='div'>
           
            <p>{advice}</p>
            <button className='btn'  onClick={onchange}> get advice</button>
            <p>you got <span>{count}</span> advice from now on</p>
        
        </div>
       
        </>
    )
}