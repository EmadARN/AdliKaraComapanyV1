import { React, useState } from "react";
import "./Facts.css";
import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
const Facts = () => {
  function lc() {
    if (window.scrollY > 1000) {
      setLoadCount(true);
    } else {
      setLoadCount(false);
    }
  }
  const [loadCount, setLoadCount] = useState(false);
  window.addEventListener("scroll", lc);
  return (
    <>
      {" "}
      <section
        className=" container-xxl customBgColor fact py-5 wow animate__animated animate__zoomIn"
        data-wow-delay="0.1s"
      >
        <Container className=" py-5 px-lg-5">
          <Row className="custome-mt">
            <Col
              sm={6}
              md={6}
              lg={3}
              className="p-sm-3    text-center wow animate__animated animate__fadeIn"
            >
              <i className="fa fa-certificate fa-3x text-warning mb-3"></i>
              <h1 className="wow text-white mb-2" data-toggle="counter-up">
                {loadCount ? (
                  <CountUp className="" start={0} end={1234} duration={3} />
                ) : (
                  0
                )}
              </h1>
              <p className="text-light fs-5 mb-0 text-center">چند سال تجربه</p>
            </Col>
            <Col
              sm={6}
              md={6}
              lg={3}
              className="p-sm-3 text-center wow animate__animated animate__fadeIn"
            >
              <i className="fa fa-users-cog fa-3x text-warning mb-3"></i>
              <h1 className="text-white mb-2" data-toggle="counter-up">
                {loadCount ? (
                  <CountUp className="" start={0} end={1234} duration={3} />
                ) : (
                  0
                )}
              </h1>
              <p className="text-center text-light fs-5 mb-0 ">اعضای تیم</p>
            </Col>
            <Col
              sm={6}
              md={6}
              lg={3}
              className="p-sm-3 text-center wow animate__animated animate__fadeIn"
            >
              <i className="fa fa-users fa-3x text-warning mb-3"></i>
              <h1 className="text-white mb-2" data-toggle="counter-up">
                {loadCount ? (
                  <CountUp className="" start={0} end={1234} duration={3} />
                ) : (
                  0
                )}
              </h1>
              <p className="text-center text-light fs-5 mb-0 ">رضایت مشتریان</p>
            </Col>
            <Col
              sm={6}
              md={6}
              lg={3}
              className="text-center p-sm-3 text-center wow animate__animated animate__fadeIn"
            >
              <i className="fa fa-check fa-3x text-warning mb-3"></i>
              <h1 className="text-white mb-2" data-toggle="counter-up">
                {loadCount ? (
                  <CountUp className="" start={0} end={1234} duration={3} />
                ) : (
                  0
                )}
              </h1>
              <p className="text-center text-light fs-5 mb-0 ">
                پروژه های تمام شده
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Facts;
