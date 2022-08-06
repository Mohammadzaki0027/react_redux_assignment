import React from "react";
import Styles from "../Styles/Style.module.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Auth } from "../Context/AuthContext";

const baseStyle = {
  color: "black",
  textDecoration: "none",
};
const activestyle = {
  textDecoration: "none",
  height: "30px",
  width: "50px",
};
let carturl =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARYAAAC1CAMAAACtbCCJAAAAkFBMVEX///8EDhcAAAAFDhV6ensCDxn19fUADRbLzM6bmpn+/v/a3N0FDhgDDxcEDRbq6uoAAA0AAAYABhIAAAXBwsTj4+SBgoQxMzZXWFy7urmqq6wlKCtvcHFjZGZAQELS0tI3OUBESEoTGBt9fX+Li4uSk5RSUlKmpqaXl5lLTFBra28cHSG9vsBcXmGnqao2OTvDk/X6AAAE3ElEQVR4nO3ca1fbOBAGYGuM7USRFMe5AAmEZVvuYfn//24lhW1jByi+rXLG7/OBntacHmmOPJLGsqMIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGZTqpmtp/laGbFdhiQ1Wbq+nQ4yJpllUVdDXwqEQLykQs3mn3w4gko8nA4zKyYTmg9n/Q2cDDEl1TlhhljI1OptX7kMm3A49KJFeVhJsnRmR0E7pdwU1Lln/ZuGhah27VqVmRHS6z26Enl6od2eRS/D0N3Y5TQ8bNRZehm3FqXmfGT9FQ8kBKCUWhm3Fqbsit6mgXuh2nxi58jaAfoZtxaq7sFK0z3EUVl6R80m1tdcOpQDGN3RSdzI4KMfVdTBnFZZPbsMRtiSwRdJ5yiYuMfrqFrtY608mn7OUvrvrfcMUbNhOadLUpJbQSbdnVT0J3ofvTnemm0PGfu/0d9DN0Zzp0P9Oi/WixFKsKxQOJbsLCq541scnFdBGW/DZ0V7qUbvOkdUjcTMSsPnFNuovRkm94VbPW1EFQFK95yFpSFyk3I16DJUpv8/ZRYVjiW3VxF9EodDe6tmgfFlWcM9kl/pZS+9xCj6F70TEZybbJxRjFLeH+Ki60CYuYPYXuRQ9GpFSb+8gOFl4rXEe6h4stwmKXyMUsdCe6Z8NyMTettov0ELoTvVhT0rxCF8fFC7uE603Kx8dqD5ar0B3oCZm48WjRCav606ELahGWnOPs7K1JN42KT7jsVv57Ny2SS0LL0M3vzaZofBPRRejG9+e58V2k2O0SD+yahUUboSkN3fj+TGb/JZd6q107O3NdtHjNigs6VrTjOg85zw2LCxlJTud9yqQ/uVx/t6jZPQepWFKWxP6YyrdjYnfd9h6ahG55r9Jtnhldt76g8pfQDe+T3J+5FDVGi/JnfWgRuuk9e9jX/2ueI3wO3ey+TUnZ1EI/ZFpH6Fb3ziYXze2QShdWdv1vig3/AVDPJdkJN2OfQ+uSpIwRNI74rlqbkG+5No0WIryjeOe3RbQY1cM7KD65CLf3q2kzYj5c9qfFjj5P8QWVJEnO9nmIJ6N5kweuJuF3PqzskY5O6H6j8M3+tftd3bSy98o7tUTp3bgBdmcJoRb568dnvyCZz8mNDDIkttOp+7rLF79irw5so+2CcnfrJpjrT44Jyn+uXojezlgv4o4tiPJMC2O7Xv0mnfuL+3hdIbLcTsz+Bd+B3FGuppvt3/Gdf/C0Y025ez3YL+Ne+J7gqPIvAMRGGVfZz48OZ+8o1kK7F8KNFvQ2lAyTbgqhhVLujfFYqOpzd3me24v+cLMyWtEqTCv/d9VX0ai8QrksvzXB9eTpkdeDsLhHjJVt4Ou8vJEcSuX3fnZwzN19wmRcuhwXlbCMP/l/eEm3eelpq+/3wV00z+JyWAbyQcz7g7DYpKvpsdTvojxaqoOJrerpn8rHR16rlweSW0Ykfp8tVHapW758WQ7LYGYi+XTQcSUqqcWvWw4TMu+jUAcmlL9/elnphLbVLdGCCrX/RLO2q9ztUFa57pz7bJ9wbb79YHFv90TvSTmjDe8DYmVLu0XOlbFb5LOPBoPfYLus4z4dNhTS1w5W50RP44/2x+7y+smVY1aDKm0f1Ve+/csAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0MS/OulA7GoMuSgAAAAASUVORK5CYII=";

const Navbar = () => {
  const { isAuth } = useContext(Auth);
  console.log("auth", isAuth);

  const link = [
    { to: "/", element: "Home" },
    { to: "/Products", element: "Products" },
    { to: "/Cart", element: "Cart" },
    { to: "/Login", element: "Login" },
    { to: "/Logout", element: "Logout" },
  ];
  return (
    <div>
      <div className={Styles.navbar}>
        {link.map((e) => (
          <div className={Styles.box} key={e.to}>










            {e.element !== "Cart"?(
              <NavLink
                to={e.to}
                style={({ isActive }) => (isActive ? activestyle : baseStyle)}
              >
                {e.element}
              </NavLink>
            ) :<NavLink to={e.to}>
            <img src={carturl} alt="" style={activestyle} />
           </NavLink> }









          </div>
        ))}
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;

// {" "}
// <NavLink
//   to="/logout"
//   style={({ isActive }) => (isActive ? activestyle : baseStyle)}
// >
// Logout
// </NavLink>





// (
//   <NavLink to={e.to}>
//     <img src={carturl} alt="" style={activestyle} />
//   </NavLink>
// )