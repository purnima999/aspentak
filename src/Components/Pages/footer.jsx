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
                  <li>
                    India: 33-110/F/104, Officers Colony, R.K.Puram, Hyderabad,
                    Telangana, India, 500056
                    <br />
                    US: 1425 West Pioneer Drive, Suite 252 Irving, TX 75061
                  </li>

                  <li>
                    Email:satya@aspentek.in
                    <br />
                    info@aspenteksystems.com
                  </li>
                  <li>
                    Tel: +91 733-700-7734
                    <br />
                    Mobile:+1 972-275-9020
                  </li>
                </ol>
              </Col>
            </Row>
          </div>
          <div className="footer-copyright">
            <p>© 2023 ASPENTEK Informatics. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
