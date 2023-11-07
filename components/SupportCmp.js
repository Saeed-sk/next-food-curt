import React from 'react';
import supportSvg from "@/public/assets/Support/supprt.svg"
import Image from "next/image";
import Link from "next/link";

function SupportCmp(props) {
    return (
        <div className={"mx-auto flex flex-col items-center justify-center bg-support-bg bg-cover bg-no-repeat "}>
            <Image className={"scale-in-center"} src={supportSvg} alt={"supportSvg"} height={600} width={800} />
            <div className={"nav-enter"}>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-10">
                    <table className="w-full text-sm text-center ">
                        <thead className="text-sm text-gray-800 uppercase bg-gray-300">
                        <tr>
                            <th scope="col" className="px-24 py-3">
                                شماره تماس
                            </th>
                            <th scope="col" className="px-24 py-3">
                                سمت
                            </th>
                            <th scope="col" className="px-24 py-3">
                                شخص
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="border-b bg-[#F0F0F0] hover:bg-gray-300">
                            <th scope="row" className="px-24 py-4 font-medium text-gray-900 whitespace-nowrap">
                                099911123123
                            </th>
                            <td className="px-24 py-4">
                                مدیریت سایت
                            </td>
                            <td className="px-24 py-4">
                                مهدی محمدی
                            </td>
                        </tr>
                        <tr className="border-b bg-white hover:bg-gray-300">
                            <th scope="row" className="px-24 py-4 font-medium text-gray-900 whitespace-nowrap">
                                09991112222
                            </th>
                            <td className="px-24 py-4">
                                مدیریت منابع
                            </td>
                            <td className="px-24 py-4">
                                سید محسن موسوی
                            </td>
                        </tr>
                        <tr className="border-b bg-[#F0F0F0] hover:bg-gray-300">
                            <th scope="row" className="px-24 py-4 font-medium text-gray-900 whitespace-nowrap">
                                099911121224
                            </th>
                            <td className="px-24 py-4">
                                بخش تغذیه
                            </td>
                            <td className="px-24 py-4">
                                سینا مرادی
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Link className={"scale-in-center"} replace href={"/"} >
                <div className={"btn-success w-96 mb-10"}>بازگشت به صفحه اصلی</div>
            </Link>

        </div>
    );
}

export default SupportCmp;