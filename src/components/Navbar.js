import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";
import { FaBars, FaTimes, FaLaptopCode } from "react-icons/fa";
import { IconContext } from "react-icons/lib"; //Context Api of react

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    //function to show the button depending on screen ratio
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        {" "}
        <div>{/* changes the color of the bars have to wrap it */}</div>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <FaLaptopCode className="navbar-icon" />
              CodeBanana
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/projects"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contactUs"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </Link>
              </li>
              {/* <li className="nav-btn">
                       {button  ? (
                           <Link to='/sign-up' className="btn-link">
                               <Button buttonStyle='btn--outline'>Sign Up</Button>
                           </Link>
                       ):(
                           <Link to='/sign-up'  className="btn-link" onClick={closeMobileMenu}>
                               <Button buttonStyle='btn--outline' buttonSize='btn-mobile'>Sign up</Button>
                           </Link>
                       )}
                   </li> */}
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
