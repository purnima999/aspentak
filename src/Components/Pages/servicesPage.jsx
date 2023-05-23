import React, { useEffect, useState } from "react";
import "../../Css/servicesPage.css";
import two from "../../Images/two.jpg";
import {
  Button,
  Row,
  Col,
  Modal,
  Form,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import mockData from "../../JsonData/profiles.json";
import hmPgaesec3 from "../../Images/homepage-sec2.png";


const ServicesPage = () => {
  // back to top button
  const backToTopHandler = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [radioValue, setRadioValue] = useState("1");

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

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
        <div className="about-page-section-1">
          <h1>Services</h1>
        </div>

        {/* ================================= service-page-section-2-start ==========================  */}
        <div className="service-page-section-2">
          <div className="home-page-section-5">
            <h3>OUR SERVICE</h3>
            <Row>
              <Col lg={6} sm={12}>
                <h1>
                  We Offer a Wide <br /> Variety of IT Services
                </h1>
              </Col>
              <Col lg={6} sm={12}></Col>
            </Row>
            <Row className="section-5-grid">
              <Col id="section-5-col" lg={3}>
                <div className="section-5-col-icon">
                  <i class="fa fa-user-plus" aria-hidden="true"></i>
                </div>
                <div className="section-5-col-content">
                  <h3>Permanent Hiring</h3>
                  <p>
                    We help our clients staff their full time employment needs,
                    by finding the right resource taking into consideration
                    their CPH and Gender diversity.
                  </p>
                  <Button
                    style={{
                      padding: "10px 20px",
                      position: "absolute",
                      right: 0,
                      bottom: 0,
                    }}
                    onClick={() => handleShow()}
                  >
                    Know More
                  </Button>
                </div>
              </Col>
              <Col id="section-5-col" lg={3}>
                <div className="section-5-col-icon">
                  <i class="fa fa-handshake-o" aria-hidden="true"></i>
                </div>
                <div className="section-5-col-content">
                  <h3>Contract Hiring</h3>
                  <p>
                    Providing contract staff for their adhoc postitions, in the
                    shortest period and for flexible onboarding and offboarding
                    of resources.
                  </p>
                  <Button
                    style={{
                      padding: "10px 20px",
                      position: "absolute",
                      right: 0,
                      bottom: 0,
                    }}
                    onClick={() => handleShow()}
                  >
                    Know More
                  </Button>
                </div>
              </Col>
              <Col id="section-5-col" lg={3}>
                <div className="section-5-col-icon">
                  <i class="fa fa-id-badge" aria-hidden="true"></i>
                </div>
                <div className="section-5-col-content">
                  <h3>RPO </h3>
                  <p>
                    End to End program managing all the recruitment needs and
                    maintaining all the matrix, CPH, Gender diversity, Source
                    mix, HTD with proper documentation.
                  </p>
                  <Button
                    style={{
                      padding: "10px 20px",
                      position: "absolute",
                      right: 0,
                      bottom: 0,
                    }}
                    onClick={() => handleShow()}
                  >
                    Know More
                  </Button>
                </div>
              </Col>
              <Col id="section-5-col" lg={3}>
                <div className="section-5-col-icon">
                  <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                </div>
                <div className="section-5-col-content">
                  <h3>Campus Hiring</h3>
                  <p>
                    Identifying reputed institutions with quality students,
                    conducting the preliminary rounds of evaluation/ Tests and
                    prepare for the final round of interview with client.
                  </p>
                  <Button
                    style={{
                      padding: "10px 20px",
                      position: "absolute",
                      right: 0,
                      bottom: 0,
                    }}
                    onClick={() => handleShow()}
                  >
                    Know More
                  </Button>
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
                <img src={hmPgaesec3} />
              </div>
            </Col>
          </Row>
        </div>
        {/* ================================= service-page-section-3-end ==========================  */}

        {/* ================================= service-page-section-4-start ========================= */}
        <div className="service-page-section-4">
          <h3>Drop us a line! We are here to answer your questions 24/7</h3>
          <h1>NEED A CONSULTATION?</h1>
          <Button className="btn">CONTACT US</Button>
        </div>
        {/* ================================= service-page-section-4-end ========================= */}

        {/* ================================= service-page-section-5-start ========================= */}
        {/* <div className="home-page-section-8">
          <div className="section-8-inner-box">
            <div className="section-8-inner-box-text">
              <h3>OUR CLIENTS</h3>
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

        {/* modal */}
        <div className="applyForm" id="form">
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Control
                    type="Email Address"
                    placeholder="Email Address"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Control type="text" placeholder="Designation" />
                </Form.Group>
                <ButtonGroup>
                  {mockData &&
                    mockData?.contactTimings?.map((radio, idx) => (
                      <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant={idx % 2 ? "outline-success" : "outline-danger"}
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                      >
                        {radio.name}
                      </ToggleButton>
                    ))}
                </ButtonGroup>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                submit
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
};
export default ServicesPage;
