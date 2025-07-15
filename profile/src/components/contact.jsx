import { Contact2Icon } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaVoicemail } from "react-icons/fa";



function Contact(){

  return (
    <div className="flex flex-col justify-center items-center min-h-screen
   font-sherif w-2xl bg-gradient-to-bl from-blue-400 to-red-300 m-4 gap-4 ">
        <h1 className="text-4xl text-center font-bold">Contact Info</h1>
        <div className="flex">
            
            <h1 className="text-2xl">Name:PARNAV SINGH</h1>
            </div>
            <div className="flex gap-2 ">
                <Contact2Icon />
               <h1> PHONE NO:7817056712</h1>
            </div>
            <div className="flex gap-2">
                <FaVoicemail size={26}/>
               <h1> EMAIL:psgusain307@gmail.com</h1>
            </div>
            <div className="flex gap-2">
                
                <a href="https://www.linkedin.com/in/parnav-singh-696503235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                ><FaLinkedinIn size={26}/> </a>
                
                <span className="text-xl">Linkedin</span>
            
            </div>
            <div className="flex gap-2">
                 
                <a href="https://github.com/pranav307/learningms">
                <FaGithub size={26}/>
                </a>
                <span className="text-xl">Github</span>
            
            </div>
           
        

    </div>
  )
}

export default Contact;