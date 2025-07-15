
import  { BrowserRouter,Route, Routes } from "react-router-dom";

import Home from "./components/home";
import Hero from "./components/hero";
import Services from "./components/services";
import Project from "./components/projects";
import Resume from "./components/resume";
import Contact from "./components/contact";
import About from "./components/aboutme";
import Skills from "./components/skills";
import Lms from "./components/lms";
import Ecom from "./components/exoomerce";

function App() {
 

  return (
    <div className="bg-gradient-to-l from-pink-500  via-purple-500  to-gray-500 min-h-screen"
    //  style={{
    //         backgroundImage:`url("public/assets/WhatsApp Image 2025-07-14 at 21.45.16_0bb9f73a.jpg")`,
    //         // backgroundSize:"cover",
    //         backgroundPosition:"center",
    //         height: "100vh",
    //     width: "100%",
    //     margin:0,
    //     padding:0,
        
    //  }}
    >
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}>
         <Route path="hero" element={<Hero/>}></Route>
         <Route path="services" element={<Services/>}></Route>
         <Route path="project" element={<Project/>}></Route>
         <Route path="resume" element={<Resume/>}></Route>
         <Route path="contact" element={<Contact/>}></Route>
         <Route path="about" element={<About/>}></Route>
         <Route path="skills" element={<Skills/>}></Route>
         <Route path="lms" element={<Lms/>}></Route>
         <Route path="ecom" element={<Ecom/>}></Route>

      </Route>
    </Routes>
       
    </BrowserRouter>
    </div>
  )
}

export default App
