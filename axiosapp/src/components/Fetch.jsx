import React from "react";
import axios from "axios";
import Show from "./Show";
const Fetch = () => {
  const [query, setQuery] = React.useState("albert");
  const [data, setData] = React.useState([]);
const[page,SetPage]=React.useState(10)
const[num,Setnum]=React.useState(3)
  const getdata = async () => {
    let r = await axios.get(
      "https://api.github.com/search/users?" +`q=${query}&page=${num}&per_page=${page}`
    );
    console.log("axios", r.data.items);
    setData(r.data.items);
  };

  React.useEffect(() => {
    setTimeout(() => {
      getdata();
 
    }, 1000);
  }, [query,num,page]);
  const handleclick = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value);
  };
const handlevaluefor=(value)=>{
  Setnum(num+value)
}

const handlevalueprev=(value)=>{
  Setnum(num+value)
}

  return (
    <div>
      <input
        type="text"
        placeholder="search git hub username"
        onInput={handleclick}
      />

      <Show data={data}></Show>
      <button onClick={()=>{handlevaluefor(1)}}>Forward</button>
       <button onClick={()=>{handlevalueprev(-1)}} disabled={page===10}>Prev</button>

    </div>
  );
};

export default Fetch;
