import React from "react";
import "../../Css/footer.css";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div>
        <div className="footer">
          <div className="footer__content">
            <Row>
              <Col lg={3} md={6}>
                <h4>Who We Are</h4>
                <p>
                  We work hard to align the right tech industry team to fit your
                  business needs. With a strong understanding of various tech
                  solutions and how they may affect your revenue streams, Aspen
                  Tek Consultants brings IT staffing to an elevated level for
                  each of our clients.
                </p>
              </Col>
              <Col lg={3} md={6}>
                <h4>Services</h4>
                <ol>
                  <li>IT Services</li>
                  <li>Initial Assessment</li>
                  <li>Discovery</li>
                  <li>Ability to Integrate</li>
                  <li>Growth</li>
                  <li>All Levels</li>
                </ol>
              </Col>
              <Col lg={3} md={6}>
                <h4>Company</h4>
                <ol>
                  <li>Our Vision</li>
                  <li>Our Mission</li>
                  <li>Our Clients</li>
                </ol>
              </Col>
              <Col lg={3} md={6}>
                <h4>Contact</h4>
                <ol>
                  <li>1425 West Pioneer Drive, Suite 252 Irving TX 75061</li>
                  <li> Email:info@aspenteksystems.com</li>
                  <li>
                    Tel: 972-275-9020
                    <br />
                    Mobile: 972-275-9020
                  </li>
                </ol>
              </Col>
            </Row>
          </div>
          <div className="footer-copyright">
            <p>© 2023 Naveen Tek Systems. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
