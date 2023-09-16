import React from "react";
import "./Team.css";
import img1 from "../../assets/team-1.jpg";
import img2 from "../../assets/team-2.jpg";
import img3 from "../../assets/team-3.jpg";
import { Container, Row, Col } from "react-bootstrap";
const Team = () => {
  return (
    <>
      <Container style={{ marginTop: "60px" }} className=" py-5 px-lg-5">
        <div className="wow fadeInUp" data-wow-delay="0.1s">
          <p className="section-title text-secondary justify-content-center">
            <span className="fs-3">اعضا تیم</span>
          </p>
          <h1 className="text-center fw-bold mb-5">اعضای تیم ما</h1>
        </div>
        <Row className=" g-4">
          <Col
            md={6}
            lg={4}
            className=" wow animate__animated animate__fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="team-item bg-light rounded">
              <div className="text-center border-bottom p-4">
                <img className="customeHoverImageTeam img-fluid rounded-circle mb-4" src={img1} alt="" />
                <h5>John Doe</h5>
                <span>CEO & Founder</span>
              </div>
              <div className="d-flex justify-content-center p-4">
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </Col>
          <Col
            md={6}
            lg={4}
            className=" wow animate__animated animate__fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="team-item bg-light rounded">
              <div className="text-center border-bottom p-4">
                <img className="customeHoverImageTeam img-fluid rounded-circle mb-4" src={img2} alt="" />
                <h5>Jessica Brown</h5>
                <span>Web Designer</span>
              </div>
              <div className="d-flex justify-content-center p-4">
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </Col>
          <Col
            md={6}
            lg={4}
            className=" wow animate__animated animate__fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="team-item bg-light rounded">
              <div className="text-center border-bottom p-4">
                <img className="customeHoverImageTeam img-fluid rounded-circle mb-4" src={img3} alt="" />
                <h5>Tony Johnson</h5>
                <span>SEO Expert</span>
              </div>
              <div className="d-flex justify-content-center p-4">
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Team;
