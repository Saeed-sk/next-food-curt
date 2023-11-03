import rest from "../../public/assets/navbar/rst.svg";
import about from "../../public/assets/navbar/about.svg";
import backup from "../../public/assets/navbar/backup.svg"
import Image from "next/image";
import HoverElem from "@/components/navbar/HoverElem";
import {useState} from "react";

function Navbar() {
    const [inProp, setInProp] = useState(false)
    return (
        <nav className={"flex w-full justify-between md:p-5 "}>
            <div>
                <input
                    className={"rounded-full border-2 border-green-600 md:w-[232px] md:h-[40px] pr-10 pb-1 text-xl bg-bg_search bg-[length:20px_20px] bg-[center_right_15px] bg-no-repeat"}
                    type="search" name="search" id="search" placeholder={"جستجو"}/>
            </div>
            <ul className={" font-bold text-2xl flex flex-row-reverse md:gap-14 "}>
                <li className={"group flex text-gray-500 hover:text-[#117300] cursor-pointer text-xl "}>
                    <Image className={"h-8 w-8 pl-2"} src={about} alt={"about svg"}></Image>
                    <h2>درباره ما</h2>
                </li>
                <li className={"group flex text-gray-500 hover:text-[#117300] cursor-pointer text-xl    "}>
                    <Image className={"h-8 w-8 pl-2"} src={backup} alt={"backup svg"}></Image>
                    <h2>پشتیبانی</h2>
                </li>
                <li className={"group flex text-gray-500 hover:text-[#117300] cursor-pointer text-xl relative"} onMouseEnter={() => setInProp(true)} onMouseLeave={() => setInProp(false)}>
                    <Image className={"h-8 w-8 pl-2"} src={rest} alt={"restaurant svg"}></Image>
                    <h2>رستوران ها</h2>
                    <div
                        className={"transition-all scale-y-0 origin-top group-hover:scale-y-100 absolute -right-24 z-50 top-10 border-4 bg-white border-green-600 rounded-xl p-1"}>
                        <HoverElem inProp={inProp}/>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar