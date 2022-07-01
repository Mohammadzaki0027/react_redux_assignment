import React from "react";
import Styles from "./cart.modules.css";
import Items from "./Items";
import Total from "./Total";
const initData = [
  { id: 1, product_name: "Noodles", price: 20, qty: 1 },
  { id: 2, product_name: "Biriyani", price: 90, qty: 2 },
  { id: 3, product_name: "Chips", price: 10, qty: 3 },
];
const CartContainer = () => {
  const [data, setData] = React.useState(initData);
  const producttotal = (products) => {
    return products.reduce((a, c) => a + c.qty * c.price, 0);
  };
 const handleqty=(id,inc)=>{
let updatedata=data.map((e)=>{
  if(e.id===id){
return {...e,qty:e.qty+inc}
  }
  else{
    return e
  }
})
setData(updatedata)
 }
  return (
    <div>
 <h1>Reasturant</h1>
      <div id="container">
        {data.map((e) => (
          <Items
            key={e.id}
            label={e.product_name}
            qty={e.qty}
            price={e.price}
            qunatitychangefun={handleqty}
            id={e.id}
          ></Items>
        ))}

        <Total total={producttotal(data)}></Total>
      </div>
    </div>
  );
};

export default CartContainer;
