


export default function Emi_offer({img,text}) {
  return (
    <>
        <div className='sm:mx-0 mx-3 '>
            <div className='w-[100%] h-[250px] lg:h-[453px] rounded-[10px] overflow-hidden'>
                <img className="w-[100%] h-[100%] object-fill" src={img} alt="" />
            </div>
            <h1 className="lg:text-[30px] md:text-[25px] sm:text-[20px] text-[17px] font-[700] mt-4 text-[#474536] capitalize ">
            {text}
            </h1>
            <p className="lg:text-[21px] md:text-[18px] text-[15px] text-[#565555] font-[700] flex-wrap ">
            Visit our site and book your flat for around ₹20 Lakh
            </p>
        </div>
    </>
  )
}
