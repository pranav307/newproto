import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="p-6">
      <p className="text-2xl font-serif bg-gradient-to-bl from-blue-200 to-green-200 p-4 rounded-2xl">
        Hi, I'm Parnav Singh  
        <br />
        Frontend Developer | MERN Stack Enthusiast
        <br />
        I craft clean, responsive, and interactive web applications using React, Tailwind, and modern JavaScript technologies.
         <Link
        to="/resume"
        className="text-blue-600 text-lg font-serif underline mt-4 inline-block"
      >
        View My Resume
      </Link>
      </p>

     
    </div>
  );
}

export default Hero;
