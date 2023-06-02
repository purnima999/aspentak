import React, { useEffect } from "react";
import { Carousel, Button, Row, Col, Card } from "react-bootstrap";
import two from "../../Images/two.jpg";
import "font-awesome/css/font-awesome.min.css";
import "../../Css/homePage.css";
import hmPgaesec3 from "../../Images/homepage-sec2.png";
import h1 from "../../Images/h1.jpg";
import h2 from "../../Images/h2.jpg";
import h3 from '../../Images/h3.jpg';

const HomePage = () => {
  // back to top button
  const backToTopHandler = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

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
      <div className="home-page">
        {/* ================================================section-1-start===================================== */}
        <div className="home-page-section-1">
          <Carousel>
            <Carousel.Item interval={100000}>
              <img
                className="d-block w-100"
                id="img"
                src={h1}
                alt="first slide"
              />
              <div className="carousel-content">
                <h3 className="content-slide-in">Only High-Quality Services</h3>
                {/* <h1>
                  IT CONSULTING
                  <br />
                  SERVICES & SOLUTIONS
                </h1> */}
                <svg viewBox="0 0 1320 300">
                  <text x="25%" y="20%" dy=".35em" text-anchor="middle">
                    IT CONSULTING
                  </text>
                  <br />
                  <text x="38%" y="50%" dy=".35em" text-anchor="middle">
                    SERVICES & SOLUTIONS
                  </text>
                </svg>
                <p>
                  We are 100+ professional software engineers with more than
                  <br />
                  10 years of experience in dilevering superior products.
                </p>
                <Button className="btn">LEARN MORE</Button>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img
                className="d-block w-100"
                id="img"
                src={h2}
                alt="Second slide"
              />
              <div className="carousel-content">
                <h3>Only High-Quality Services</h3>
                <h1>
                  IT CONSILTING
                  <br />
                  SERVICES & SOLUTIONS
                </h1>
                <p>
                  We are 100+ professional software engineers with more than
                  <br />
                  10 years of experience in dilevering superior products.
                </p>
                <Button className="btn">LEARN MORE</Button>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={h3} alt="Third slide" />
              <div className="carousel-content">
                <h3>Only High-Quality Services</h3>
                <svg viewBox="0 0 1320 300">
                  <text x="25%" y="20%" dy=".35em" text-anchor="middle">
                    IT CONSULTING
                  </text>
                  <br />
                  <text x="38%" y="50%" dy=".35em" text-anchor="middle">
                    SERVICES & SOLUTIONS
                  </text>
                </svg>
                <p>
                  We are 100+ professional software engineers with more than
                  <br />
                  10 years of experience in dilevering superior products.
                </p>
                <Button className="btn">LEARN MORE</Button>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>

        {/* =======================================section-2-start============================ */}
        {/* <div className="home-page-section-2">
          <Carousel>
            <Carousel.Item fade interval={5000}>
              <div className="section-2-grid">
                <Row>
                  <Col>
                    <img className="section-2-grid-img" src={client} />
                    <img className="section-2-grid-img" src={client5} />
                    <img className="section-2-grid-img" src={client} />
                    <img className="section-2-grid-img" src={client5} />
                    <img className="section-2-grid-img" src={client} />
                  </Col>
                </Row>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <div className="section-2-grid">
                <Row>
                  <Col>
                    <img className="section-2-grid-img" src={client} />
                    <img className="section-2-grid-img" src={client5} />
                    <img className="section-2-grid-img" src={client} />
                    <img className="section-2-grid-img" src={client5} />
                    <img className="section-2-grid-img" src={client} />
                  </Col>
                </Row>
              </div>
            </Carousel.Item>
          </Carousel>
        </div> */}
        {/* ==================================================section-2-end=================================== */}

        {/* ================================================section-3-start================================= */}
        <div className="home-page-section-3">
          <Row>
            <Col>
              <h3> ABOUT COMPANY</h3>
              <h1>
                Your Partner for
                <br />
                IT Consulting{" "}
              </h1>
              <p>
                AspenTek Informatics provides professional IT consulting candidate
                services for businesses and organizations of any size. Our
                expert team listens to your company’s unique challenges and
                offers guidance and advice on staffing and recruiting options.
              </p>
              <Row>
                <Col lg={6} md={6} sm={12}>
                  <img />
                  <h4>Experience</h4>
                  <hr />
                  <p>
                    The team assembled at AspenTek Informatics offers years of
                    experience troubleshooting.
                  </p>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <img />
                  <h4>Quick Support</h4>
                  <hr />
                  <p>
                    Our IT consulting team provides our clients with
                    high-quality service and suppor.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={0}>
              <div className="section-3-right-panel">
                <img src={hmPgaesec3} />
                <p>
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                  LEARN MORE ABOUT US
                </p>
              </div>
            </Col>
          </Row>
        </div>
        {/* ================================================section-3-end=================================== */}

        {/* ==================================================section4-start================================ */}
        <div className="home-page-section-4">
          <h3> WHAT WE OFFER</h3>
          <h1>
            Design the Concept <br />
            of your Bussiness Idea Now
          </h1>
          <Row className="section-4-cards">
            <Col className="section-4-cards-col" lg={3} md={6} sm={12}>
              <Card id="card">
                <Card.Body>
                  <h2>01</h2>
                  <Card.Title id="card-tittle">
                    Full Visibility and Transparency
                  </Card.Title>
                  <Card.Text id="card-text">
                    We communicate directly with your team to find candidates.
                  </Card.Text>
                  <Card.Link href="#" id="card-link-1">
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                    LEARN MORE
                  </Card.Link>
                  {/* <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
              </Card>
            </Col>
            <Col className="section-4-cards-col" lg={3} md={6} sm={12}>
              <Card id="card">
                <Card.Body>
                  <h2>02</h2>
                  <Card.Title id="card-tittle">
                    Dedicated Account Manager
                  </Card.Title>
                  <Card.Text id="card-text">
                    You’ll have a concierge host to manage all of your requests
                    and needs.
                  </Card.Text>
                  <Card.Link href="#" id="card-link-1">
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                    LEARN MORE
                  </Card.Link>
                  {/* <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
              </Card>
            </Col>
            <Col className="section-4-cards-col" lg={3} md={6} sm={12}>
              <Card id="card">
                <Card.Body>
                  <h2>03</h2>
                  <Card.Title id="card-tittle">
                    IT Operational Standards
                  </Card.Title>
                  <Card.Text id="card-text">
                    Our candidate pool comprises fully qualified experts.
                  </Card.Text>
                  <Card.Link href="#" id="card-link-1">
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                    LEARN MORE
                  </Card.Link>
                  {/* <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
              </Card>
            </Col>
            <Col className="section-4-cards-col" lg={3} md={6} sm={12}>
              <Card id="card">
                <Card.Body>
                  <h2>04</h2>
                  <Card.Title id="card-tittle">Fast Response</Card.Title>
                  <Card.Text id="card-text">
                    We strive to always provide you with the best-fit
                    candidates.
                  </Card.Text>
                  <Card.Link href="#" id="card-link-1">
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                    LEARN MORE
                  </Card.Link>
                  {/* <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/* <Row classsName="section-4-images">
            <Col className="section-4-images-col">
              <img className="section-4-img-1" src={two} />
              <div className="section-4-image-content">
                <h1>15+</h1>
                <h3>Countries Worldwide</h3>
                <p>
                  To succeed, every software solution must be deeply integrated
                  into the existing tech environment..
                </p>
              </div>
            </Col>
          </Row> */}
        </div>
        {/* ==================================================section4-End================================ */}

        {/* ==================================================section-5-start ============================= */}
        <div className="home-page-section-5">
          <h3>OUR SERVICE</h3>
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
            <Col id="section-5-col" lg={3}>
              <div className="section-5-col-icon">
                <i class="fa fa-user-plus" aria-hidden="true"></i>
              </div>
              <div className="section-5-col-content">
                <h3>Permanent Hiring</h3>
                <p>
                  We help our clients staff their full time employment needs, by
                  finding the right resource taking into consideration their CPH
                  and Gender diversity.
                </p>
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
                  shortest period and for flexible onboarding and offboarding of
                  resources.
                </p>
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
                  maintaining all the matrix, CPH, Gender diversity, Source mix,
                  HTD with proper documentation.
                </p>
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
              </div>
            </Col>
          </Row>
        </div>
        {/* ==================================================section-5-end =============================== */}

        {/* ==================================================section-6-start ============================= */}
        {/* <div className="home-page-section-6">
          <Col className="section-6-image-col">
            <img src={two} />
            <div className="section-6-content">
              <h3> We Carry More Than Just Good IT Service Skills</h3>
              <h1>Let's Build Your Business!</h1>
              <Button className="btn">CONTACT US</Button>
            </div>
          </Col>
        </div> */}
        {/* ==================================================section-6-end================================ */}

        {/* ==================================================section-7-start ============================= */}
        <div className="home-page-section-7">
          <Col id="section-7-outer-col">
            <img src={two} />
            <div className="section-7-content">
              <h3>IT CONSULTING SERVICES & SOLUTIONS</h3>
              <h1>
                We Deliver Solution with <br />
                the Goal of Trusting Relationships
              </h1>
              <Row className="section-7-grid">
                <Col className="section-7-col" lg={2} md={2}>
                  <i className="fa fa-television" aria-hidden="true"></i>
                  <h3>Digital</h3>
                </Col>
                <Col className="section-7-col" lg={2} md={2}>
                  <i class="fa fa-microchip" aria-hidden="true"></i>
                  <h3>Embedded Systems​</h3>
                </Col>
                <Col className="section-7-col" lg={2} md={2}>
                  <i className="fa fa-cog" aria-hidden="true"></i>
                  <h3>Mechanical</h3>
                </Col>
                <Col className="section-7-col" lg={2} md={2}>
                  <i className="fa fa-globe" aria-hidden="true"></i>
                  <h3>ERP</h3>
                </Col>
                <Col className="section-7-col" lg={2} md={2}>
                  <i class="fa fa-android" aria-hidden="true"></i>
                  <h3>Robotics</h3>
                </Col>
                <Col className="section-7-col" lg={2} md={2}>
                  <i className="fa fa-cloud" aria-hidden="true"></i>
                  <h3>IoT</h3>
                </Col>
              </Row>
            </div>
          </Col>
        </div>
        {/* ==================================================section-7-end ============================= */}

        {/* ==================================================section-8-start =========================== */}
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
        {/* ==================================================section-8-end =========================== */}
      </div>
    </>
  );
};
export default HomePage;
