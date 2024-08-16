import { useEffect, useState } from "react";
import formImg from "../images/Rectangle 616.png";

export function ContactForm() {
  let [formData, setFormData] = useState({});

  let [error, setError] = useState({});

  const handleFormData = (e) => {
    let { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleForm = (e) => {
    e.preventDefault();

    let newError = {};

    if (!formData.firstName) {
      newError.firstName = "First name is required";
    }

    if (!formData.lastName) {
      newError.lastName = "Last name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      newError.email = "Please Enter Valid Email";
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.contact)) {
      newError.contact = "Please Enter Valid Phone Number";
    }
    if (Object.keys(newError).length > 0) {
        setError(newError);
        setTimeout(() => {
            setError(" ");
          }, 4000);
      return 
    }
    else{
        
        console.log(formData)
    }
  };

  useEffect(()=>{
    
  },[error])

  return (
    <div className="mx-auto border shadow-[0_0px_4px_2px_rgba(0,0,0,0.25)] rounded-[19px] py-5  mx-2 my-[60px]">
      <div className="sm:flex items-center justify-center  ">
        <div className="md:h-[600px] sm:h-[550px] px-3 h-[300px] ">
          <img
            alt="Contact us"
            className=" h-[100%] w-full rounded-lg "
            src={formImg}
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="px-2 md:px-12 md:pt-5  lg:pt-0">
            <p className="text-2xl  text-gray-900 md:text-[30px] lg:text-[35px] font-[700]">
              Get in Touch
            </p>
            <p className="mt-2 lg:text-lg md:text-[15px] font-[500] text-gray-600">
              You have any question? feel free to contact us.
            </p>
            <form action="" className="mt-8 md:space-y-5 space-y-1" onSubmit={handleForm}>
              <div className="grid w-full md:gap-y-3 lg:gap-x-4  lg:grid-cols-2 sm:grid-cols-1 grid-cols-2 gap-2">
                <div className="grid w-full  items-center gap-1.5 relative">
                  <label
                    className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="first_name"
                  >
                    First Name
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-1 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 capitalize"
                    type="text"
                    id="first_name"
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName  }
                    onChange={handleFormData}
                  />
                  <span className=" text-red-600 text-[12px] absolute bottom-[-20px] px-4">
                    {error.firstName}
                  </span>
                </div>
                <div className="grid w-full  items-center gap-1.5 relative">
                  <label
                    className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="last_name"
                  >
                    Last Name
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 capitalize"
                    type="text"
                    id="last_name"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleFormData}
                  />

                  <span className=" text-red-600 text-[12px] absolute bottom-[-20px] px-4 ">
                    {error.lastName}
                  </span>
                </div>
              </div>
              <div className="grid w-full md:gap-y-3 md:gap-x-4  lg:grid-cols-2 sm:grid-cols-1 grid-cols-2 gap-2">
                <div className="grid w-full  items-center gap-1.5 relative">
                  <label className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Mobile
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                    type="text"
                    id="Mobile"
                    placeholder="0123456789"
                    name="contact"
                    value={formData.contact}
                    onChange={handleFormData}
                  />
                  <span className=" text-[12px] text-red-600 px-1 absolute bottom-[-20px]">
                    {error.contact}
                  </span>
                </div>
                <div className="grid w-full  items-center gap-1.5 relative">
                  <label className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Email
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                    type="email"
                    id="Email"
                    placeholder="abc@gmail.com"
                    name="email"
                    value={formData.email }
                    onChange={handleFormData}
                  />
                  <span className="text-[12px] text-red-600 absolute bottom-[-20px]">
                    {error.email}
                  </span>
                </div>
              </div>

              <div className="grid w-full  items-center gap-1.5">
                <label
                  className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="flex lg:h-[173px] w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                  id="message"
                  placeholder="Leave us a message"
                  cols={3}
                  name="msg"
                  value={formData.msg}
                  onChange={handleFormData}
                />
              </div>
              <button className=" rounded-md bg-[#474536] md:px-3 md:py-3 px-2 py-1 mt-5 md:text-lg font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:text-[#474536] hover:bg-white border border-[#474536]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
