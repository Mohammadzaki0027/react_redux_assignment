import React from 'react'
import Styles from "./cart.modules.css"
import Label from './Label'
import Qty from './Qty'
const Items = ({label,price,qty,id,qunatitychangefun}) => {
  return (
    <div
    style={{display:"flex",gap:"1rem",padding:"2rem",justifyContent:"center",alignItems:"center"}}>
<Label label={label} price={price}></Label>
<Qty qty={qty} incqty={()=>qunatitychangefun(id,1)} dncqty={()=>qunatitychangefun(id,-1)}></Qty>
    </div>
  )
}

export default Items