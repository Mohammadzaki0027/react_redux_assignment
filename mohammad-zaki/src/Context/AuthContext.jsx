import React,{ createContext } from "react";
import { Navigate } from "react-router-dom";

export const Auth=createContext()

export const AuthProvider=({children})=>{
const[isAuth,setIsAuth]=React.useState(false)

const login=()=>{
setIsAuth(true)

}
const logout=()=>{
    setIsAuth(false)
}

    return(<Auth.Provider value={{isAuth,login,logout}}>{children}</Auth.Provider>)
}