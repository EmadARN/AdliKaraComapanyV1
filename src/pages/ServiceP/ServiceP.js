import { React, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ServiceComponent from "../../component/serviceComponent/Service";
import ServiceData1 from "../../ServiceData";
const ServiceP = () => {
  const [serviceBox, setServiceBox] = useState(ServiceData1);

  return (
    <>
      <Container className="mt-5">
        <div style={{ marginTop: "150px" }} className=" py-5 px-lg-5">
          <div
            className="wow animate__animated animate__fadeInUp"
            data-wow-delay="0.1s"
          >
            <p className="section-title text-secondary justify-content-center">
              <span className="fs-3 fw-bold">سرویس های تیم ما</span>
            </p>
            <h1 className="text-center fs-4 fw-bold my-5">
              تخصص هایی که اعضای آدلی کارا ارائه میدهند
            </h1>
          </div>
        </div>
        <Row>
          {serviceBox.map((items3) => (
            <Col className="gy-4" lg={4} key={items3.id}>
              <ServiceComponent {...items3} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ServiceP;
