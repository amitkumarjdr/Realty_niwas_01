import buiidingImg from "../images/Group 1245.png"

import React from 'react'

export default function FinDistrict({text,border,style}) {
    return (
        <>
            <div className={` m-3 lg:m-0 sm:text-center sm:mx-auto  sm:border-0 md:border-r md:border-r-[#BFBDAC] pe-[50px] ps-5 ${border}`}>
                <div className="lg:w-[70px] lg:h-[70px] size-[50px] mx-auto  md:mx-0">
                    <img className="w-[100%]  h-[100%]" src={buiidingImg}  />
                </div>
                <p className={`text-[#393729] lg:text-[30px] ${style} md:text-start text-center text-nowrap md:text-wrap lg:text-start leading-tight text-[20px] `}>
                    {text}
                </p>
                <p className='text-[#808080] lg:text-[16px] text-start md:text-justify text-[13px] '>
                    Gachibowli boasts of the
                    biggest names in the commercial
                    world. From Apple, to Amazon, to
                    Capgemini, you name it and you'll
                    find it here!
                </p>
            </div>
        </>
    )
}
