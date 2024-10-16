'use client'
import { Digit } from "@/components";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import SignInPage from "@/components/SignInPage";

export default function Page() {
    const {data:session} = useSession()

    var [time,setTime] = useState<Date | null>(null)
    useEffect(()=>{
        setTime(new Date())
        var interval = setInterval(() => {
            setTime(() => new Date())
        },1000)

        return () => clearInterval(interval)
    },[])

    if (!session){
        return <SignInPage />
    }
    
    if (!time){
        return null
    }

    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');


    
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