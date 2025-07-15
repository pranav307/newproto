import { Book, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";



function Project(){
const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-4 mt-10">
            <h1 className="text-2xl text-center hover:underline font-bold mt-2">Project</h1>
        <div className="grid sm:grid-cols-2 grid-cols-1">
            
            <div className="border-2 m-8 p-20 rounded-2xl bg-gradient-to-bl from-red-300 to-cyan-200 hover:scale-105">
                <button onClick={()=>navigate("/lms")} 
                className="flex flex-col gap-4 justify-center items-center ml-8">
                    <Book size={32}/>
                    <span className="text-2xl font-sherif font-bold">LMS</span>
                </button>
            </div>
            <div className="border-2 m-8 p-20 rounded-2xl bg-gradient-to-bl from-red-300 to-cyan-200 hover:scale-105">
                <button onClick={()=>navigate("ecom")} 
                className="flex flex-col gap-4 justify-center items-center">
                    <ShoppingCart size={32}/>
                    <span className="text-2xl font-sherif font-bold">eCommerce</span>
                </button>
            </div>
        </div>
        </div>
    )
}

export default Project;