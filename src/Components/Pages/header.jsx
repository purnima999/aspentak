import React from "react";
import "../../Css/header.css";
import { Row, Col, Button } from "react-bootstrap";
// import '../../Css/main.css';
import logo from "../../Images/logo1.png";

const Header = () => {
  return (
    <div className="site-header">
      <div className="site-header-top">
        <Row>
          <Col>
            <div className="site-header-top-left">
              <ul className="header-items-left">
                <li>
                  <a href="#" className="font-color">
                    <i class="fa fa-twitter slIcons" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="font-color">
                    <i class="fa fa-facebook slIcons" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="font-color">
                    <i class="fa fa-linkedin slIcons" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="font-color">
                    <i class="fa fa-instagram slIcons" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="site-header-top-right">
              <ul className="header-items-right">
                <li>
                  <a href="#" className="font-color">
                    <span>
                      <i class="fa fa-phone rlIcons" aria-hidden="true"></i>
                    </span>
                    +91 1234567890
                  </a>
                </li>
                <li>
                  <a href="#" className="font-color">
                    <span>
                      <i class="fa fa-envelope rlIcons" aria-hidden="true"></i>
                    </span>
                    info@domain
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
      <div className="site-header-bottom">
        <Row>
          <Col lg={4}>
            <div className="site-header-bottom-left">
              <img className="site-header-logo" src={logo} />
            </div>
          </Col>
          <Col>
            <div className="site-header-bottom-right">
              <ul className="main-menu">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <Button className="btn">CAREER</Button>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Header;
