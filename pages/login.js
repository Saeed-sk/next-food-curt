import {Fragment, useContext, useState} from "react";
import SelectRole from "@/components/entering/SelectRole";
import Login from "@/components/entering/Login";
import SingIn from "@/components/entering/SingIn";


export default function entering() {

    const [selectRole, setSelectRole] = useState(true)
    const [login, setLogin] = useState(true)
    const [role, setRole] = useState("")

    function selectRoleFn(role) {
        setSelectRole(false)
        setRole(role)
    }

    return (
        <Fragment>
            {selectRole && <SelectRole selectrole={selectRoleFn} role={selectRole}/>}
            {!selectRole && login && <Login setLogin={setLogin} login={login}/>}
            {!selectRole && !login && <SingIn setLogin={setLogin}/>}
        </Fragment>
    )
}