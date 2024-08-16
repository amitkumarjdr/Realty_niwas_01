
import img13 from "../images/Group.png"

import React from 'react'

export default function GalleryImages({img,style}) {
    return (
        <div class={`${style} relative group md:w-full md:h-full `}>
            <img class=" w-[100%]  h-[100%]" src={img} alt="" />
            <div className="w-[100%] h-[100%] absolute flex justify-center top-0 left-0 items-center bg-[#12121280] scale-0 group-hover:scale-100 group-hover:duration-700">
                <p className="lg:text-[44px] md:text-[30px] font-[500] z-3 text-white">
                    Meditation Hall
                </p>
                <div className="absolute md:size-16 size-7 bottom-[10px] right-[10px] ">
                    <img src={img13} alt="" />
                </div>
            </div>
        </div>
    )
}
