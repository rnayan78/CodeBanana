import React from "react";
import { FaPython } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { IoMdSchool } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Pricing.css";

function Pricing() {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff", size: 64 }}>
        <div>
          <div className="pricing__section">
            <div className="pricing__wrapper">
              <h1 className="pricing__heading">Pricing</h1>
              <div className="pricing__container">
                {/* use <a> to link to different location */}
                <Link to="/signup" className="pricing__container-card">
                  <div className="pricing__container-cardInfo">
                    <div className="icon">
                      <FaPython /> {/* python logo to be added*/}
                    </div>
                    <h3>Python</h3>
                    <h4>Free</h4>
                    <p></p>
                    <ul className="pricing__container-features">
                      <li>Complete guided project</li>
                      <li>Friendly for beginners</li>
                      <li>Notes and resource to explore</li>
                    </ul>
                    <Button buttonSize="btn--wide" buttonColor="primary">
                      Coming Soon
                    </Button>
                  </div>
                </Link>
                <a
                  href="https://codeb-editor.netlify.app/"
                  className="pricing__container-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="pricing__container-cardInfo">
                    <div className="icon">
                      <DiJavascript1 /> {/*web dev logo to be added*/}
                    </div>
                    <h3>Web-Dev</h3>
                    <h4>Free</h4>
                    <p></p>
                    <ul className="pricing__container-features">
                      <li>Complete guided project</li>
                      <li>Friendly for beginners</li>
                      <li>Notes and resource to explore</li>
                    </ul>
                    <Button buttonSize="btn--wide" buttonColor="blue">
                      Coming Soon
                    </Button>
                  </div>
                </a>
                <Link to="/signup" className="pricing__container-card">
                  <div className="pricing__container-cardInfo">
                    <div className="icon">
                      <IoMdSchool /> {/* school logo to be added*/}
                    </div>
                    <h3>For Schools</h3>
                    <h4>Coming Soon</h4>
                    <p></p>
                    <ul className="pricing__container-features">
                      <li>Complete guided project</li>
                      <li>One account for all students</li>
                      <li>Notes and resource to explore</li>
                    </ul>
                    <Button buttonSize="btn--wide" buttonColor="primary">
                      Coming Soon
                    </Button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Pricing;
