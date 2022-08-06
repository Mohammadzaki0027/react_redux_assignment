import React,{ createContext } from "react";
import axios from "axios"
import { Navigate } from "react-router-dom";

export const ApiContext=createContext()

export const ApiPro=({children})=>{
    const[data,setData]=React.useState([])
    const[cart,setCart]=React.useState([])
    const handleclick=(id,name)=>{
        console.log(id)
        const updatetodo = data.map((items) =>
       
        items.id === id
          ? {
              ...items,
              status: !items.status,
            }
          : items
      );
      setData(updatetodo)

 
     
    }
console.log(data)
const getapi= async ()=>{
let r=await axios.get("http://localhost:8080/womens")

setData(r.data)

}

React.useEffect(() => {
 getapi()
 console.log(data)
}, [])

return (
    <ApiContext.Provider value={{data,handleclick}} >{children}</ApiContext.Provider>
)
}

