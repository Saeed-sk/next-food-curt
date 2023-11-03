import Navbar from "@/components/navbar/Navbar";
import {Fragment, useContext} from "react";
import MainPage from "@/components/Main/MainPage";
import {ProductContextProvider} from "@/store/prodctStore";
import Sidebar from "@/components/Main/sidebar/Sidebar";


export default function Home(props) {
    return (
        <div className={"flex"}>
            <div className={"w-3/12 h-full"}>
                <Sidebar/>
            </div>
            <div className={"w-9/12"}>
                <Navbar/>
                <MainPage/>
            </div>
        </div>

    )
}


{/*<Head></Head>*/
}