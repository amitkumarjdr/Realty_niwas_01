import img1 from "../images/Rectangle 552.png"
import img2 from "../images/Rectangle 553.png"
import img3 from "../images/Rectangle 554.png"
import img4 from "../images/Rectangle 555.png"
import img5 from "../images/Rectangle 556.png"
import img6 from "../images/Rectangle 557.png"
import img7 from "../images/Rectangle 559.png"
import img8 from "../images/Rectangle 560.png"
import img9 from "../images/Rectangle 561.png"
import img10 from "../images/Rectangle 562.png"
import img11 from "../images/Rectangle 563.png"
import img12 from "../images/Rectangle 564.png"
import GalleryImages from "../components/GalleryImages"
import border from "../images/Group 1214.png";

export default function Amenities() {
    return (
        <>
            <h1 className="uppercase text-center text-[#474536] text-[28px] sm:text-[25px] md:text-[35px] lg:text-[40px] font-[700] px-3 my-5">
                AMENITIES
            </h1>
            <div className="w-[120px] sm:w-[243px] mx-auto">
                <img className="w-full h-auto" src={border} alt="Border" />
            </div>
            <div className="max-w-screen-2xl mx-auto px-4 pt-10 pb-2 bg-gray-50">
                <div className="flex flex-col-3 md:flex-row  gap-2">
                    <GalleryImages img={img1} style="flex flex-1 flex-col" />
                    <div className="flex flex-col-1 md:flex-1 md:flex-col gap-2">
                        <GalleryImages img={img2} style="flex flex-1 flex-col" />
                        <GalleryImages img={img3} style="flex flex-1 flex-col" />
                    </div>
                </div>
            </div>
            <div className="max-w-screen-2xl mx-auto px-4 py-2 bg-white">
                <div className="flex md:flex-col-1 md:flex-row gap-2">
                    <GalleryImages img={img4} className="flex-1" />
                    <GalleryImages img={img5} className="flex-1" />
                    <GalleryImages img={img6} className="flex-1" />
                </div>
            </div>
            <div className="max-w-screen-2xl mx-auto px-4 py-2 bg-white">
                <div className="flex md:flex-col-1 md:flex-row gap-2">
                    <GalleryImages img={img7} className="flex-1" />
                    <GalleryImages img={img8} className="flex-1" />
                </div>
            </div>
            <div className="max-w-screen-2xl mx-auto px-4 py-2 bg-white">
                <div className="flex md:flex-col-1 md:flex-row gap-2">
                    <GalleryImages img={img9} className="flex-1" />
                    <GalleryImages img={img10} className="flex-1" />
                    <GalleryImages img={img11} className="flex-1" />
                </div>
            </div>
            <div className="max-w-screen-2xl mx-auto px-4 py-2 bg-white">
                <div className="flex flex-col md:flex-row gap-2">
                    <GalleryImages img={img12} className="flex-1" />
                </div>
            </div>
        </>

    )
}
