import React from "react";
import "./StartProjectCom.css";

import { Row, Col, Container } from "react-bootstrap";
const StartProjectComp = ({ p, h5, img }) => {
  console.log(img);
  return (
    <>
      <Container>
        <Row className="g-4 portfolio-container">
          <Col
           
            lg={4}
            md={6}
            className="custome-respon portfolio-item first wow animate__animated animate__fadeInUp"
            data-wow-delay="0.1s"
            style={{ width: "400px" }}
          >
            <div className="rounded overflow-hidden">
              <div className="position-relative overflow-hidden">
                <img className="img-fluid" src={img} alt="" />
                <div className="portfolio-overlay">
                  <a
                    className="btn btn-square btn-outline-light mx-1"
                    href="img/portfolio-1.jpg"
                    data-lightbox="portfolio"
                  >
                    <i className="fa fa-eye"></i>
                  </a>
                  <a className="btn btn-square btn-outline-light mx-1" href="">
                    <i className="fa fa-link"></i>
                  </a>
                </div>
              </div>
              <div className="bg-light p-4">
                <p className="text-primary fw-medium mb-2">{p}</p>
                <h5 className="lh-base mb-0">{h5}</h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default StartProjectComp;
