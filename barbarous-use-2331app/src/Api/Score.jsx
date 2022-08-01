import React from "react";
import axios from "axios";
import { createContext } from "react";
export const Apicontext = createContext();

export const Score = ({ children }) => {
  const [data, setData] = React.useState([]);

  const getscoredata = async () => {
    let r = await axios.get(
      `https://api.cricapi.com/v1/currentMatches?apikey=a8bc0637-2383-4f82-bfc8-78a695727bb9&offset=0`
    );
console.log(r)
    setData(r.data);
  };

  React.useEffect(() => {
    getscoredata();
  }, []);
  return <Apicontext.Provider value={[data]}>{children}</Apicontext.Provider>;
};

export default Score;
