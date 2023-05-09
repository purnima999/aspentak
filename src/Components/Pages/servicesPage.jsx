import React from "react";
import "../../Css/servicesPage.css";
import { Button, Row, Col, Card } from "react-bootstrap";
import two from "../../Images/two.jpg";

const ServicesPage = () => {
  // back to top button
  const backToTopHandler = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <>
     <div>
        <button
          id="backtotopbtn"
          title="Go to top"
          onClick={() => backToTopHandler()}
        >
          <i className="fa fa-long-arrow-up" aria-hidden="true"></i>
        </button>
      </div>
      <div className="service-page">
        <div className="service-page-section-1">
          <h1>Services</h1>
        </div>

        {/* ================================= service-page-section-2-start ==========================  */}
        <div className="service-page-section-2">
          <div className="home-page-section-5">
            <h3>// OUR SERVICE</h3>
            <Row>
              <Col lg={6} sm={12}>
                <h1>
                  We Offer a Wide <br /> Variety of IT Services
                </h1>
              </Col>
              <Col lg={6} sm={12}>
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
                  <h3>Ability to Integrate</h3>
                  <p>
                    We are proud to offer candidates that are quick to respond
                    and integrate into your project, no matter what stage you
                    are currently completing.
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
                    We will familiarize ourselves with your unique project and
                    open a clean, clear dialogue with your team to ensure all
                    information is understood correctly.
                  </p>
                </div>
              </Col>
              <Col id="section-5-col" lg={4}>
                <div className="section-5-col-icon">
                  <i className="fa fa-cogs" aria-hidden="true"></i>
                </div>
                <div className="section-5-col-content">
                  <h3>Growth</h3>
                  <p>
                    Each candidate we offer for your IT staff needs will clearly
                    understand the scope and scale of your project. They will
                    agree to their job parameters.
                  </p>
                </div>
              </Col>
              <Col id="section-5-col" lg={4}>
                <div className="section-5-col-icon">
                  <i className="fa fa-cogs" aria-hidden="true"></i>
                </div>
                <div className="section-5-col-content">
                  <h3>Discovery</h3>
                  <p>
                    Our IT consultant team will compile, review, and suggest
                    recommendations based on the availability of our growing
                    candidate pool.
                  </p>
                </div>
              </Col>
              <Col id="section-5-col" lg={4}>
                <div className="section-5-col-icon">
                  <i className="fa fa-cogs" aria-hidden="true"></i>
                </div>
                <div className="section-5-col-content">
                  <h3>All Levels</h3>
                  <p>
                    We are proud to offer qualified candidates for every level
                    and management stage of your IT organization.
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
            <Col lg={6} md={12}>
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
            <Col lg={6} md={0}>
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
        {/* <div className="home-page-section-8">
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
        </div> */}
        {/* ================================= service-page-section-5-end ========================= */}
      </div>
    </>
  );
};
export default ServicesPage;
