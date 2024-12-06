import Image from "next/image"
import Sponsors from "@/app/Asets/sponsors.png"

export default function log(){
    return(
        <div className="w-[1922px] h-[538px] mt-[140px] mx-[220px] gap-[100px]  ">
        <h1 className="w-[1482px] h-[87px] size-[72px] mx-[470px] text-7xl font-bold text-[#212529]"> Our sponsors </h1>
        <div className="w-[1482px] h-[71px] mt-96"> <Image src={Sponsors} alt='' /> 

             </div>
         </div>
    )
}