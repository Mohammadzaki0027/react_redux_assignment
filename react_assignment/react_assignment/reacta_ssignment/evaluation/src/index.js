import axios from "axios";
import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
axios.defaults.baseURL="https://json-server-mocker-masai.herokuapp.com"
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
