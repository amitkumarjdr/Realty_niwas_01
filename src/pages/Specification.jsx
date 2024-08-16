

import { useState } from "react";
import border from "../images/Group 1214.png";
import Plumbering from "../components/Plumbering";


export default function Specification() {

    let [flat, setFlatStyle] = useState("text-[#474536] bg-[#CECECE]")
    let [bulilding, setBuildingStyle] = useState("bg-[#474536] text-[white]")

    const changeflatStyle = () => {
        setFlatStyle("bg-[#474536] text-[white]")
        setBuildingStyle("text-[#474536] bg-[#CECECE]")
    }
    const changeBuildingStyle = () => {
        setFlatStyle("text-[#474536] bg-[#CECECE]")
        setBuildingStyle("bg-[#474536] text-[white]")
    }

    return (
        <>
            <div className='container mx-auto '>
                <h1 className='uppercase text-center text-[#474536] text-[28px] sm:text-[25px] md:text-[35px] lg:text-[40px]  font-[700] px-3'>
                    SPECIFICATION
                </h1>
                <div className="w-[120px] sm:w-[243px] mx-auto py-5">
                    <img className="w-full h-auto" src={border} alt="Border" />
                </div>

                <div className="  text-center">
                    <button className={` uppercase rounded-l-[10px] lg:text-[23px] md:text-[20px] sm:text-[17px] font-[700] px-[30px] lg:px-[60px] py-1  ${flat} `} onClick={changeflatStyle}> 	flats </button>
                    <button className={` uppercase rounded-r-[10px] lg:text-[23px] md:text-[20px] sm:text-[17px] font-[700] px-[30px] lg:px-[60px] py-1  ${bulilding} `} onClick={changeBuildingStyle}> 	buildings </button>
                </div>
            </div>
            <Plumbering heading = 'Plumbing Fittings' />
            <div className="bg-[#F2F2F1]">
                <Plumbering reverse ="lg:flex-row-reverse" heading = 'Wall Tiling' />
            </div>
            <Plumbering heading = 'Windows'/>
            <div className="bg-[#F2F2F1]">
                <Plumbering reverse ="lg:flex-row-reverse" heading = 'Electrical Fittings'/>
            </div>
        </>
    )
}
