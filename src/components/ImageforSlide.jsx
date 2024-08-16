
import img1 from "../images/Rectangle 473.png"
import img2 from "../images/Rectangle 474.png"
import img3 from "../images/Rectangle 475.png"

import React from 'react'

export default function ImageforSlide() {
    return (
        <>
            <div className='flex flex-row lg:h-[500px] Sm:h-[300px] md:h-[400px] pe-3'>
                <div className="px-2  basis-1/2 h-[273px] md:h-auto">
                    <img className="w-[100%] h-[100%] " src={img1} alt="" />
                </div>
                <div className="grid gap-2 grid-rows-2 h-[273px] md:h-auto basis-1/2 ">

                    <div className="w-[100%] lg:h-[250px]  ">
                        <img className="w-[100%] h-[100%]  " src={img2} alt="" />
                    </div>
                    <div className="w-[100%]  lg:h-[250px]  ">
                        <img className="w-[100%] h-[100%] " src={img3} alt="" />
                    </div>

                </div>
            </div>
        </>
    )
}
