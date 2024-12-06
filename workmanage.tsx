import Image from "next/image"
import circle from "@/app/Asets/circle.png"
import Work from "@/app/Asets/Work.png"
export default function WorkManage(){
    return(
       
    <div className="w-[1920px] h-[1588px] ">
        
        <div className="w-[1480px] h-[547px] mt-[100px] ml-[140px] flex justify-between  ">
        <div className="w-[672] h-[411px] p-20 text-[#212529] ">
          <div>
             <h1 className=" w-[672px] h-[174px]  font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] "> Project Management</h1>
            <div className=""> <p className="w-[672px] h-[90px] font-inter w-700 text-[18px] leading-[30px] tracking-[-0.02em]">  Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>  </div>
        <div className="w-[97px] h-[23px] font-inter w-500 text-[18px] leading-[23px] tracking-[-0.02%] py-10">Get Started </div>    
        
             </div>
          </div>
          <div className="w-[748px] h-[547px] ml-16 bg-[#C4DEFD]">  </div>
       </div>
       <div className="w-[1920px] h-[100px]"> </div>
<div className="w-[1480px] h-[96px]">
 </div>
        <div className="ml-[190px] w-[1480px] h-[661px] gap-[100px] flex justify-between">
            <div className="w-[710px] h-[661px] border-2px mt-[-100px] "> <Image src={Work} alt='' /> </div>
            <div className="w-[670px] h-[294px] gap-[60px] "> 
<div className="w-[670px] h-[171px] gap-[24px] text-[#212529]">
    
    <h1 className="w-[670px] h-[87px] font-bold w-700 text-[72px] leading-[87.14px] tracking-[-0.02em] "> Work together</h1>
    <p className="w-[670px] h-[60px] font-inter w-400 mt-[30px] text-[18px] leading-[30px] tracking-[-0.02em]"> With whitepace, share your notes with your colleagues and collaborate on them.
You can also publish a note to the internet and share the URL with others.
</p>
<div className="w-[186px] h-[63px] radius-[6px] mt-[20px] mr-[40px] bottom-[20px] ml-[40px] gap-[10px] bg-[#4F9CF9]" > <p className="w-[82px] h-[23px] font-inter w-500 text-[18px] leading-[23px] tracking-[-0.02em] text-white">Try it now </p></div>
     </div>
     
            </div>
            
             </div>
             <div className=""> </div>
         <div className="w-[1921px] h-[759px] py-[140px] px-[220px] flex justify-between bg-[#043873]">
           <div className="w-[697px] h-[171px]">
            <div className="w-[697px] h-[294px]">
                <h1 className="w-[697px] h-[87px] pt-[100px] font-bold w-700 text-[72px] leading-[87.14px] tracking-[-0.02%] text-white">Use as Extension </h1> </div>
             <p className="w-[697px] h-[60px] font-normal w-400 text-[18px] leading-[30px] tracking-[0.02em] mt-[-80px] text-white"> Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
             </p>
             <div className="w-[171px] h-[63px] radius-[6px] mt-[20px] mr-[40px] mb-[20px] ml-[40px] bg-[#4F9CF9]"> <button className="w-[67px] h-[23px] font-bold w-500 text-[18px] leading-[23px] tracking-[-0.02em] text-white"> Let’s Go </button> </div>
             </div>
             <div className="w-[686px] h-[479px] gap-[4px]">
                <div className="w-[686px] h-[479px] bg-[#C4DEFD]"></div>
                 </div>
                 
             </div>
         
         
               
         
         
         
         
    </div>
        
    
    )

}