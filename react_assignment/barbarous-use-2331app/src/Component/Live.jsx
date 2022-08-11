import React from "react";
import { useContext } from "react";
import { Apicontext } from "../Api/Score";
import Styles from "../Styles/Navbar.module.css";
import axios from "axios";
import Footers from "./Footers";
import { Box } from "@chakra-ui/react";
const Live = () => {
  const[scoredata,setScoredata] = React.useState([]);
const[load,setLoad]=React.useState(true)
  const [matches, setMatches] = React.useState([]);

  const getdata = async () => {
    let r = await axios(
      `https://api.cricapi.com/v1/series?apikey=982a0aef-0f5a-4779-86a0-cdb37248ece4&offset=0`
    );

    setMatches(r.data.data);

  };

  React.useEffect(() => {
    getdata();
 getscoredata()

  }, []);
  const getscoredata = async () => {
    let r = await axios.get(
      `https://api.cricapi.com/v1/currentMatches?apikey=982a0aef-0f5a-4779-86a0-cdb37248ece4&offset=0`
    );

    setScoredata(r.data.data);
 
  };
setTimeout(() => {
  console.log(scoredata[0].status)
  setLoad(false)
}, 1500);

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <Box width="100%" margin="auto" marginTop="20px">
      
      
        
        <Box
          width="100%"
          backgroundColor="#172132"
          height="50px"
          marginTop="20px"
        >
          <h1
            style={{
              color: "white",
              fontFamily: "cursive",
              paddingTop: "10px",
              paddingLeft: "10px",
              fontWeight: "bold",
            }}
          >
            Upcoming
          </h1>
        </Box>

        <div className={Styles.matchdiv}>
          {matches?.map((e) => (
            <div className={Styles.griddiv} key={e.id}>
              <div>
                <h1>{e.name}</h1>
              </div>
              <div>
                <h3>{e.matches}</h3>
              </div>
              <div>
                <h3> Start: {e.startDate}</h3>
              </div>
              <div>
                <h3>End: {e.endDate}</h3>
              </div>
              <div>
                <h3>
                  Odi: {e.odi} Test:{e.test} T20:{e.t20}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Box>
      <Footers></Footers>
    </div>
  );
};

export default Live;
