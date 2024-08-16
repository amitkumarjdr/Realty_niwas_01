import PriceList from "../components/PriceList";
import border from "../images/Group 1214.png";
import img01 from "../images/Rectangle 377.png"
import img02 from "../images/Rectangle_378.png"
import img03 from "../images/Rectangle 379.png"
import Emi_offer from "../components/Emi_offer";
import img04 from "../images/Rectangle 551.png"
import img05 from "../images/Rectangle 551 (1).png"
import img06 from "../images/Rectangle 551 (2).png"
import img07 from "../images/Rectangle 551 (3).png"
import ScrollList from "../components/ScrollList";
import Offer from "../components/Offer";


export default function PricePage() {
    return (
        <>
            <div className='container mx-auto px-0'>
                <h1 className='uppercase text-center text-[#474536] text-[28px] sm:text-[25px] md:text-[35px] lg:text-[40px]  font-[700] px-3'>
                    price list
                </h1>
                <div className="w-[120px] sm:w-[243px] mx-auto py-5">
                    <img className="w-full h-auto" src={border} alt="Border" />
                </div>
                <div className=" md:flex gap-2 ">
                    <PriceList offer="Pay only 20%  & Zero Pre EMI till Possession" banner={img01} />
                    <PriceList offer="Pay only 20%  & Zero Pre EMI till Possession" banner={img01} />
                    <PriceList space="py-[9px] bg-[white]" banner={img01} />
                </div>
            </div>
            <div className='container mx-auto lg:pt-[10px]  pb-5 '>
                <h1 className='uppercase text-center text-[#474536] text-[28px] sm:text-[25px] md:text-[35px] lg:text-[40px]  font-[700] px-3'>
                    Payment Structure
                </h1>
                <div className="w-[120px] sm:w-[243px] mx-auto py-5">
                    <img className="w-full h-auto" src={border} alt="Border" />
                </div>
                <div className="bg-[#F1F1F1] rounded-[10px] py-[50px] pe-5 ">
                    <h1 className="text-[30px] text-[#494949] font-[700] text-center my-3 px-3 ">
                        Milestone Details
                    </h1>
                    <ScrollList />
                </div>
            </div>
            <div className='container mx-auto py-5 '>
                <h1 className='uppercase text-center text-[#474536] text-[28px] sm:text-[25px] md:text-[35px] lg:text-[40px]  font-[700] px-3'>
                    pre-emi offer
                </h1>
                <div className="w-[120px] sm:w-[243px] mx-auto py-5">
                    <img className="w-full h-auto" src={border} alt="Border" />
                </div>
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
                    <Emi_offer text = "Know more & book a flat" img = {img04}/>
                    <Emi_offer text = "Opt for home loan" img = {img05} />
                    <Emi_offer text = "Get monthly interest reimbursed" img = {img06} />
                    <Emi_offer text = "Save until structure completion" img = {img07} />
                </div>
            </div>
            <Offer />
        </>
    )
}
