import { Col, Container, Row } from "react-bootstrap";
import "./About.css";
import aboutImg from "../../assets/about.png";
import Progressbar from "./progressBar";
import progressBarDatas from "../../progressDatas";
import { useState } from "react";

export default function About() {
  const [mydata, setMydata] = useState(progressBarDatas);

  return (
    <>
      <Container style={{ marginTop: "150px" }}>
        <Row className="">
          <Col lg={6} md={12} className="">
            <div className="">
              <h5
                style={{ paddingbottom: "20px" }}
                className="fs-2 fw-bold text-body-secondary "
              >
                درباره ما
              </h5>
              <h1 style={{ paddingTop: "40px" }} className="">
                با بیش از 10 سال سابقه با آدلی کارا
              </h1>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                کتابهای زیادی در شصت و سه درصد گذشته
              </p>
              {mydata.map((items11) => (
                <Progressbar {...items11} />
              ))}
              <div class="custom-button d-flex">
                <a
                  class="text-decoration-none text-secondary"
                  href=""
                  data-target="#log-in"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <button className="customeBtn fs-4"> بیشتر...</button>
                </a>
              </div>
            </div>
          </Col>
          <Col
            lg={6}
            md={12}
            className="px-4 wow animate__animated animate__zoomIn"
          >
            {" "}
            <img className="img-fluid" src={aboutImg} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
