import React from "react";
import { Carousel, Button, Row, Col, Card } from "react-bootstrap";
import two from "../../Images/two.jpg";
import images from "../../Images/images.png";
import client from "../../Images/client.png";
import client5 from "../../Images/client5.png";
import "font-awesome/css/font-awesome.min.css";
import "../../Css/homePage.css";
import team from "../../Images/team.png";

const HomePage = () => {
  return (
    <>
      <div className="home-page">
        {/* ================================================section-1-start===================================== */}
        <div className="home-page-section-1">
          <Carousel>
            <Carousel.Item interval={100000}>
              <img className="d-block w-100 img" src={two} alt="first slide" />
              <div className="carousel-content">
                <h3 className="content-slide-in">
                  // Only High-Quality Services
                </h3>
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
            <Carousel.Item interval={5000}>
              <img className="d-block w-100" src={images} alt="Second slide" />
              <div className="carousel-content">
                <h3>// Only High-Quality Services</h3>
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
              <img className="d-block w-100" src={two} alt="Third slide" />
              <div className="carousel-content">
                <h3>// Only High-Quality Services</h3>
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
          </Carousel>
        </div>

        {/* =======================================section-2-start============================ */}
        <div className="home-page-section-2">
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
        </div>
        {/* ==================================================section-2-end=================================== */}

        {/* ================================================section-3-start================================= */}
        <div className="home-page-section-3">
          <Row>
            <Col>
              <h3>// ABOUT COMPANY</h3>
              <h1>
                Your Partner for
                <br />
                IT Consulting{" "}
              </h1>
              <p>
                Aspen Tek Systems provides professional IT consulting candidate
                services for businesses and organizations of any size. Our
                expert team listens to your company’s unique challenges and
                offers guidance and advice on staffing and recruiting options.
              </p>
              <Row>
                <Col>
                  <img />
                  <h4>Experience</h4>
                  <hr />
                  <p>
                    The team assembled at Aspen Tek Consultants offers years of
                    experience troubleshooting.
                  </p>
                </Col>
                <Col>
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
            <Col>
              <div className="section-3-right-panel">
                <img src={two} />
                <p>
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>LEARN
                  MORE ABOUT US
                </p>
              </div>
            </Col>
          </Row>
        </div>
        {/* ================================================section-3-end=================================== */}

        {/* ==================================================section4-start================================ */}
        <div className="home-page-section-4">
          <h3>// WHAT WE OFFER</h3>
          <h1>
            Design the Concept <br />
            of your Bussiness Idea Now
          </h1>
          <Row className="section-4-cards">
            <Col className="section-4-cards-col">
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
                    <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    LEARN MORE
                  </Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col className="section-4-cards-col">
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
                    <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    LEARN MORE
                  </Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col className="section-4-cards-col">
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
                    <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    LEARN MORE
                  </Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col className="section-4-cards-col">
              <Card id="card">
                <Card.Body>
                  <h2>04</h2>
                  <Card.Title id="card-tittle">Fast Response</Card.Title>
                  <Card.Text id="card-text">
                    We strive to always provide you with the best-fit
                    candidates.
                  </Card.Text>
                  <Card.Link href="#" id="card-link-1">
                    <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    LEARN MORE
                  </Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row classsName="section-4-images">
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
            <Col className="section-4-images-col">
              <img src={two} />
              <div className="section-4-image-content">
                <h1>15+</h1>
                <h3>Countries Worldwide</h3>
                <p>
                  To succeed, every software solution must be deeply integrated
                  into the existing tech environment..
                </p>
              </div>
            </Col>
          </Row>
        </div>
        {/* ==================================================section4-End================================ */}

        {/* ==================================================section-5-start ============================= */}
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
                <i class="fa fa-cogs" aria-hidden="true"></i>
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
                <i class="fa fa-cogs" aria-hidden="true"></i>
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
                <i class="fa fa-cogs" aria-hidden="true"></i>
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
                <i class="fa fa-cogs" aria-hidden="true"></i>
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
                <i class="fa fa-cogs" aria-hidden="true"></i>
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
                <i class="fa fa-cogs" aria-hidden="true"></i>
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
        {/* ==================================================section-5-end =============================== */}

        {/* ==================================================section-6-start ============================= */}
        <div className="home-page-section-6">
          <Col className="section-6-image-col">
            <img src={two} />
            <div className="section-6-content">
              <h3>// We Carry More Than Just Good IT Service Skills</h3>
              <h1>Let's Build Your Business!</h1>
              <Button className="btn">CONTACT US</Button>
            </div>
          </Col>
        </div>
        {/* ==================================================section-6-end================================ */}

        {/* ==================================================section-7-start ============================= */}
        <div className="home-page-section-7">
          <Col id="section-7-outer-col">
            <img src={two} />
            <div className="section-7-content">
              <h3>// IT CONSULTING SERVICES & SOLUTIONS</h3>
              <h1>
                We Deliver Solution with <br />
                the Goal of Trusting Relationships
              </h1>
              <Row className="section-7-grid">
                <Col className="section-7-col">
                  <i class="fa fa-television" aria-hidden="true"></i>
                  <h3>WEB</h3>
                </Col>
                <Col className="section-7-col">
                  <i class="fa fa-android" aria-hidden="true"></i>
                  <h3>ANDRIOD</h3>
                </Col>
                <Col className="section-7-col">
                  <i class="fa fa-apple" aria-hidden="true"></i>
                  <h3>IOS</h3>
                </Col>
                <Col className="section-7-col">
                  <i class="fa fa-globe" aria-hidden="true"></i>
                  <h3>IOT</h3>
                </Col>
                <Col className="section-7-col">
                  <i class="fa fa-cog" aria-hidden="true"></i>
                  <h3>WEARALABLES</h3>
                </Col>
                <Col className="section-7-col">
                  <i class="fa fa-cloud" aria-hidden="true"></i>
                  <h3>CLOUD</h3>
                </Col>
              </Row>
            </div>
          </Col>
        </div>
        {/* ==================================================section-7-end ============================= */}

        {/* ==================================================section-8-start =========================== */}
        <div className="home-page-section-8">
          
        </div>
        {/* ==================================================section-8-end =========================== */}
      </div>
    </>
  );
};
export default HomePage;
