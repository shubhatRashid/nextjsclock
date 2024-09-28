'use client'
import { Digit } from "@/components";
import { useEffect, useState } from "react";
export default function Page(
    {params}:{
            params:{countTime:number}
        }
    ) {
    var [time,setTime] = useState(params.countTime)
    
    const seconds = Math.floor(time % 60).toString().padStart(2,'0')
    const minutes = Math.floor(time / 60).toString().padStart(2,'0')
    const hours  = Math.floor(time/ 3600).toString().padStart(2,'0')

    useEffect(()=>{
        var interval = setInterval(() => {
            setTime((time) => time - 1)
        },1000)

        return () => clearInterval(interval)
    },[])
    
    return (
        <div className="flex w-full h-full justify-evenly items-center px-[10%] gap-3">

            <div className="flex flex-col w-full h-full justify-center items-center">
                <div  className="flex w-full h-[90%] justify-center items-center gap-1">
                    <Digit value = {hours[0]} width={1}/>
                    <Digit value = {hours[1]} width={1}/>
                </div>
                <div className="flex w-full h-[10%] justify-center items-center">
                    <h1 className="font-mono">HOURS</h1>
                </div>
            </div>

            <Digit value = {':'} width={0.5}/>

            <div className="flex flex-col w-full h-full justify-center items-center">
                <div  className="flex w-full h-[90%] justify-center items-center gap-1">
                    <Digit value = {minutes[0]} width={1}/>
                    <Digit value = {minutes[1]} width={1}/>
                </div>
                <div className="flex w-full h-[10%] justify-center items-center">
                    <h1 className="font-mono">MINUTES</h1>
                </div>
            </div>

            <Digit value = {":"} width={0.5}/>

            <div className="flex flex-col w-full h-full justify-center items-center">
                <div  className="flex w-full h-[90%] justify-center items-center gap-1">
                    <Digit value = {seconds[0]} width={1}/>
                    <Digit value = {seconds[1]} width={1}/>
                </div>
                <div className="flex w-full h-[10%] justify-center items-center">
                    <h1 className="font-mono">SECONDS</h1>
                </div>
            </div>

        </div>
    );
}