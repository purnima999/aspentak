import React from "react";
import "../../Css/aboutPage.css";
import { Row, Col, Card, Button } from "react-bootstrap";
import two from "../../Images/two.jpg";

const AboutPage = () => {
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
      <div className="about-page">
        {/* =================================== about-page-section-1-start ================================== */}
        <div className="about-page-section-1">
          <h1>ABOUT US</h1>
        </div>
        {/* =================================== about-page-section-1-end ================================== */}

        {/* =================================== about-page-section-2-start ================================== */}
        <div className="about-page-section-2">
          <Row>
            <Col lg={6} md={12}>
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
            <Col lg={6} md={12}>
              <div className="section-2-right-panel">
                <Row className="right-panel-row1">
                  <div className="img1">Our Mission</div>
                  <div className="img2">Our Mission</div>
                </Row>
                <Row className="right-panel-row2">
                  <div className="img1">Our Mission</div>
                  <div className="img2">Our Mission</div>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        {/* =================================== about-page-section-2-end ================================== */}

        {/* =================================== about-page-section-3-start ================================== */}
        <div className="about-page-section-3">
          <Row>
            <Col lg={7} md={12}>
              <div className="about-section-3-left-panel">
                <img src={two} />
              </div>
            </Col>
            <Col lg={5} md={12}>
              <div className="about-section-3-right-panel">
                <h3>// OUR MISSION</h3>
                <h1>About Aspen Tek Consultants</h1>
                <Row className="about-section-3-grid" id="aboutgrid">
                  <Col className="about-section-3-col" lg={2} md={2} sm={2}>
                    <i
                      className="fa fa-television"
                      id="ic"
                      aria-hidden="true"
                    ></i>
                  </Col>
                  <Col className="about-section-3-col" lg={2} md={2} sm={2}>
                    <i className="fa fa-android" aria-hidden="true"></i>
                  </Col>
                  <Col className="about-section-3-col" lg={2} md={2} sm={2}>
                    <i className="fa fa-apple" aria-hidden="true"></i>
                  </Col>
                  <Col className="about-section-3-col" lg={2} md={2} sm={2}>
                    <i className="fa fa-globe" aria-hidden="true"></i>
                  </Col>
                </Row>
                <p>
                  To increase our client’s business processes through efficient
                  and secure IT staffing. We drive long-term value by providing
                  high-quality, reliable IT experts and industry leaders for
                  each of our partnerships.
                </p>
                <p className="about-section-learn">
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                  LEARN MORE
                </p>
              </div>
            </Col>
          </Row>
        </div>
        {/* =================================== about-page-section-3-end ================================== */}

        {/* =================================== about-page-section-4-start ================================== */}
        <div className="about-page-section-4">
          <Row>
            <Col>
              <h3>//OUR VISION</h3>
              <h1>About Aspen Tek Consultants</h1>
              <p>
                To grow our candidate pool into one of the most desirable IT
                consulting staff and recruitment opportunities known worldwide,
                supported by the very best staff, contractors, and leaders in
                the industry.
              </p>
              <p>
                Reach out today through our contact page or email form to
                schedule a free initial consultation about how we can best help
                your company. We are eager to showcase our best candidates for
                improving your business processes. Aspen Tek Consultants serve
                as technology partners you can trust. With our help, you’ll be
                able to transform your systems with the best possible staff and
                technicians available.
              </p>
            </Col>
            <Col lg={6} md={0}>
              <div className="about-section-4-right-panel">
                <img src={two} />
              </div>
            </Col>
          </Row>
        </div>
        {/* =================================== about-page-section-4-end ================================== */}

        {/* =================================== about-page-section-5-start ================================== */}
        <div className="home-page-section-4">
          <h3>// WHAT WE OFFER</h3>
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
        </div>
        {/* =================================== about-page-section-5-start ================================== */}

        {/* =================================== about-page-section-6-start ================================== */}
        <div className="about-page-section-6">
          <div className="about-section-6-image-col">
            <Row>
              <Col lg={3} md={6} sm={12}>
                <h1>330+</h1>
                <p> ACTIVE CLIENTS</p>
              </Col>
              <Col lg={3} md={6} sm={12}>
                <h1>850+</h1>
                <p>Projects Done</p>
              </Col>
              <Col lg={3} md={6} sm={12}>
                <h1>25+</h1>
                <p> team advisior</p>
              </Col>
              <Col lg={3} md={6} sm={12}>
                <h1>10+</h1>
                <p> Glorious years</p>
              </Col>
            </Row>
          </div>
        </div>
        {/* =================================== about-page-section-6-end ================================== */}

        {/* =================================== about-page-section-7-start ================================  */}

        <div className="about-page-section-7">
          <Row>
            <Col lg={6} md={12}>
              <div className="about-section-7-left-panel">
                <h3>// IT STARTS WITH YOU</h3>
                <h1>
                  Improve and Innovate <br /> with the Tech Trends
                </h1>
                <p>
                  Hiring quality IT support staff and technicians for your
                  company begins with a simple email. We want to hear about your
                  unique needs and challenges. Reach out today to get a free
                  initial consultation on our process and how we can best work
                  with you. The more satisfied you are with our service, the
                  better our word-of-mouth marketing grows.
                </p>
                <Button className="btn">CONTACT US</Button>
              </div>
            </Col>
            <Col lg={6} md={0}>
              <div className="about-section-7-right-panel">
                <img src={two} />
              </div>
            </Col>
          </Row>
        </div>
        {/* =================================== about-page-section-7-end ================================  */}
      </div>
    </>
  );
};
export default AboutPage;
