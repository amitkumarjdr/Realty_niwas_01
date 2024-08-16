

import offerImg from "../images/Group 1459.png"
import border from "../images/Group 1214.png";


export default function Offer() {
    return (
        <div className='container mx-auto mb-4 '>
            <h1 className='uppercase text-center text-[#474536] text-[28px] sm:text-[25px] md:text-[35px] lg:text-[40px]  font-[700] '>
                Offer
            </h1>
            <div className="lg:w-[180px] md:w-[110px] w-[80px]  mx-auto py-2">
                <img className="w-full h-auto" src={border} alt="Border" />
            </div>
            <div className='w-full lg:h-[614px]  '>
                <img className="w-full h-auto" src={offerImg} alt="Border" />
            </div>

        </div>
    )
}
