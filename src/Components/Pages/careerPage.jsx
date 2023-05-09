import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import "../../Css/careerPage.css";
import ApplyForm from './applyForm';

const CareerPage = () => {
  // back to top button
  const backToTopHandler = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const [isApply, setApply] = useState(false);

  const applyHandler = () => {
    setApply(true);
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
      {/* <ApplyForm/> */}
      <div className="career-page">
        <div className="career-page-tabs">
          <Button className="btn">Contract Based </Button>
          <Button className="btn">Permanent Employees</Button>
        </div>

        {/* =========================================== contract page tab start ====================================== */}
        <div className="contract-tab-page">
          <Row>
            <Col id="col">
              <h3>Designation</h3>
              <p>Details</p>
              <Button className="btn" onClick={() => applyHandler()}>
                Apply
              </Button>
            </Col>
            <Col id="col">
              <h3>Designation</h3>
              <p>Details</p>
              <Button className="btn" onClick={() => applyHandler()}>
                Apply
              </Button>
            </Col>
            <Col id="col">
              <h3>Designation</h3>
              <p>Details</p>
              <Button className="btn">Apply</Button>
            </Col>
            <Col id="col">
              <h3>Designation</h3>
              <p>Details</p>
              <Button className="btn">Apply</Button>
            </Col>
            <Col id="col">
              <h3>Designation</h3>
              <p>Details</p>
              <Button className="btn">Apply</Button>
            </Col>
            <Col id="col">
              <h3>Designation</h3>
              <p>Details</p>
              <Button className="btn">Apply</Button>
            </Col>
            <Col id="col">
              <h3>Designation</h3>
              <p>Details</p>
              <Button className="btn">Apply</Button>
            </Col>
            <Col id="col">
              <h3>Designation</h3>
              <p>Details</p>
              <Button className="btn">Apply</Button>
            </Col>
          </Row>
        </div>
        {/* =========================================== contract page tab end ====================================== */}

        {/* =========================================== permanent page tab start ====================================== */}

        <div className="permanent-tab-page">
          <Row>
            <Col id="col">
              <h3>Designation</h3>
              <p>Details</p>
              <Button className="btn">Apply</Button>
            </Col>
            <Col id="col">
              <h3>Designation</h3>
              <p>Details</p>
              <Button className="btn">Apply</Button>
            </Col>
            <Col id="col">
              <h3>Designation</h3>
              <p>Details</p>
              <Button className="btn">Apply</Button>
            </Col>
            <Col id="col">
              <h3>Designation</h3>
              <p>Details</p>
              <Button className="btn">Apply</Button>
            </Col>
            <Col id="col">
              <h3>Designation</h3>
              <p>Details</p>
              <Button className="btn">Apply</Button>
            </Col>
            <Col id="col">
              <h3>Designation</h3>
              <p>Details</p>
              <Button className="btn">Apply</Button>
            </Col>
            <Col id="col">
              <h3>Designation</h3>
              <p>Details</p>
              <Button className="btn">Apply</Button>
            </Col>
            <Col id="col">
              <h3>Designation</h3>
              <p>Details</p>
              <Button className="btn">Apply</Button>
            </Col>
          </Row>
        </div>
      </div>
      {isApply ? <ApplyForm /> : ""}
    </>
  );
};
export default CareerPage;
