import React from "react";

import { Auth } from "../Context/AuthContext";
import Navigate, { useNavigate, Link } from "react-router-dom";
const Logout = () => {
  const { isAuth, logout } = React.useContext(Auth);
  const navigatelog = useNavigate();

  function handlclick() {
    logout();
    navigatelog("/Login");
  }
  return (
    <div>
      {isAuth ? (
        <button onClick={handlclick}>Logout</button>
      ) : (
        <button>
          <Link to="/Login" style={{ textDecoration: "none", color: "teal" }}>
            Go to Login page
          </Link>
        </button>
      )}
    </div>
  );
};

export default Logout;
