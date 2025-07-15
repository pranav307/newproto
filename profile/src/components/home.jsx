import { Outlet, useLocation } from "react-router-dom";
import Hero from "./hero";
import Services from "./services";
import Project from "./projects";
import Navbar from "./navbar";
import Sidebar from "./sidenavbar";
import { useState } from "react";
import { MenuIcon, X } from "lucide-react";



function Home(){
    const locstion = useLocation();
    const ishomepage = location.pathname === "/";
    const [open,setopen] = useState(false);

    return(
        <div className="flex  flex-col justify-center items-center"
       >
        <div className="bg-gradient-to-br from-fuchsia-500 to-teal-500 min-w-full flex justify-evenly">
         <Navbar/>
         
         </div>
         <div className="sm:hidden fixed top-2 left-2">
          <button onClick={()=> setopen(true)}><MenuIcon size={32} className="bg-white rounded-2xl"/></button>
         
         
         </div>
         {open && (
               <div className="sm:hidden fixed top-0 left-0 h-full w-64 bg-white/70 z-50 ">
          <div className="flex ">
            <button onClick={()=> setopen(false)}><X size={32} className="bg-white rounded-2xl"></X></button>
            
          </div>
          <Sidebar/>
         </div>
         )}
        

        {ishomepage && (
        <div className="flex  flex-col  sm:flex-row sm:justify-center sm:items-center gap-6 sm:my-32 sm:mx-36 m-4">
            <img src="public/assets/WhatsApp Image 2025-07-14 at 21.45.16_0bb9f73a.jpg"
            className="w-100 sm:h-96 h-64 rounded-2xl  object-cover sm:basis-2/5 shadow-2xl"
            ></img>

           <div className="basis-2/5">
    <Hero />
  </div>
  
  
        </div>
        )}
        
 <Outlet/>
 {ishomepage && (
   <Project/>
  
 )} 
 {ishomepage && (
    <Services/>
 )}
 
        </div>
    )
}

export default Home;