import React from "react";
import "../../Css/aboutPage.css";
import { Row, Col } from "react-bootstrap";
import two from "../../Images/two.jpg";

const AboutPage = () => {
  return (
    <>
      <div className="about-page">
        <div className="about-page-section-1">
          <h1>ABOUT US</h1>
        </div>
        <div className="about-page-section-2">
          <Row>
            <Col>
              <div className="section-2-left-panel">
                <h3>// ABOUT ASPEN TEK CONSULTANTS</h3>
                <h1>IT CONSULTING SERVICES & SOLUTIONS</h1>
                <p>
                  Our IT consulting team provides our clients with high-quality
                  service and support from the initial email to the satisfied
                  recruitment connection. We are privileged to have brought
                  together such a valuable team of experts, recruiting
                  specialists, hiring managers, and networking staff to partner
                  with your company.
                </p>
                <p>
                  We work hard to align the right tech industry team to fit your
                  business needs. With a strong understanding of various tech
                  solutions and how they may affect your revenue streams, Aspen
                  Tek Consultants brings IT staffing to an elevated level for
                  each of our clients. We empower you to reach the utmost
                  potential of your company and industry using time-tested and
                  strategic employee and contractor placement.
                </p>
                <p>
                  Aspen Tek Co a range of valuable staffing skills. We work in
                  partnerships nsultants combines IT and business knowledge over
                  with our clients, advising them how to use and leverage their
                  hired staff to meet objectives and overcome problems. We are
                  here to provide strategic guidance on what expertise level and
                  skill set combination would drive their projects forward.
                </p>
              </div>
            </Col>
            <Col>
              <div className="section-2-right-panel">
                <Row className="right-panel-row1">
                  <img id="img" src={two} />
                  <img id="img" src={two} />
                </Row>
                <Row className="right-panel-row2">
                  <img id="img" src={two} />
                  <img id="img" src={two} />
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
export default AboutPage;
