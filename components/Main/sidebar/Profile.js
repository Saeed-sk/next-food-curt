import React from 'react';
import Image from "next/image";
import Link from "next/link";
import shopSvg from "@/public/assets/sidebar/profile/shop.svg";
import bagSvg from "@/public/assets/sidebar/profile/bag.svg";
import exitSvg from "@/public/assets/sidebar/profile/exit.svg";
import contactSvg from "@/public/assets/sidebar/profile/contact.svg";
import wallet2Svg from "@/public/assets/sidebar/profile/wallet2.svg";

function Profile(props) {
    return (
        <div className={"bg-gray-100 mx-9 rounded-xl flex flex-col gap-4 py-10 mb-40"}>
            <div className={"flex gap-2 items-center justify-start pr-16"}>
                <Image
                    className={"rounded-full w-24 h-24 object-cover"}
                    src={props.user.image}
                    alt={"user image"} height={300} width={300}/>
                <div className={"font-bold text-lg pr-2"}>
                    <h1>{props.user.name}</h1>
                    <div className={"flex text-gray-500 gap-1 text-sm"}>
                        <h1> نوع کاربری:</h1>
                        <h1>{props.user.user}</h1>
                    </div>
                </div>
            </div>
            <Link href={"/user-profile"} className={"btn-success float-left mx-10"}>
                ویرایش پروفایل
            </Link>
            <hr className={"h-1 border-0 bg-gray-300"}/>

            <Link className={"flex text-lg items-center pr-4 underline-offset-4 hover:text-red-400 transition-all hover:underline text-gray-500 gap-2"} href={"/"}>
                <Image className={"w-6"} src={shopSvg} alt={"shop Svg"} height={20} width={20}></Image>
                <h2>سبد خرید</h2>
            </Link>

            <Link className={"flex text-lg items-center pr-4 underline-offset-4 hover:text-red-400 transition-all hover:underline text-gray-500 gap-2"} replace href={"/"}>
                <Image className={"w-6"} src={bagSvg} alt={"bag Svg"} height={20} width={20}></Image>
                <h2>سفارشات</h2>
            </Link>

            <Link className={"flex text-lg items-center pr-4 underline-offset-4 hover:text-red-400 transition-all hover:underline text-gray-500 gap-2"} href={"/"}>
                <Image className={"w-6"} src={wallet2Svg} alt={"wallet Svg"} height={20} width={20}></Image>
                <h2>کیف پول</h2>
            </Link>

            <Link className={"flex text-lg items-center pr-4 underline-offset-4 hover:text-red-400 transition-all hover:underline text-gray-500 gap-2"} replace href={"/support"}>
                <Image className={"w-6"} src={contactSvg} alt={"contact Svg"} height={20} width={20}></Image>
                <h2>ارتباط با ما</h2>
            </Link>

            <Link className={"flex text-lg items-center pr-4 underline-offset-4 hover:text-red-400 transition-all hover:underline text-gray-500 gap-2"} href={"/"}>
                <Image className={"w-6"} src={exitSvg} alt={"exit Svg"} height={20} width={20}></Image>
                <h2>خروج از حساب کاربری</h2>
            </Link>

        </div>
    );
}

export default Profile;