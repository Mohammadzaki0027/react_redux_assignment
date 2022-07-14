import React from 'react'
import { useContext } from 'react'
import { ApiContext } from '../Components/Api'
import Styles from "../Styles/Style.module.css"
const Products = () => {
  const {data}=useContext(ApiContext)
const[updatedata,setUpdateData]=React.useState([])

  const handleclick=(id)=>{

  }
  return (
    <div>
<div className={Styles.products} >
{data.map((items)=>(
<div className={Styles.product} key={items.id}>
  <img src={items.image_url} alt="" />
<h5>{items.name}</h5>
<h5>{items.price}</h5>

<div className={Styles.btn}>
  
  <div><button className={Styles.btn1} onClick={()=>{handleclick(items.id)}}>AddtoCart</button></div>


</div>

</div>
))}
  
  </div>
    </div>
  )
}

export default Products