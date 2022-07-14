import React,{ createContext } from "react";
import axios from "axios"

export const ApiContext=createContext()

export const ApiPro=({children})=>{
    const[data,setData]=React.useState([])
   
const getapi= async ()=>{
let r=await axios.get("http://localhost:8080/womens")

setData(r.data)

}

React.useEffect(() => {
 getapi()
}, [])

return (
    <ApiContext.Provider value={{data}}>{children}</ApiContext.Provider>
)
}

