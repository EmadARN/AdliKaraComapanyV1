import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./ContactForm.css";
const ContactForm = () => {
  return (
    <section className=" wow animate__animated animate__zoomInUp animate__slow	">
      <Container class=" py-5 px-lg-5">
        <p class="section-title text-secondary justify-content-center">
          <p class="text-center  fs-3 fw-bold " style={{ color: "#ffa561" }}>
            با ما در ارتباط باشید
          </p>
        </p>
        <h1 class="text-center mb-5">برای هر گونه سوال تماس بگیرید</h1>
        <Form className="m-auto" style={{ width: "700px" }}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Row className=" mb-3">
              <Col md={6}>
                <Form.Control
                  className=" p-4 customPlaceHold"
                  type="email"
                  placeholder="نام شما "
                />
              </Col>
              <Col md={6}>
                <Form.Control
                  className="p-4 customPlaceHold"
                  type="email"
                  placeholder="ایمیل شما"
                />
              </Col>
            </Row>
            <Col className="mb-3">
              <Form.Control
                className="p-4 customPlaceHold"
                type="email"
                placeholder="موضوع"
              />
              <Form.Control
                className="customPlaceHold1 p-4 mt-2"
                as="textarea"
                rows={3}
                placeholder="پیام"
              />
            </Col>
          </Form.Group>
          <Form.Group
            className="mb-3 mt-4"
            controlId="exampleForm.ControlTextarea1"
          >
            <button class="customeColorBtn btn  w-100 py-3" type="submit">
              ارسال پیام
            </button>
          </Form.Group>
        </Form>
      </Container>
    </section>
  );
};
export default ContactForm;
{
  /* <Row class="wow fadeInUp" data-wow-delay="0.1s">
<p class="section-title text-secondary justify-content-center">
  <p class="text-center  fs-3 fw-bold " style={{ color: "#ffa561" }}>
    با ما در ارتباط باشید
  </p>
</p>
<h1 class="text-center mb-5">برای هر گونه سوال تماس بگیرید</h1>
</Row>
<Row class="">
<Col lg={7} class="d-flex justify-content-center">
  <div class="wow fadeInUp" data-wow-delay="0.3s">
    <Form>
      <div class=" g-3">
        <Col md={6} class="">
          <div class="form-floating">
            <input
              type="text"
              class="form-control outline-0 border-0  "
              id="name"
              placeholder="Your Name"
            />
            <label for="name">نام شما</label>
          </div>
        </Col>
        <Col md={6} class="">
          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Your Email"
            />
            <label for="email">ایمیل شما</label>
          </div>
        </Col>
        <Col md={12} class="">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="subject"
              placeholder="Subject"
            />
            <label for="subject">موضوع</label>
          </div>
        </Col>
        <Col md={12} class="">
          <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="Leave a message here"
              id="message"
              style={{ height: "150px" }}
            ></textarea>
            <label for="message">پیام</label>
          </div>
        </Col>
        <Col class="">
        
        </Col>
      </div>
    </Form>
  </div>
</Col>
</Row> */
}
