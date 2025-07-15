import { Database, Globe, LayoutDashboard, Server } from "lucide-react";



function Services(){

    return(
        <div>
            <h1 className="text-2xl font-serif text-center hover:underline">Services</h1>
        <div className="grid sm:grid-cols-2 grid-cols-1  rounded-2xl  ">
            
            <div className="border-2 m-8 p-20 rounded-2xl bg-purple-200 hover:scale-105">
               
                <button className="flex flex-col gap-4 justify-center items-center ml-6" >

                     <Globe size={32}/>
                    <span className="text-2xl font-serif">Web dev</span>
                    </button>
            </div>
            <div className="border-2 p-20 m-8 rounded-2xl bg-purple-200 hover:scale-105">

                <button className="flex flex-col gap-4 justify-center items-center ">
                    <LayoutDashboard size={32}/>
                    <span className="text-2xl font-serif">Frontend design</span>
                </button>
            </div>
            <div className="border-2 m-8 p-20 rounded-2xl bg-purple-200 hover:scale-105">
                <button className="flex flex-col gap-4 justify-center items-center ml-6 " >
                    <Server size={32}/>
                    <span className="text-2xl font-serif">Backend</span>
                    
                </button>
            </div>
            <div className="border-2 m-8 p-20 rounded-2xl bg-purple-200 hover:scale-105">
                <button className="flex flex-col gap-4 justify-center items-center ml-6 ">
                    <Database size={32}/>
                    <span className="text-2xl font-serif"> Database</span>
                   
                </button>
            </div>

        </div>
        </div>
    )
}

export default Services;