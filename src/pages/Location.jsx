import Counter from "../components/Counter";
import FinDistrict from "../components/FinDistrict";
import banner from "../images/Group_1157.png";
import locMap from "../images/Mask group.png";
import video from "../images/Rectangle_542.png";
import border from "../images/Group 1214.png";
import disImage from "../images/Group 1454.png";
// import counterBorderImg from "../images/Vector 61.png";

function Location() {
    return (
        <>
            <div className="w-full grid place-items-center lg:py-[120px] py-9 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
                <h1 className="text-white text-[30px] md:text-[40px] lg:text-[50px] uppercase text-center">
                    Live at the heart <br /> of all the action!
                </h1>
                <div className="flex flex-wrap justify-center pt-4">
                    <Counter num="20+" text="IT Parks" line="sm:border-r"/>
                    <Counter num="9+" text="International Schools" line="sm:border-r"/>
                    <Counter num="12+" text="Entertainment zones" line="sm:border-r-0"/>
                </div>
            </div>
            <div className="container mx-auto ">
                <h1 className="text-[#515151] ps-5 text-[28px] sm:text-[25px] md:text-[35px] lg:text-[40px] text-center lg:text-left font-[700]">
                    Why<br />
                    Financial District?
                </h1>
                <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 my-4">
                    <FinDistrict text="Favorite of IT Giants" />
                    <FinDistrict text="Stay Connected." style="lg:me-20"/>
                    <FinDistrict text="Great Infrastructure." />
                    <FinDistrict text="Best Investment Opportunities." border="md:border-r-0" />
                </div>
            </div>
            <div className="container mx-auto pt-5 text-center pb-[20px]">
                <h1 className="uppercase text-[28px] sm:text-[25px] md:text-[35px] lg:text-[40px]  font-[700] my-4">
                    Location Map
                </h1>
                <p className="text-[14px] sm:text-[19px] font-[600] my-2 text-[#625D5D] text-center">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
                    Lorem Ipsum has been the industry's standard dummy text ever since.
                </p>
                <div className="w-full lg:w-[853px] lg:h-[690px] m:h-[300px] h-[200px] px-2 mx-auto">
                    <img  src={locMap} alt="Location Map" className="w-[100%] h-[100%] object-contain" />
                </div>
            </div>
            <div className="lg:h-[500px] md:h-[250px] h-[160px] w-full container px-2 mx-auto  ">
                {/* <video className="w-full">
                    <source src={video} type="" />
                </video> */}
                <img className="w-[100%] h-[100%] object-fill" src={video} alt="Video" />
            </div>
            <div className="container mx-auto pb-5 pt-[20px]">
                <h1 className="uppercase text-center text-[28px] sm:text-[25px] md:text-[35px] lg:text-[40px]  font-[700]">
                    Nearby, Sushma Belleza
                </h1>
                <div className="w-[120px] sm:w-[243px] mx-auto py-5">
                    <img className="w-full h-auto" src={border} alt="Border" />
                </div>
                <div className="w-full py-5">
                    <img className="w-full h-auto" src={disImage} alt="District Image" />
                </div>
            </div>
        </>
    );
}

export default Location;
