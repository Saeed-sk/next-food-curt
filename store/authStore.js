import {createContext, useEffect, useReducer, useState} from "react";
import dummyAuth from "@/dummy-data/authData.json"

const AuthContext = createContext({
    userData: null,
    setAuthData: () => {
    },
    loggedIn: () => {

    }
});

export function AuthContextProvider(props) {

    const [auth, setAuth] = useState(dummyAuth.login[0]);
    const [loggedIn, setLoggedIn] = useState(false);

    function setAuthData(data) {
        setAuth(data);
        setAuth(dummy.filter(dummyAuth => dummyAuth.name === data.userName))
    }

    function login() {
        if (auth.length === 1)
            setLoggedIn(true)
        else
            setLoggedIn(false);
        return loggedIn;
    }

    const context = {
        userData: auth,
        setAuthData: setAuthData,
        login: login,
        loggedIn: loggedIn
    };

    return (
        <AuthContext.Provider value={context}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
