

import { useState } from "react";
import lock from "../images/Vector.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from "@fortawesome/free-solid-svg-icons";

export default function PriceList({ offer, space, banner }) {

    let [view, setViewPrice] = useState("hidden");
    let [btnview, setBtnView] = useState("inline")

    const viewPrice = () => {
        setViewPrice("block")
        setBtnView("hidden")
    }

    const hidePrice = () => {
        setViewPrice("hidden");
        setBtnView("inline")
    }

    return (
        <div className="mb-[100px] md:w-[33%] w-[97%] h-[257px] mx-auto  relative ">

            <img className="w-full h-full object-fill" src={banner} alt="" />

            <div className="size-12 rounded-full bg-[#474536] absolute right-0 bottom-[20%] hidden lg:block">

            </div>
            <div className=" w-[90%] shadow-[0_0_3.9px_0px_#000000] absolute bg-white lg:bottom-[-13%] md:bottom-[-20%] bottom-[-20%]   right-[7%]  ">
                <p className={`bg-[#E2E2E2] text-[#393729] lg:text-[12px] text-[9px] text-center ${space} `}>
                    {offer}
                </p>
                <p className="text-[#181818] font-[500] ps-3 ">
                    3 BHK + STAFF + LOUNGE
                </p>
                <p className="text-[#181818] font-[500] lg:text-[18px] ps-3 ">
                    2815 SQFT.
                </p>
                <button className={`px-3 m-auto ${btnview} py-1 flex justify-center hover:bg-[#474536] hover:text-white items-center my-1 border border-black lg:text-[16px] text-[11px] rounded-[5px] gap-2`} onClick={viewPrice}>
                    <FontAwesomeIcon icon={faLock} />
                    Unlock Price
                </button>
                <div className={`bg-[#474536] cursor-pointer mt-2 ${view}`} onClick={hidePrice}>
                    <p className="text-[#FFFFFF] lg:text-[18px] text-center py-1">₹ 1,00,000</p>
                </div>
            </div>
        </div>
    )
}
