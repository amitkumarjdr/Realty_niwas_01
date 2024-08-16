import GalleryImageSlider from "../components/GalleryImageSlider";
import GalleryVideoSlider from "../components/GalleryVideoSlider";
import border from "../images/Group 1214.png";




export default function Gallery() {
    return (
        <>
            <div className='lg:container mx-auto my-5'>
                <h1 className='uppercase text-center text-[#474536] text-[28px] sm:text-[25px] md:text-[35px] lg:text-[40px]  font-[700] px-3 my-5 '>
                    gallery
                </h1>
                <div className="w-[120px] sm:w-[243px] mx-auto ">
                    <img className="w-full h-auto" src={border} alt="Border" />
                </div>
                <GalleryVideoSlider  />
                <GalleryImageSlider text = "Project Gallery"/>
                <GalleryImageSlider text = "sample Flat"/>
                <GalleryImageSlider text = "CONSTRUCTION UPDATES"/>
            </div>
        </>
    )
}
