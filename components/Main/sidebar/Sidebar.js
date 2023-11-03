import React, {useContext, useState} from "react";
import AuthContext from "@/store/authStore";
import Image from "next/image";
import flash from "@/public/assets/sidebar/flash.svg";
import wallet from "@/public/assets/sidebar/wallet.svg";
import Factor from "@/components/Main/sidebar/Factor";
import tick from "@/public/assets/login/tick.svg";

export default function Sidebar() {
    const context = useContext(AuthContext);
    const [user, setUser] = useState(context.userData);
    return (
        <div className={""}>
            <div className={"flex items-center justify-between p-8"}>
                <div className={"flex gap-2 items-center"}>
                    <Image
                        className={"rounded-full w-20 h-20 object-cover"}
                        src={user.image}
                        alt={"user image"} height={300} width={300}/>
                    <div className={"font-bold text-lg"}>
                        <h1>{user.name}</h1>
                        <h1 className={"text-gray-500"}>{user.user}</h1>
                    </div>
                    <Image className={"mr-3 self-start mt-6"} src={flash} alt={"flash svg"} height={20} width={20}/>
                </div>
                <Image src={wallet} alt={"wallet svg"} height={40} width={40}/>
            </div>
            <div className={"bg-cart-bg bg-center bg-no-repeat mx-14 p-28 py-32 bg-cover relative"}>
                <div className={"text-lg font-bold absolute top-10 right-8"}>کیف پول</div>
                <div className={"text-lg font-bold absolute bottom-16 right-8"}>
                    <div className={""}>موجودی حساب</div>
                    <div className={"flex items-center"}>
                        <div className={"text-sm"}>تومان</div>
                        <div className={"pr-2"}>{user.pocket}</div>
                    </div>
                </div>
            </div>

            <div>
                <Factor/>
            </div>
        </div>
    );
}