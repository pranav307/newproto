import {Link} from "react-router-dom"
import  {Contact, Home, MehIcon, ProjectorIcon, ToolCase, WorkflowIcon} from "lucide-react";

function Navbar(){
const navlist=[
    {
        path:"/" ,label:"Home",icon:<Home/>
    },
    {
        path:"/skills" , label:"Skills",icon:<ToolCase/>
    },
    {
        path:"/services",label:"Services",icon:<WorkflowIcon/>
    },

    {
        path:"/project",label:"Projects",icon:<ProjectorIcon/>
    }
    ,
    {path:"/contact" , label:"Contact",icon:<Contact/>},
    {
        path:"/about",label:"Aboutme",icon:<MehIcon/>
    }

]

return (
    <div className=" hidden sm:flex   gap-8 m-8">
        {navlist.map((item,index)=>(
            <Link to={item.path} key={index} className="flex  flex-col ">
             <h1 className="pl-2 p-2">{item.icon}</h1>
             <h1 className="mr-2 pr-2 text-xl font-serif hover:underline hover:decoration-green-200">{item.label}</h1>
            
                </Link>
        ))}
    </div>
)
    
}
export default Navbar;