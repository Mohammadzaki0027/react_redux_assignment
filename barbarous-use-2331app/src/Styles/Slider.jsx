import React from "react";
let arr = [

  {
    url:"https://www.cricket.com/pngs/banner-1.jpg"
  },
  {
    url:"https://www.cricket.com/pngs/Banner-3.jpg"
  },
  {
    url:"https://www.cricket.com/pngs/Banner-2.jpg"
  }
];
const Slider = () => {
    const [count, setCount] = React.useState(0);
    
    const handleclcik=()=>{
        if(count!==arr.length-1)
        {
setCount(count+1)
        }
        else{
            setCount(0)
        }
    }
  
  return <div style={{width:"80%",margin:"auto"}} onClick={handleclcik}>
    <div style={{ heigth:"100px", width:"100%",margin:"auto",marginTop:"10px"}}>
    <img src={arr[count].url} alt=""/>
    </div>
     
  </div>;
};

export default Slider;
