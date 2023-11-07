import Image from "next/image";
import face from "@/public/assets/navbar/face.svg";
import starFill from "@/public/assets/navbar/star-fill.svg";
import starEmpty from "@/public/assets/navbar/star-empety.svg";
import React, {useRef} from "react";
import {CSSTransition} from "react-transition-group";

export default function Kitchens(props) {
    const nodeRef = useRef(null);
    return (
        <CSSTransition nodeRef={nodeRef} in={props.inProp} timeout={(props.score*100)+2000} classNames="nav">
            <div ref={nodeRef}
                 style={{animationDelay:(props.score*10)+100+"ms"}}
                className={"w-[350px] h-[77px] text-black bg-white text-center flex justify-around px-3 items-center shadow-zinc-900 my-1 hover:shadow-xl border-b-2 relative hover:z-50"}>
                <Image width={80} height={80} src={face} alt={"sticker for rest"}></Image>
                <div className={"flex flex-col gap-3"}>
                    <div key={props.index}>{props.product}</div>
                    <div className="flex justify-center">
                        <Image height={20} width={20} src={starFill} alt={"start"}></Image>
                        <Image height={20} width={20} src={starFill} alt={"start"}></Image>
                        <Image height={20} width={20} src={starFill} alt={"start"}></Image>
                        <Image height={20} width={20} src={starEmpty} alt={"start"}></Image>
                        <Image height={20} width={20} src={starEmpty} alt={"start"}></Image>
                    </div>
                </div>
                <button className={"btn-success h-10"} onClick={() => props.filterWithKitchenName(props.product)}>
                    انتخاب
                </button>
            </div>
        </CSSTransition>
    )
}
