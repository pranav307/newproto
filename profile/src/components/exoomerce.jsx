





function Ecom(){


    return (
        <div className="sm:mt-2 mt-16">

            <h1 className="text-2xl font-serif text-center m-4 hover:underline hover:decoration-cyan-400 text-white"> eCommerce project</h1>
            <div className="grid sm:grid-cols-2 grid-cols-1 ">
              <img src="/public/assets/ef3ca2118170003.6083c712c5092.jpg"
              className="w-full h-full object-cover p-2"
              ></img>
              <img src="public/assets/final_look_bajaar_theme.png"
                 className="w-full h-full object-cover p-2"
              ></img>
            </div>

            <h1 className="p-4 font-serif bg-cyan-100 ">
                E-commerce Web App is a full-featured online shopping platform
                 built with the MERN stack (MongoDB, Express, React, Node.js). 
                 It includes user authentication, product listings, dynamic filtering,
                  cart management, order tracking, and secure payments through PayPal and Stripe.
                   Admins can manage products, orders, and users through a dedicated dashboard. 
                   The frontend is responsive and styled using Tailwind CSS, 
                with global state managed via Redux Toolkit.
                 <span className="text-black px-2 text-2xl bg-cyan-500 rounded-4xl"><a href="https://github.com/pranav307/wwe">Github Link:Link</a></span>
            </h1>

        </div>
    )
}

export default Ecom;