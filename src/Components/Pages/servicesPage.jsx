import React from "react";
import "../../Css/servicesPage.css";
import { Button, Row, Col, Card } from "react-bootstrap";
import two from "../../Images/two.jpg";

const ServicesPage = () => {
  return (
    <>
      <div className="service-page">
        <div className="service-page-section-1">
          <h1>Services</h1>
        </div>

        {/* ================================= service-page-section-2-start ==========================  */}
        <div className="service-page-section-2">
          <div className="home-page-section-5">
            <h3>// OUR SERVICE</h3>
            <Row>
              <Col>
                <p>
                  We Offer a Wide <br /> Variety of IT Services
                </p>
              </Col>
              <Col>
                <Button className="btn">ALL SERVICES</Button>
              </Col>
            </Row>
            <Row className="section-5-grid">
              <Col id="section-5-col" lg={4}>
                <div className="section-5-col-icon">
                  <i className="fa fa-cogs" aria-hidden="true"></i>
                </div>
                <div className="section-5-col-content">
                  <h3>IT Consulting</h3>
                  <p>
                    We are a full-service IT staffing and recruitment consulting
                    firm prepared to provide solutions for a wide variety of
                    industries and projects.
                  </p>
                </div>
              </Col>
              <Col id="section-5-col" lg={4}>
                <div className="section-5-col-icon">
                  <i className="fa fa-cogs" aria-hidden="true"></i>
                </div>
                <div className="section-5-col-content">
                  <h3>Initial Assessment</h3>
                  <p>
                    We are a full-service IT staffing and recruitment consulting
                    firm prepared to provide solutions for a wide variety of
                    industries and projects.
                  </p>
                </div>
              </Col>
              <Col id="section-5-col" lg={4}>
                <div className="section-5-col-icon">
                  <i className="fa fa-cogs" aria-hidden="true"></i>
                </div>
                <div className="section-5-col-content">
                  <h3>IT Consulting</h3>
                  <p>
                    We are a full-service IT staffing and recruitment consulting
                    firm prepared to provide solutions for a wide variety of
                    industries and projects.
                  </p>
                </div>
              </Col>
              <Col id="section-5-col" lg={4}>
                <div className="section-5-col-icon">
                  <i className="fa fa-cogs" aria-hidden="true"></i>
                </div>
                <div className="section-5-col-content">
                  <h3>IT Consulting</h3>
                  <p>
                    We are a full-service IT staffing and recruitment consulting
                    firm prepared to provide solutions for a wide variety of
                    industries and projects.
                  </p>
                </div>
              </Col>
              <Col id="section-5-col" lg={4}>
                <div className="section-5-col-icon">
                  <i className="fa fa-cogs" aria-hidden="true"></i>
                </div>
                <div className="section-5-col-content">
                  <h3>IT Consulting</h3>
                  <p>
                    We are a full-service IT staffing and recruitment consulting
                    firm prepared to provide solutions for a wide variety of
                    industries and projects.
                  </p>
                </div>
              </Col>
              <Col id="section-5-col" lg={4}>
                <div className="section-5-col-icon">
                  <i className="fa fa-cogs" aria-hidden="true"></i>
                </div>
                <div className="section-5-col-content">
                  <h3>IT Consulting</h3>
                  <p>
                    We are a full-service IT staffing and recruitment consulting
                    firm prepared to provide solutions for a wide variety of
                    industries and projects.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        {/* ================================= service-page-section-2-end ==========================  */}

        {/* ================================= service-page-section-3-start ==========================  */}
        <div className="service-page-section-3">
          <Row>
            <Col>
              <h1>Helping Match Your Business with Great Talent</h1>
              <p>
                The ability to attract and retain professional talent is
                critical for achieving project success. That is why today’s
                recruitment agencies utilize tools from all areas of talent,
                including AI, RPA, LinkedIn, confidential databases, word of
                mouth, social media, college boards, and much more. Every day we
                expand our qualified base of candidates to offer your business
                new opportunities.
              </p>
              <p>
                RReach out today to see how our team can best solve your unique
                IT challenges. We are always willing to listen to the needs of
                our clients. Our expert team prides itself on open and clear
                communication with every new partner we acquire through our
                consulting journey. Let us help you!
              </p>
            </Col>
            <Col>
              <div className="service-section-4-right-panel">
                <img src={two} />
              </div>
            </Col>
          </Row>
        </div>
        {/* ================================= service-page-section-3-end ==========================  */}

        {/* ================================= service-page-section-4-start ========================= */}
        <div className="service-page-section-4">
          <h3>// Drop us a line! We are here to answer your questions 24/7</h3>
          <h1>NEED A CONSULTATION?</h1>
          <Button className="btn">CONTACT US</Button>
        </div>
        {/* ================================= service-page-section-4-end ========================= */}

        {/* ================================= service-page-section-5-start ========================= */}
        <div className="home-page-section-8">
          <div className="section-8-inner-box">
            <div className="section-8-inner-box-text">
              <h3>// OUR CLIENTS</h3>
              <h1>
                We are Trusted <br />
                15+ Countries Worldwide
              </h1>
            </div>
            <Row className="section-8-cards">
              <Col>
                <Card id="card">
                  <Card.Img id="img" variant="top" src={two} />
                  <div className="cardTittle">
                    <h1>Moonkle LTD,</h1>
                    <h5>Client of Company</h5>
                  </div>
                  <Card.Body style={{ padding: "0px" }}>
                    <Card.Text id="text">
                      "Very well thought out and articulate communication. Clear
                      milestones, deadlines and fast work. Patience. Infinite
                      patience. No shourtcuts, Even if the client is being
                      careless. The best part...always solving problems with
                      great orginal Ideas!."
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card id="card">
                  <Card.Img id="img" variant="top" src={two} />
                  <div className="cardTittle">
                    <h1>Moonkle LTD,</h1>
                    <h5>Client of Company</h5>
                  </div>
                  <Card.Body style={{ padding: "0px" }}>
                    <Card.Text id="text">
                      "Very well thought out and articulate communication. Clear
                      milestones, deadlines and fast work. Patience. Infinite
                      patience. No shourtcuts, Even if the client is being
                      careless. The best part...always solving problems with
                      great orginal Ideas!."
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
        {/* ================================= service-page-section-5-end ========================= */}
      </div>
    </>
  );
};
export default ServicesPage;
