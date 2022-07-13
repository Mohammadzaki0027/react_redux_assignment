import React from "react";
import axios from "axios";
import Show from "./Show";
const Fetch = () => {
  const [query, setQuery] = React.useState("albert");
  const [data, setData] = React.useState([]);

  const getdata = async () => {
    let r = await axios.get(
      "https://api.github.com/search/users?" + `q=${query}`
    );
    console.log("axios", r.data.items);
    setData(r.data.items);
  };

  React.useEffect(() => {
    setTimeout(() => {
      getdata();
    }, 2000);
  }, [query]);
  const handleclick = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="search git hub username"
        onInput={handleclick}
      />

      <Show data={data}></Show>
    </div>
  );
};

export default Fetch;
