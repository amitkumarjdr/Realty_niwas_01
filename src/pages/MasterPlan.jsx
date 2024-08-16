
import backImg from "../images/Vector 50.png";
import border from "../images/Group 1214.png";
import landImg from "../images/image 8.png"
import React, { useEffect, useRef, useState } from 'react'
import towerImg from "../images/image 9.png"
export default function MasterPlan() {


  let [activeBtn, setActiveBtn] = useState(1)
  let [towerBanner, setTowerBanner] = useState(towerImg)

  let arr = [ 
    {
      text: 'Entry - Exit',
      img: landImg
    },
    {
      text: 'Seating Terrace',
      img: border
    },
    {
      text: 'Wellness Area',
      img: landImg
    },
    {
      text: 'Children Play Area',
      img: landImg
    },
    {
      text: 'Gazebo',
      img: landImg
    },
    {
      text: 'Fire Tender Entry - Exit',
      img: landImg
    },
    {
      text: 'Palm Grove',
      img: landImg
    },
    {
      text: 'Gazebo',
      img: landImg
    },
    {
      text: 'Lawn',
      img: landImg
    },
    {
      text: 'Yoga Deck',
      img: landImg
    },
    {
      text: 'Walking & Cycling Track',
      img: landImg
    },
    {
      text: 'Sports Corner',
      img: landImg
    },
    {
      text: 'Badminton Court',
      img: landImg
    },
    {
      text: 'Outdoor Gym',
      img: landImg
    },
    {
      text: 'Clubhouse',
      img: landImg
    },
    {
      text: 'Basement Entry',
      img: landImg
    }

  ]

  

  const thisActiveBtn = (index) => {
    setActiveBtn(index)
  }

  return (
    <>
      <div className='bg-cover py-6 my-3' style={{ backgroundImage: `url(${backImg})` }} >
        <div className='container mx-auto my-5 lg:px-0 px-4'>
          <h1 className='uppercase text-center text-[#474536] text-[28px] sm:text-[25px] md:text-[35px] lg:text-[40px]  font-[700] px-3 my-1 '>
            master plan
          </h1>
          <div className="w-[120px] sm:w-[243px] mx-auto py-5">
            <img className="w-full h-auto" src={border} alt="Border" />
          </div>
          <div className="sm:flex justify-between items-center py-1">
            <div className="md:w-[48%] lg:h-[647px] md:h-[400px] sm:h-[200px] h-[190px] " >
              <img className="w-[100%] h-[100%] object-contain" src={landImg} alt="" />
            </div>
            <div className=" md:w-[47%] grid grid-rows-10 grid-flow-col  ">
              {
                arr.map((item, index) => (
                  <div className='text-[#565555] cursor-pointer  text-nowrap  lg:text-[20px] text-[12px] font-[700] ps-2'> {index + 1}  &nbsp; {item.text}</div>
                ))
              }

            </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto my-5 lg:px-0 px-2'>
        <h1 className='uppercase text-center text-[#474536] text-[28px] sm:text-[25px] md:text-[35px] lg:text-[40px]  font-[700] px-3 my-5 '>
          tower plan
        </h1>
        <div className="w-[120px] sm:w-[243px] mx-auto ">
          <img className="w-full h-auto" src={border} alt="Border" />
        </div>
        <p className="lg:text-[20px] font-[600] text-[#444342] my-5 text-center ">
          Click on the buttons below to view the tower plans in detail!
        </p>
        <div className="flex justify-around items-center">
        {
            ['A', 'B', 'C', 'D'].map((item, index) => (
              <button className={`border border-[#474536] rounded-[9px] lg:px-16 md:px-6 px-3 py-1 font-[600] text-[14px] lg:text-[28px] ${(activeBtn === index) ? 'bg-[#474536] text-white' : 'bg-white text-[#474536]'}`} onClick={() => thisActiveBtn(index)}> Tower {item} </button>
            ))
          }
        </div>
        <div className="bg-[#EEEEEE] rounded-[40px] px-5 lg:px-0 p-5 my-20  ">
          <img className="w-[100%] h-[100%] object-cover" src={towerBanner} alt="" />
        </div>
      </div>
    </>
  )
}
