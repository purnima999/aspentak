import React, { useEffect, useState } from "react";
import { Button, Row, Col, Modal, Form } from "react-bootstrap";
import "../../Css/careerPage.css";
import jsonData from "../../JsonData/profiles.json";

const CareerPage = () => {
  // back to top button
  const backToTopHandler = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  // show hide modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    document.querySelector(".contract-btn").classList.add("current");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  //upload file

  const uploadFile = (e) => {
    console.log("fileName", e);
  };

  const contractBtnHandler = () => {
    document.querySelector(".contract-btn").classList.add("current");
    document.querySelector(".permanent-btn").classList.remove("current");
    document.querySelector(".contract-tab-page").classList.add("current");
    document.querySelector(".permanent-tab-page").classList.remove("current");
  };

  const permanentBtnHandler = () => {
    document.querySelector(".contract-btn").classList.remove("current");
    document.querySelector(".permanent-btn").classList.add("current");
    document.querySelector(".permanent-tab-page").classList.add("current");
    document.querySelector(".contract-tab-page").classList.remove("current");
  };

  // console.log("contractBasedJobs", contractBasedJobs);

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
      <div className="career-page">
        <div className="career-page-tabs">
          <Button className="contract-btn" onClick={() => contractBtnHandler()}>
            Contract Based
          </Button>
          <Button
            className="permanent-btn"
            onClick={() => permanentBtnHandler()}
          >
            Permanent Employees
          </Button>
        </div>

        {/* =========================================== contract page tab start ====================================== */}
        <div className="contract-tab-page current">
          <Row>
            {jsonData?.contractBasedJobs?.length > 0 &&
              jsonData?.contractBasedJobs?.map((item, index) => {
                return (
                  <Col id="col">
                    <ol>
                      <li>
                        <span>Company:</span>
                        {item?.company}
                      </li>
                      <li>
                        <span>Job Role:</span>
                        {item?.jobRole}
                      </li>
                      <li>
                        <span>Qualification:</span>
                        {item?.qualification}
                      </li>
                      <li>
                        <span>Experience:</span>
                        {item?.experience}
                      </li>
                      <li>
                        <span>Location:</span>
                        {item?.location}
                      </li>
                    </ol>
                    <Button className="btn" onClick={() => handleShow()}>
                      Apply
                    </Button>
                  </Col>
                );
              })}
          </Row>
        </div>
        {/* =========================================== contract page tab end ====================================== */}

        {/* =========================================== permanent page tab start ====================================== */}
        <div className="permanent-tab-page">
          <Row>
            {jsonData?.permanentEmp?.length > 0 &&
              jsonData?.permanentEmp?.map((item, index) => {
                return (
                  <Col id="col">
                    <ol>
                      <li>
                        <span>Company:</span>
                        {item?.company}
                      </li>
                      <li>
                        <span>Job Role:</span>
                        {item?.jobRole}
                      </li>
                      <li>
                        <span>Qualification:</span>
                        {item?.qualification}
                      </li>
                      <li>
                        <span>Experience:</span>
                        {item?.experience}
                      </li>
                      <li>
                        <span>Location:</span>
                        {item?.location}
                      </li>
                    </ol>
                    <Button className="btn" onClick={() => handleShow()}>
                      Apply
                    </Button>
                  </Col>
                );
              })}
          </Row>
        </div>
      </div>

      {/* form */}
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
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Control type="file" />
              </Form.Group>
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
    </>
  );
};
export default CareerPage;
