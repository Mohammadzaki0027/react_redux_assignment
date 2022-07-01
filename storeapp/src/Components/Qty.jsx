import React from 'react'
import Button from './Button'
import Styles from "./cart.modules.css"
const Qty = ({qty,handlecounter,incqty,dncqty}) => {
  return (
    <div style={{display:"flex",gap:"1rem"}}>
      <Button onClick={incqty}>+</Button>
      <div><h4>{qty}</h4></div>
      <Button onClick={dncqty} disabled={qty===0}>-</Button>
    </div>
  )
}

export default Qty