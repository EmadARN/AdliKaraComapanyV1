import React from "react";
import "./NewsLetter.css";
import { Row, Container, Col } from "react-bootstrap";
const NewsLetter = () => {
  return (
    <>
      <Container
        fluid
        className="  py-5 px-lg-5 custom-bg wow animate__animated animate__fadeInUp"
        data-wow-delay="0.1s"
        style={{ marginTop: "200px" }}
      >
        <Row className=" justify-content-center">
          <Col lg={7} className=" text-center">
            <p className="section-title text-white justify-content-center">
              <span></span>اخبار جدید<span></span>
            </p>
            <h1 className="text-center text-white mb-4">
              همیشه در ارتباط باشید
            </h1>
            <p className="text-white mb-4">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
            <div className="position-relative w-100 mt-3">
              <input
                style={{ style: "height: 48px" }}
                className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                type="text"
                placeholder="ایمیل خود را وارد کنید"
              />
              <button
                type="button"
                className="btn shadow-none position-absolute top-0 end-0  me-2"
              >
                <i className="fa fa-paper-plane text-secondary   fs-4"></i>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NewsLetter;
