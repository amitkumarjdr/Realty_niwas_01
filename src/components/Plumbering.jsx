

import React from 'react'
import PlumberignTextContent from './PlumberignTextContent'
import washbasinImg from "../images/Rectangle 439.png"

export default function Plumbering({reverse,heading}) {

    let myArr = [
        'Washbasin',
        'Common Washbasin',
        'Bathroom Tap',
        'Utility Tap',
        'Commode',
        'Washing Machine'
    ]

    return (
        <div className={`container mx-auto flex justify-between items-center ${reverse} flex-col-reverse sm:flex-row py-[50px] `}>
            <div className='lg:w-[55%] mx-auto'>
                <h1 className='lg:text-[50px] md:text-[35px] sm:text-[30px] text-[28px] text-[#474536] leading-tight text-center lg:text-left font-[700] '>{heading}</h1>
                <div className='grid sm:grid-cols-2 sm:gap-4 mt-5 '>
                {
                    myArr.map((item, index) => (
                        <PlumberignTextContent text={item} />
                    ))
                }
                </div>
            </div>
            <div className='lg:w-[40%] lg:h-[600px] w-[90%] sm:h-[400px] h-[240px] mx-auto'>
                <img className='w-[100%] h-[100%] object-cover' src={washbasinImg} alt="" />
            </div>
        </div>
    )
}
