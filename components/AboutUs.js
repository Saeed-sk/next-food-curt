import React from 'react';
import aboutSvg from "@/public/assets/about/aboutUs.svg"
import Image from "next/image";
import Link from "next/link";
function AboutUs(props) {
    return (
        <div className={"flex flex-col justify-center items-center gap-14 bg-support-bg bg-no-repeat bg-cover"}>
            <Image className={"mt-40 slide-in-fwd-bottom"} src={aboutSvg} alt={"about us page"} width={700} height={700} />
            <h2 className={"text-2xl font-bold text-gray-600 scale-in-center"} style={{animationDelay:600+"ms"}}>ساخته شده توسط گروه برنامه نویسان جوان</h2>
            <Link className={"btn-success slide-in-fwd-bottom mb-40"} href={"/"}>بازگشت به صفحه ی اصلی</Link>
        </div>
    );
}

export default AboutUs;