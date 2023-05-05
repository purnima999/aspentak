import React from "react";
import "../../Css/aboutPage.css";
import { Row, Col, Card, Button } from "react-bootstrap";
import two from "../../Images/two.jpg";

const AboutPage = () => {
  return (
    <>
      <div className="about-page">
        {/* =================================== about-page-section-1-start ================================== */}
        <div className="about-page-section-1">
          <h1>ABOUT US</h1>
        </div>
        {/* =================================== about-page-section-1-end ================================== */}

        {/* =================================== about-page-section-2-start ================================== */}
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
            <Col>
              <div className="about-section-3-left-panel">
                <img src={two} />
              </div>
            </Col>
            <Col>
              <div className="about-section-3-right-panel">
                <h3>// OUR MISSION</h3>
                <h1>About Aspen Tek Consultants</h1>
                <Row className="about-section-3-grid" id="aboutgrid">
                  <Col className="about-section-3-col">
                    <i class="fa fa-television" id="ic" aria-hidden="true"></i>
                  </Col>
                  <Col className="about-section-3-col">
                    <i class="fa fa-android" aria-hidden="true"></i>
                  </Col>
                  <Col className="about-section-3-col">
                    <i class="fa fa-apple" aria-hidden="true"></i>
                  </Col>
                  <Col className="about-section-3-col">
                    <i class="fa fa-globe" aria-hidden="true"></i>
                  </Col>
                </Row>
                <p>
                  To increase our client’s business processes through efficient
                  and secure IT staffing. We drive long-term value by providing
                  high-quality, reliable IT experts and industry leaders for
                  each of our partnerships.
                </p>
                <p className="about-section-learn">
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
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
            <Col>
              <div className="about-section-4-right-panel">
                <img src={two} />
              </div>
            </Col>
          </Row>
        </div>
        {/* =================================== about-page-section-4-end ================================== */}

        {/* =================================== about-page-section-5-start ================================== */}
        <div className="about-page-section-5">
          <h3>//CORE VALUES</h3>
          <h1>
            About Aspen Tek <br />
            Consultants
          </h1>
          <Row className="about-section-5-cards">
            <Col className="about-section-5-cards-col">
              <Card id="card">
                <Card.Body>
                  <h2>01</h2>
                  <Card.Title id="card-tittle">Integrity</Card.Title>
                  <Card.Text id="card-text">
                    We uphold the highest standard of transparency and
                    integrity, no matter the client or project. Each of our
                    candidates' experience and education is fully vetted.
                  </Card.Text>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col className="about-section-5-cards-col">
              <Card id="card">
                <Card.Body>
                  <h2>02</h2>
                  <Card.Title id="card-tittle">Trust</Card.Title>
                  <Card.Text id="card-text">
                    Our clients rely on our experience and expertise to solve
                    their unique challenges. Our reputation rests on our ability
                    to deliver on time and in budget.
                  </Card.Text>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col className="about-section-5-cards-col">
              <Card id="card">
                <Card.Body>
                  <h2>03</h2>
                  <Card.Title id="card-tittle">Diversity</Card.Title>
                  <Card.Text id="card-text">
                    Our focus is always on the skills and talents of our
                    potential candidates. We are happy to frame the candidate
                    search depending on your needs.
                  </Card.Text>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col className="about-section-5-cards-col">
              <Card id="card">
                <Card.Body>
                  <h2>04</h2>
                  <Card.Title id="card-tittle">Teamwork</Card.Title>
                  <Card.Text id="card-text">
                    Every one of our projects requires the input and open
                    communication of our entire team. We want to provide the
                    best quality service, and that requires a team effort.
                  </Card.Text>
                  <Card.Link href="#">Another Link</Card.Link>
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
              <Col>
                <h1>330+</h1>
                <p> ACTIVE CLIENTS</p>
              </Col>
              <Col>
                <h1>850+</h1>
                <p>Projects Done</p>
              </Col>
              <Col>
                <h1>25+</h1>
                <p> team advisior</p>
              </Col>
              <Col>
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
            <Col>
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
            <Col>
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
