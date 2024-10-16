'use client'
import { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";

export default function CountDownModel({setShowCountDown}:{setShowCountDown:Dispatch<SetStateAction<boolean>>}) {
    const router = useRouter()
    const [hours,setHours] = useState('0')
    const [minutes,setMinutes] = useState('0')
    const [seconds,setSeconds] = useState('0')
    
    const handleStart = () => {
        const time = (Number(hours)*3600)+(Number(minutes)*60)+Number(seconds)
        router.push(`/countdown/${time}`)
        setHours('0')
        setMinutes('0')
        setSeconds('0')
    }
    return (
         
        <div 
            className=" absolute top-[15%] w-[50%] h-[70%] 
                        bg-neutral-700 flex flex-col justify-around items-center gap-10 
                        p-10 rounded-xl"
        >   
            <div 
                className="absolute top-3 right-3 rounded-full p-1 w-[25px] 
                            h-[25px] border flex justify-center items-center"
            >
                <button 
                    className="text-red-500 font-sans w-full h-full flex justify-center items-center"
                    onClick = {() => setShowCountDown(false)}
                >
                        x
                </button>
            </div>
            <div className="flex justify-center items-center w-full h-full gap-10">
                <div className="flex flex-col h-full w-[30%] rounded-xl justify-center items-center">
                    <label> HOURS</label>
                    <input 
                        type="number"  
                        className="flex w-full h-full rounded-xl justify-center items-center text-9xl
                                bg-neutral-800 text-center"
                        value={hours}
                        onChange={(event) => setHours((event.target.value))}
                    />
                </div>
                <div className="flex flex-col h-full w-[30%] rounded-xl justify-center items-center">
                    <label> MINUTES</label>
                    <input 
                        type="number" 
                        className="flex w-full h-full rounded-xl justify-center items-center text-9xl
                                bg-neutral-800 text-center"
                        value={minutes}
                        onChange={(event) => setMinutes((event.target.value))}
                    />
                </div>
                <div className="flex flex-col h-full w-[30%] rounded-xl justify-center items-center">
                    <label> SECONDS</label>
                    <input 
                        type="number"
                        className="flex w-full h-full rounded-xl justify-center items-center text-9xl
                                bg-neutral-800 text-center"
                        value={seconds}
                        onChange={(event) => setSeconds((event.target.value))}
                    />
                </div>
            </div>
            <div className="flex w-full justify-center items-center rounded-xl border p-3 bg-neutral-800">
                <button className="font-bold text-2xl font-serif" onClick={handleStart}>
                    Start 
                </button>
            </div>
        </div>
            
    );
}