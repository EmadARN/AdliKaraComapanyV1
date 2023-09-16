import { React, useState } from "react";
import "./StartProjectPa.css";
import StartProjectComp from "../../component/StartProject/StartProjectComp";
import projectDatas from "../../projectDatas";
import { Row, Col, Container } from "react-bootstrap";
const StartProjectPa = () => {
  const [projectDatasBox, setprojectDatasBox] = useState(projectDatas);
  const FindBox = [
    { id: 1, text: "همه" },
    { id: 2, text: "دیزاین سایت" },
    { id: 3, text: "گرافیک سایت" },
  ];
  const Filter1 = () => {
    const finall = projectDatas.filter((value) => {
      return value;
    });
    setprojectDatasBox(finall);
  };

  const onlyDesignWeb = (categoryItem) => {
    const finall2 = projectDatas.filter((value) => {
      return value.category == categoryItem;
    });
    setprojectDatasBox(finall2);
  };
  const onlyGraphicWeb = (categoryItem) => {
    const finall3 = projectDatas.filter((value) => {
      return value.category == categoryItem;
    });
    setprojectDatasBox(finall3);
  };
  return (
    <>
      <Container
        style={{ marginTop: "100px" }}
        className="container py-5 px-lg-5"
      >
        <div className="wow fadeInUp" data-wow-delay="0.1s">
          <p className="section-title text-secondary d-flex justify-content-center">
            <span className=" fs-3">پروژه های ما</span>
          </p>
          <h1 className=" fs-2 fw-bold text-center mb-5">
            پروژه های تازه تمام شده
          </h1>
        </div>
        <Row
          className="    wow animate__animated animate__fadeInUp"
          data-wow-delay="0.3s"
        >
          <Col
            lg={12}
            className=" d-flex justify-content-center align-content-center   "
          >
            <ul
              className="list-inline d-flex flex-row mb-5"
              id="portfolio-flters pointer "
            >
              <li
                onClick={Filter1}
                className="mx-2 fs-5 active text-secondary pointer"
              >
                {FindBox[0].text}
              </li>
              <li
                onClick={() => {
                  onlyDesignWeb("design web");
                }}
                className="mx-2 fs-5 text-secondary pointer"
              >
                {" "}
                {FindBox[1].text}
              </li>
              <li
                onClick={() => {
                  onlyGraphicWeb("Graphic web");
                }}
                className="mx-2 fs-5 text-secondary pointer"
              >
                {" "}
                {FindBox[2].text}
              </li>
            </ul>
          </Col>
        </Row>

        <Row>
          {projectDatasBox.map((items4) => (
            <Col className="gy-4" lg={4} key={items4.id}>
              <StartProjectComp {...items4} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default StartProjectPa;
