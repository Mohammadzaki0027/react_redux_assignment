import React from "react";
import styles from "./Styles.module.css"
const Navbar = () => {
  const handleclick=()=>{
    
  }
  return (
    <div data-testid="navbar" className={styles.navbar}>
      <div data-testid="navbar-home-link" className={styles.image}>
        <img
          src="/watch.png"
          width="60px"
          alt="logo"
          style={{ display: "block" }}
        />
      </div>

      <div className={styles.loginbutton}>
        {/* Link button to /login page, if the user is not authenticated, else don't show it*/}
      <button data-testid="navbar-login-button" onClick={handleclick}>LOGIN</button>
        
        
      </div>
    </div>
  );
};

export default Navbar;
