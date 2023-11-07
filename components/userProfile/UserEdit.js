import React, {useContext} from 'react';
import AuthContext from "@/store/authStore";

function UserEdit(props) {
    const authCtx = useContext(AuthContext);
    return (
        <div className={"flex flex-col justify-center items-center gap-14 bg-support-bg bg-no-repeat bg-cover"}>
            <div className={"flex"}>
                <button className={""}>پروفایل</button>
            </div>
        </div>
    );
}

export default UserEdit;