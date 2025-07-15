


function Lms(){


    return (
        <div className="sm:mt-2 mt-16">

            <h1 className="text-2xl font-serif text-center m-4 hover:underline hover:decoration-cyan-400 text-white"> Learning Management System (Lms)</h1>
            <div className="grid sm:grid-cols-2 grid-cols-1 ">
              <img src="/public/assets/lms1.png"
              className="w-full h-full object-cover p-2"
              ></img>
              <img src="/public/assets/lms2.png"
                 className="w-full h-full object-cover p-2"
              ></img>
            </div>

            <h1 className="p-4 font-serif bg-cyan-100 ">
                LMS (Learning Management System) is a full-stack web application built 
                using React.js, Node.js, Express, and MongoDB. It supports role-based access 
                for Admins, Course Creators, and Students, allowing creators to upload courses, 
                students to enroll and track progress, and admins to manage the platform. 
                The app features JWT authentication, Stripe and PayPal integration, 
                secure video access via Cloudinary, and a fully
                 responsive UI styled with Tailwind CSS and managed via Redux Toolkit.
                 <span className="text-black px-2 text-2xl bg-cyan-500 rounded-4xl"><a href="https://github.com/pranav307/learningms">Github Link:Link</a></span>
            </h1>

        </div>
    )
}

export default Lms;