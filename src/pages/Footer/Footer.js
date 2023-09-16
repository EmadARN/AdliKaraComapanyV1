import { React, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import imge1 from "../../assets/portfolio-1.jpg";
import imge2 from "../../assets/portfolio-2.jpg";
import imge3 from "../../assets/portfolio-3.jpg";
import imge4 from "../../assets/portfolio-4.jpg";
import imge5 from "../../assets/portfolio-5.jpg";
import imge6 from "../../assets/portfolio-6.jpg";
const Footer = () => {
  return (
    <>
      <Container
        fluid
        className=" text-light footer wow animate__animated animate__fadeIn"
        data-wow-delay="0.1s"
        style={{ backgroundColor: "rgb(26, 26, 26)" }}
      >
        <Container className=" py-5 px-lg-5">
          <Row className=" g-5">
            <Col md={6} lg={4} className="">
              <p className=" text-white h5 mb-4">
                آدرس<span></span>
              </p>
              <p>
                <i className="fa fa-map-marker-alt me-3"></i>زنجان خیابان فاتح
              </p>
              <p>
                <i className="fa fa-phone-alt me-3"></i>989124412020+
              </p>
              <p>
                <i className="fa fa-envelope me-3"></i>info@example.com
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </Col>

            <Col md={6} lg={4} className="">
              <p className=" text-white h5 mb-4">
                گالری<span></span>
              </p>
              <Row className=" g-2 ">
                <div className="col-4">
                  <img
                    className="img-fluid image-scale"
                    src={imge1}
                    alt="Image"
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid image-scale"
                    src={imge2}
                    alt="Image"
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid image-scale"
                    src={imge3}
                    alt="Image"
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid image-scale"
                    src={imge4}
                    alt="Image"
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid image-scale"
                    src={imge5}
                    alt="Image"
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid image-scale"
                    src={imge6}
                    alt="Image"
                  />
                </div>
              </Row>
            </Col>
            <Col md={6} lg={4} className="ps-5">
              <p className=" text-white h5 mb-4">
                اخبار جدید<span></span>
              </p>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </p>
              <div className="position-relative w-100 mt-3">
                <input
                  className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                  type="text"
                  placeholder="ایمیل شما"
                  style={{ height: "48px" }}
                />
                <button
                  type="button"
                  className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
                >
                  <i className="fa fa-paper-plane text-primary fs-4"></i>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="container px-lg-5">
          <div className="copyright">
            <Row className="">
              <Col md={6} className=" text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <a className="border-bottom" href="#">
                  Your Site Name
                </a>
                , All Right Reserved. Designed By{" "}
                <a className="border-bottom" href="https://AdliKara.com">
                  Adli Kara
                </a>
              </Col>
              <Col md={6} className=" text-center text-md-end">
                <div className="footer-menu">
                  <a href="">Home</a>
                  <a href="">Cookies</a>
                  <a href="">Help</a>
                  <a href="">FQAs</a>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Footer;
