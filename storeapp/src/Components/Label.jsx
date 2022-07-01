import React from 'react'

const Label = ({label,price}) => {
  return (
    <div style={{display:"flex",gap:"1rem"}}>

        <div><h2>{label}</h2></div>
        <div><h2>{price}</h2></div>
    </div>
  )
}

export default Label