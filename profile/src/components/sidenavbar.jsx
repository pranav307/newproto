import { Contact, Home, MehIcon, ProjectorIcon, ToolCase, WorkflowIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from 'react-icons/fa';



function Sidebar(){
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
    },

     {path:"/contact" , label:"Contact",icon:<Contact/>},
    {
        path:"/about",label:"Aboutme",icon:<MehIcon/>
    },
    {
      path:"https://www.linkedin.com/in/parnav-singh-696503235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
      ,label:"Linkedin",icon: <FaLinkedin />
    },
    {path:"https://github.com/pranav307/learningms",label:"Github",icon:<FaGithub/>

    }

]
return (
    <div className="sm:hidden flex  flex-col gap-8 m-8">
        {navlist.map((item,index)=>(
            <Link to={item.path} key={index} className="flex  flex-row "
             onClick={() => window.scrollTo({top:0, left:0, behavior:'smooth'})}
            >
             <h1 className="pl-2 p-2">{item.icon}</h1>
             <h1 className="mr-2 pr-2 text-xl font-serif hover:underline hover:decoration-green-200">{item.label}</h1>
            
                </Link>
        ))}
    </div>
)
    
}

export default Sidebar;