import React, { useState, useEffect } from "react";
import ButtonComponent from "./components/ButtonComponent";
import "./styles.css";
import axios from "axios";
import CityRow from "./components/CityRow";
export default function App() {
  const [data, setData] = useState([{}]);
  const [page, setPage] = useState(1);
  const [isloading, setIsloading] = useState(false);
  const [orders, setOrders] = useState(`ASC`);
  const [limit, setLimit] = useState(0);
  const[country,setCountry]=useState([{}])
  const[inputvalue,setInputvalue]=useState("")
  const LIMIT = 10;
  const handlepage = (value) => {
    setIsloading(false);
    setPage((prev) => {
      return prev + value;
    });
  };
  const handlesort = () => {
    setOrders((prev) => {
      if (prev === "ASC") {
        return "DESC";
      } else {
        return "ASC";
      }
    });
  };

  const getcountry = async () => {
    try {
      let res = await axios.get(
        `/cities?_page=${page}&_limit=${LIMIT}&_sort=population&_order=${orders}`
        // /posts?_sort=views&_order=ASC
      );

      setData(res.data);
      setIsloading(true);
      // setIsloading(true);
setCountry(res.data)
      let total = Math.ceil(Number(res.headers["x-total-count"] / LIMIT));
      //console.log(typeof total);
      setLimit(total);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getcountry();
    }, 500);
  }, [page, orders]);

  return (
    <div className="App">
      {isloading ? "" : <div id="loading-container"></div>}
      <select >
     { data.map((items)=>(

  <option>{items.country}</option>

      ))}
      </select>
      <input type="text" value={inputvalue} onChange={(e)=>{setInputvalue(e.target.value)}}/>
      <button onClick={()=>{setCountry([...country,{country:inputvalue}])}} >Add Country</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>CITY NAME</th>
            <th>COUNTRY NAME</th>
            <th>POPULATION</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <CityRow {...data}></CityRow>
          ))}
        </tbody>
      </table>

      <div>
        <ButtonComponent
          id="SORT_BUTTON"
          title={`Sort by ${
            orders === "ASC" ? "Descending" : "Ascending"
          } Population`}
          onClick={handlesort}
        />
        <ButtonComponent
          title="PREV"
          id="PREV"
          onClick={() => {
            handlepage(-1);
          }}
          pagedisabled={page == 1 ? true : false}
        />
        <ButtonComponent
          id="NEXT"
          title="NEXT"
          onClick={() => {
            handlepage(1);
          }}
          pagedisabled={page == limit ? true : false}
        />
      </div>
    </div>
  );
}
