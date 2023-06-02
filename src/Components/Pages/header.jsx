import React, { useEffect } from "react";
import "../../Css/header.css";
import { Row, Col, Button } from "react-bootstrap";
import logo from "../../Images/logo1.png";
import { Link } from "react-router-dom";

const Header = () => {
  const openMenuHandler = () => {
    document.querySelector(".main-menu").classList.add("show");
    document.querySelector(".main-menu").classList.remove("hide");
  };

  const closeMenuHandler = () => {
    document.querySelector(".main-menu").classList.remove("show");
    document.querySelector(".main-menu").classList.add("hide");
  };
  useEffect(() => {
    document.querySelector(".main-menu").classList.add("hide");
  }, []);

  return (
    <div className="site-header">
      <div className="site-header-bottom">
        <div className="site-header-top">
          <Row>
            {/* <Col>
              <div className="site-header-top-left">
                <ul className="header-items-left">
                  <li>
                    <a href="#" className="font-color">
                      <i
                        className="fa fa-twitter slIcons"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="font-color">
                      <i
                        className="fa fa-facebook slIcons"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="font-color">
                      <i
                        className="fa fa-linkedin slIcons"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="font-color">
                      <i
                        className="fa fa-instagram slIcons"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>
            </Col> */}
            <Col>
              <div className="site-header-top-right">
                <ul className="header-items-right">
                  <li>
                    <a href="#" className="font-color">
                      <span>
                        <i
                          className="fa fa-phone rlIcons"
                          aria-hidden="true"
                        ></i>
                      </span>
                      +91733-700-7734
                    </a>
                  </li>
                  <li>
                    <a href="#" className="font-color">
                      <span>
                        <i
                          className="fa fa-envelope rlIcons"
                          aria-hidden="true"
                        ></i>
                      </span>
                      satya@aspentek.in
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
        <Row>
          <Col lg={4} md={4} sm={4} xs={4}>
            <div className="site-header-bottom-left">
              <img className="site-header-logo" src={logo} />
            </div>
          </Col>
          <Col lg={8} md={8} sm={6} xs={6}>
            <div className="site-header-bottom-right">
              <ul className="main-menu">
                <li className="cancel-btn">
                  <i
                    className="fa fa-long-arrow-right"
                    aria-hidden="true"
                    onClick={() => closeMenuHandler()}
                  ></i>
                </li>
                <li>
                  <Link to="/"> Home</Link>
                </li>
                <li>
                  <Link to="/aboutUs">About Us</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/industry">Industry</Link>
                </li>
                <li>
                  <Link to="/contactUs">Contact</Link>
                </li>
                {/* <li>
                  <Link to="/career">
                    <Button className="btn" type="button">
                      CAREER
                    </Button>
                  </Link>
                </li> */}
              </ul>
            </div>
            <div className="main-menu-side-bar">
              <div className="icon menu-btn">
                <i
                  className="fa fa-bars"
                  aria-hidden="true"
                  onClick={() => openMenuHandler()}
                ></i>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Header;
