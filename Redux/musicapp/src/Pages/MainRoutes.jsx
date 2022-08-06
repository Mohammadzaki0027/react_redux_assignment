import React from "react";
import { Routes, Route } from "react-router-dom";
import EditMusic from "./EditMusic";
import HomePage from "./HomePage";
import Login from "./Login";
import MainMusic from "./MainMusic";
import SingleMusic from "./SingleMusic";
import styles from "../Styles/Music.module.css";
import ReqAuth from "../Components/ReqAuth"
const MainRoutes = () => {
  return (
    <Routes>
   
      <Route path="/" element={<HomePage></HomePage>}></Route>
      {/* <Route path="/MainMusic" element={<MainMusic></MainMusic>}></Route> */}
      <Route path="/music/:id/edit" element={<EditMusic></EditMusic>}></Route>
      <Route path="/music/:id" element={  <ReqAuth><SingleMusic></SingleMusic></ReqAuth>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="*" element={<h3>Page Not Found</h3>}></Route>
    </Routes>
  );
};

export default MainRoutes;
