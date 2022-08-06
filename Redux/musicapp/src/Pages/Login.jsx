import React from "react";
import axios from "axios";
import { Loginfunc } from "../Redux/Authreducer/action";
import styles from "../Styles/Music.module.css";
import { Box, Input, Button } from "@chakra-ui/react";
import style from "../Styles/chakr.css";
import { useNavigate} from "react-router-dom"
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
const Navigate=useNavigate()
const loaction=useLocation()
const coming=loaction?.state?.from?.pathname||"/"

  const handlesubmit = (e) => {
    e.preventDefault();
    const payload = {
      email,
      password,
    };
    if(email&&password)
    {

      dispatch(Loginfunc({ email, password })).then(r=>{
  
       if(r.type=="Sucess")
       {
       Navigate(coming)
       }
      })
    }
 
  };
  return (
    <Box className="container">
      <Box className="formouter">
        <h1>Sign In</h1>
        <form onSubmit={handlesubmit}>
          <Input
            placeholder="enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></Input>
          <Input
            placeholder="enter password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></Input>
          <input type="submit" className="inputbtn" />
        </form>
      </Box>
    </Box>
  );
};

export default Login;
