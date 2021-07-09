import React from "react";
import "./Footer.css";
import { Button } from "../../Button";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import imgsrc from "../../logo-v1.png";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Subscribe to get notified about our next project
        </p>
        <p className="footer-subscription-text">
          No spams, we promise
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
          </form>
          <a
            href="https://forms.gle/bLGWYFmg8KiQzRQS7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </a>
        </div>
      </section>

      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <img
                src={imgsrc}
                className="navbar-icon"
                alt="logo"
                width="100"
                height="100"
              />
              CodeBanana
            </Link>
          </div>
          <small className="website-rights">CodeBanana © 2021</small>
          <div className="social-icons">
            {/*<Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>*/}
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            {/*<Link      
              className='social-icon-link'
              to={                 {to direct it to a link {'//link'}}
                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>*/}
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
