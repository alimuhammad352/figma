import Image from "next/image"
import logo  from "@/app/Asets/logo.webp"

export default function Navbar(){
    return(
        
        <div className="w-[1920px] h-[92px] py-4 px-[220px] bg-[#043873] flex justify-between items-center">
     
<div className="w-[144px] h-[34px] ml-[47px] font-inter w-700 text-[28px] leading-[33.89px] flex justify-between text-[#ffffff]"><Image src={logo} alt='' /> 
<h1 className="">Whitepace</h1> </div>

      
         <div className="w-[737.5px] h-[60px] flex justify-between font-inter w-700 text-[28px] leading-[33.89px]  px-[220px] ml-[220px]">
<div className="w-[549px] h-[23px] px-[220]  top-[1px]">
  <ul className="gap-10 flex flex-row justify-between text-white p-4  ">
    <li>Product</li>
    <li>Solution</li>
    <li>Resources</li>
    <li>Pricing</li>
  </ul>
  </div>
  <div className="w-[126px] h-[60px]  p-4">
    <button className="py-4 px-[40px] rounded-[8px] bg-[#FFE492] mt-[-20px] "> Login </button>
  </div>             
       </div> 
        </div>
    
       
       
        
        
    )
};
