

import React from 'react'

export default function ScrollList() {

    let bookingList = [1, 2, 3, 4, 5, 6, 7, 8]

    return (
        <div className="overflow-y-auto h-[300px] scroll py-5 " >
            {
                bookingList.map((item, index) => (
                    <div className="flex justify-around items-center px-[50px] pb-4 ">
                        <p className="lg:size-[58px] md:size-12 sm:size-10 size-8 rounded-full bg-[#474536]  sm:text-[28px] md:text-[20px] lg:text-[25px] grid place-items-center text-[#ffffff] ">
                            {index + 1}
                        </p>
                        <div className="border-b w-[90%] ms-3 lg:ms-0  lg:text-[25px] md:text-[20px] text-[17px] font-[600] text-[#474536] border-b-[#474536] flex justify-between items-center">
                            <p>
                                Booking Advance
                            </p>
                            <p>
                                10%
                            </p>
                        </div>
                    </div>
                ))

            }

        </div>
    )
}
