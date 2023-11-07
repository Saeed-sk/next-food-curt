import React, {Fragment, useContext, useState} from "react";
import Image from "next/image";
import vector from "../../public/assets/login/vectorLogin.svg"
import icon from "../../public/assets/login/loginIcon.svg"
import AuthContext from "@/store/authStore";
import {redirect, useRouter} from "next/navigation";


function Login(props) {
    const router = useRouter()
    const context = useContext(AuthContext);
    const [userData, setUserData] = useState({
        userName: '',
        passWord: ''
    })

    function setLogin(e) {
        e.preventDefault()
        props.setLogin(false)
    }

    function userIn(event) {
        event.preventDefault();
        setUserData({...userData, userName: event.target.value})
    }

    function passIn(event) {
        event.preventDefault();
        setUserData({...userData, passWord: event.target.value})
    }

    function loginSubmitHandel(e) {
        e.preventDefault();
        context.setAuthData(userData)
        router.replace('/')
    }

    return (
        <Fragment>
            <section
                className={"bg-[url('../public/assets/login/circle1.svg')] bg-center bg-no-repeat bg-cover h-screen flex flex-row-reverse justify-center items-center md:gap-28"}>
                <div>
                    <form className={"flex flex-col gap-10 font-bold glass-bg p-10 scale-in-center"}
                          onSubmit={loginSubmitHandel}>
                        <Image className={"mx-auto animate-pulse"} src={icon} alt={"svg icon"}></Image>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="name" name="floating_email" id="floating_email" onChange={userIn}
                                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                   placeholder=" "/>
                            <label htmlFor="floating_email"
                                   className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:right-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">نام
                                کاربری</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="password" name="floating_password" id="floating_password" onChange={passIn}
                                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                   placeholder=" "/>
                            <label htmlFor="floating_password"
                                   className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:right-0-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">رمز
                                عبور</label>
                        </div>
                        <div className={"flex flex-col gap-3"}>
                            <input
                                className="w-[428px] h-[48px] cursor-pointer focus:outline-none text-xl text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                type="submit" value="ورود"/>
                            <button onClick={setLogin}
                                    className={"w-[428px] h-[48px] text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xl px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"}>ثبت
                                نام در سایت
                            </button>
                        </div>
                    </form>
                </div>
                <div className="slide-in-elliptic-right-fwd">
                    <Image className={"w-[600px]"} src={vector} alt={vector}></Image>
                </div>
            </section>
        </Fragment>
    )
}

export default Login