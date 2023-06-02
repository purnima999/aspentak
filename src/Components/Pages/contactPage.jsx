import React, { useEffect } from "react";
import "../../Css/contactPage.css";
import { Row, Col, Card, Button } from "react-bootstrap";

const ContactPage = () => {
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
      <div className="contact-page">
        <div className="contact-page-section-1">
          <h1>CONTACT</h1>
        </div>

        {/* ================================= contact-page-section-2-start ==========================  */}
        <div className="contact-page-section-2">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="contact-page-section-2-left">
                <h3>CONTACT DETAILS</h3>
                <h1>Contact Our IT Consultant Team</h1>
                <p>
                  Reach out today to begin your free initial consultation and
                  discuss how our expert team can best help your unique
                  challenges. Whether you are an IT partner looking for staffing
                  and recruitment services, or an IT professional looking to
                  connect with open perspective projects, we have a solution for
                  you.
                </p>
                <Card id="card">
                  <Row>
                    <Col lg={1}>
                      <div className="card-icon">
                        <i className="fa fa-globe" aria-hidden="true"></i>
                      </div>
                    </Col>
                    <Col>
                      <div className="cardContent">
                        <h4>Our Address:</h4>
                        <p>
                          India : 33-110/F/104, Officers Colony, R.K.Puram,
                          Hyderabad, Telangana, India, 500056
                        </p>
                        <p>
                          US : 1425 West Pioneer Drive, Suite 252 Irving, TX
                          75061
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Card>
                <Card id="card">
                  <Row>
                    <Col lg={1}>
                      <div className="card-icon">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                      </div>
                    </Col>
                    <Col>
                      <div className="cardContent">
                        <h4>Our Mailbox:</h4>
                        <p>India : satya@aspentek.in</p>
                        <p>US : info@aspenteksystems.com</p>
                      </div>
                    </Col>
                  </Row>
                </Card>{" "}
                <Card id="card">
                  <Row>
                    <Col lg={1}>
                      <div className="card-icon">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                      </div>
                    </Col>
                    <Col>
                      <div className="cardContent">
                        <h4>Our Phone:</h4>
                        <p>+91-733-700-7734</p>
                        <p>+1-972-275-9020</p>
                      </div>
                    </Col>
                  </Row>
                </Card>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="contact-page-section-2-right">
                <div className="contact-section-2-form">
                  <h1>Ready to Get Started?</h1>
                  <h6>
                    Your email address will not be published. Required fields
                    are marked *
                  </h6>
                  <input
                    id="form-input"
                    name="name"
                    placeholder="Your Name *"
                  />
                  <input
                    id="form-input"
                    name="email"
                    placeholder="Your Email *"
                  />
                  <textarea
                    id="form-input-text"
                    name="message"
                    placeholder="message.. *"
                  />
                  <Button className="form-btn">send Message</Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
export default ContactPage;
