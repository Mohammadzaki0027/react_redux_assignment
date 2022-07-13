import React from 'react'
import Styles from "./cart.modules.css"
const Button = ({onClick,children,disabled}) => {
  return (
  <button onClick={onClick} disabled={disabled} style={{padding:"1rem",border:0,borderWidth:0,fontWeight:"bold",backgroundColor:"tomato",color:"white"}}>
{children}
  </button>
  )
}

export default Button