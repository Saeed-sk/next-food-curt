import React, {Fragment} from "react";
import {Transition} from "react-transition-group";
import Image from "next/image";
import mehman from "../../public/assets/selectIcons/mehman.svg";
import kadr from "../../public/assets/selectIcons/kadr.svg";
import daneshjo from "../../public/assets/selectIcons/daneshjo.svg";
import ostad from "../../public/assets/selectIcons/ostad.svg";
import selectTick from "../../public/assets/selectIcons/selectTick.svg";


function SelectRole(props) {
    return (
        <article>
            <div
                className={`bg-gradient-to-br from-yellow-400 to-green-600 md:p-32 rounded-lg ${props.role && "scale-in-center"}`}>
                <div
                    className={"flex flex-col bg-white md:p-48 rounded-lg md:gap-20 justify-center text-center"}>
                    <h2 className={"text-2xl font-bold tracking-in-expand"}>دوست عزیز نوع کاربری خود را <small className={"text-2xl text-red-700 underline underline-offset-4"}>انتخاب</small> کنید</h2>
                    <div className="flex justify-around gap-28 md:flex-row-reverse sm:flex-col">
                        <div
                            className="slide-in-elliptic-top-fwd cursor-pointer flex flex-col items-center group relative text-gray-400 hover:text-green-700 shadow-green-800 hover:drop-shadow-2xl"
                            onClick={() => props.selectrole(1)} style={{animationDelay: '0.1s'}}>
                            <Image
                                className={" border-4 box-content p-10 rounded-lg group-hover:border-green-300 transition-all"}
                                src={mehman} alt={"mehman"}></Image>
                            <Image
                                className={"absolute bottom-5 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all "}
                                src={selectTick} alt={selectTick}></Image>
                            <h2 className={"font-bold pt-3"}>مهمان</h2>
                        </div>

                        <div
                            className="slide-in-elliptic-top-fwd cursor-pointer flex flex-col items-center group relative text-gray-400 hover:text-green-700 shadow-green-800 hover:drop-shadow-2xl"
                            onClick={() => props.selectrole(2)} style={{animationDelay: '0.3s'}}>
                            <Image
                                className={"border-4 box-content p-10 rounded-lg group-hover:border-green-300 transition-all"}
                                src={kadr} alt={"kadr"}></Image>
                            <div
                                className="absolute bottom-5 scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100  transition-all">
                                <Image
                                    src={selectTick} alt={selectTick}></Image>
                            </div>
                            <h2 className={"font-bold pt-3"}>کادر</h2>
                        </div>

                        <div
                            className="slide-in-elliptic-top-fwd cursor-pointer flex flex-col items-center group relative text-gray-400 hover:text-green-700 shadow-green-800 hover:drop-shadow-2xl"
                            onClick={() => props.selectrole(3)} style={{animationDelay: '0.5s'}}>
                            <Image
                                className={"border-4 box-content p-10 rounded-lg group-hover:border-green-300 transition-all"}
                                src={daneshjo} alt={"daneshjo"}></Image>
                            <Image
                                className={"absolute bottom-5 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all "}
                                src={selectTick} alt={selectTick}></Image>
                            <h2 className={"font-bold pt-3"}>دانشجو</h2>
                        </div>

                        <div
                            className="slide-in-elliptic-top-fwd cursor-pointer flex flex-col items-center group relative text-gray-400 hover:text-green-700 shadow-green-800 hover:drop-shadow-2xl"
                            onClick={() => props.selectrole(4)} style={{animationDelay: '0.7s'}}>
                            <Image
                                className={"border-4 box-content p-10 rounded-lg group-hover:border-green-300 transition-all "}
                                src={ostad} alt={"ostad"}></Image>
                            <Image
                                className={"absolute bottom-5 scale-0 group-hover:scale-100 transition-all opacity-0 group-hover:opacity-100"}
                                src={selectTick} alt={selectTick}></Image>
                            <h2 className={"font-bold pt-3"}>استاد</h2>
                        </div>
                    </div>

                </div>
            </div>
        </article>
    )
}

export default SelectRole