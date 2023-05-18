import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import "../../Css/industryPage.css";


const IndustryPage = () => {
  
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
  return (
    <>
      <div className="industry-page">
        {/* =================================== industry-page-section-1-start ================================== */}
        <div className="about-page-section-1">
          <h1>Industries</h1>
        </div>
        <div className="industry-page-section-2">
          <Row>
            <Col lg={3} md={4} sm={6}>
              <div id="col1">IT, ITES</div>
            </Col>
            <Col lg={3} md={4} sm={6}>
              <div id="col2">Non IT, Manufacturing</div>
            </Col>
            <Col lg={3} md={4} sm={6}>
              <div id="col3">Engineering</div>
            </Col>
            <Col lg={3} md={4} sm={6}>
              <div id="col4">Banking, Financial Services</div>
            </Col>
            <Col lg={3} md={4} sm={6}>
              <div id="col5">FMCG</div>
            </Col>
            <Col lg={3} md={4} sm={6}>
              <div id="col6">Healthcare, Pharma & Lifesciences</div>
            </Col>
            <Col lg={3} md={4} sm={6}>
              <div id="col7">Automobile, Telecom</div>
            </Col>
            <Col lg={3} md={4} sm={6}>
              <div id="col8">Retail</div>
            </Col>
            <Col lg={3} md={4} sm={6}>
              <div id="col9">Marketing & Advertising</div>
            </Col>
            <Col lg={3} md={4} sm={6}>
              <div id="col10">E-Learning</div>
            </Col>
            <Col lg={3} md={4} sm={6}>
              <div id="col11">Analytics</div>
            </Col>
            <Col lg={3} md={4} sm={6}>
              <div id="col12">Mining & Metals</div>
            </Col>
          </Row>
        </div>
        {/* =================================== industry-page-section-1-end ================================== */}
      </div>
    </>
  );
};
export default IndustryPage;
