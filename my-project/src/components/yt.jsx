import { Play } from "lucide-react";
import thumbnail from "../assets/thumbnail.webp";

export default function Yt() {
    return (
        <div className="font-sora mt-20 md:p-20 pl-0 pr-10 py-10 bg-white flex flex-col md:flex-row justify-between gap-5">
            <div className="relative  w-full md:w-[50%] ">
                <img src={thumbnail} alt="" className="border-r w-full rounded-r-full" />
                <Play className="absolute top-1/2 left-1/2 z-20  bg-blue-500 hover:cursor-pointer  rounded-full p-2" size={28}/>
            </div>
            <div className="p-5 space-y-2 md:w-[40%]">
                <p className="text-md text-gray-800 tracking-tighter">After interviewing candidates on Intervue we were able to convert at least 5% of people from our application base to hires</p>
                <div className="mt-4">
                <h1 className="font-bold">Niket Gupta</h1>
                <p>Group head of Talent Acquisition, Yubi</p>
                </div>

                <h3 className="text-blue-800 font-bold mt-4"> See more customer stories</h3>
            </div>
        </div>
    );
}