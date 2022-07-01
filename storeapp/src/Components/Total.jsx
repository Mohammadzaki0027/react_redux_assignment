import React from 'react'
import Styles from "./cart.modules.css"
const Total = ({total}) => {
  return (
    <div id='totaldiv'>
      <h2>Total: {total}</h2>
      </div>
  )
}

export default Total