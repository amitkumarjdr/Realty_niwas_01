import React from 'react';

function Counter({ num, text, line }) {
    return (
        <div className={`w-[130px]  sm:mx-3 pe-5 leading-none space-y-2 ${line}`}>
            <h1 className='text-white text-center lg:text-left text-[36px] md:text-[54px] '>
                {num}
            </h1>
            <p className='text-[16px] sm:text-[17px] uppercase text-white  text-center sm:text-left '>
                {text}
            </p>
        </div>
    );
}

export default Counter;
