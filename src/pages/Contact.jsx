import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import border from "../images/Group 1214.png";
import { faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { ContactForm } from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <div className="lg:container mx-auto my-5">
        <h1 className='uppercase text-center text-[#474536] text-[28px] sm:text-[25px] md:text-[35px] lg:text-[40px]  font-[700] px-3 my-5 '>
          contact
        </h1>
        <div className="w-[120px] sm:w-[243px] mx-auto ">
          <img className="w-full h-auto" src={border} alt="Border" />
        </div>
        <div className="bg-[#474536] sm:grid sm:grid-cols-3 text-white  py-5 my-11">
          <div className=" flex sm:justify-center justify-around  my-3 lg:my-0 lg:w-auto mx-auto items-center  ">
            <div className="lg:size-[66px] md:size-[50px] size-[40px] me-2 rounded-full border border-white flex justify-center items-center">
              <FontAwesomeIcon
                className="lg:size-[27px] md:size-[20px] size-[15px] hover:rotate-[360deg] duration-1000"
                icon={faPhoneVolume}
              />
            </div>
            <div className="lg:text-[26px]  text-[17px]">
              <a href="tel:0123456789" className="hover:underline "> +91 0123456789 </a><br />
              <a href="tel:0123456789" className="hover:underline "> +91 0987654321 </a>
            </div>
          </div>
          <div className="  flex sm:justify-center   justify-around ps-2 items-center  lg:w-auto mx-auto my-3 lg:my-0  ">
            <div className="lg:size-[66px] md:size-[50px] size-[40px] me-2 rounded-full border border-white flex justify-center items-center">
              <FontAwesomeIcon
                className="lg:size-[27px] md:size-[20px] size-[15px] hover:rotate-[360deg] duration-1000"
                icon={faEnvelope}
              />
            </div>
            <div className="lg:text-[26px]  text-[17px]">
              <a href="mailto:https://mail.google.com/" className="hover:underline "> Needhelp@gmail.com</a><br />
              <a href="mailto:https://mail.google.com/" className="hover:underline "> sushma@gmail.com  </a>
            </div>
          </div>
          <div className="flex sm:justify-center  justify-around  items-center  lg:w-auto mx-auto my-3 lg:my-0  ">
            <div className="lg:size-[66px] md:size-[50px] size-[40px] me-2 rounded-full border border-white flex justify-center items-center">
              <FontAwesomeIcon
                className="lg:size-[27px] md:size-[20px] size-[15px] hover:rotate-[360deg] duration-1000"
                icon={faLocationDot}
              />
            </div>
            <div className="lg:text-[26px]  text-[17px] ">
              <a href="tel:0123456789" className="hover:underline duration-1000">PR-7 Airport Road,<br /> Zirakpur, Punjab </a>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </>
  );
}
