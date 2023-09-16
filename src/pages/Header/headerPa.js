import { React, useState } from "react";
import headerdatas from "../../headerDatas";
import { Container, Row } from "react-bootstrap";
import "./headerPa.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
const HeaderPa = ({ title, linkText }) => {
  function bts() {
    if (window.scrollY > 70) {
      setBtnSearch(true);
    } else {
      setBtnSearch(false);
    }
  }
  const [btnSearch, setBtnSearch] = useState(false);
  window.addEventListener("scroll", bts);
  return (
    <Container fluid className="p-0 custome-ly">
      <a
        className={
          btnSearch ? " backToTop active-btnSearch" : "Custome-btnSearch"
        }
        href="#main-search"
      >
        {" "}
        <div className=" backward-search">
          <i className="backToTop fas fa-arrow-up"></i>
        </div>
      </a>
      <Row
        className="headers m-0"
        style={{ backgroundColor: "rgb(26, 26, 26)" }}
        id="main-search"
      >
        <div className="custome-height d-flex flex-column  justify-content-center  align-items-center ">
          <h1 className="mt-5 text-light">{title}</h1>
          <Breadcrumb className=" mt-3 custome-color">
            <Breadcrumb.Item>
              {" "}
              <Link to="/">صحفه اصلی</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item to="/" href="#">
              صحفه ها
            </Breadcrumb.Item>
            <Breadcrumb.Item>{linkText}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </Row>
      <svg
        className=""
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="rgb(26, 26, 26)"
          fill-opacity="1"
          d="M0,160L26.7,170.7C53.3,181,107,203,160,176C213.3,149,267,75,320,58.7C373.3,43,427,85,480,90.7C533.3,96,587,64,640,80C693.3,96,747,160,800,176C853.3,192,907,160,960,170.7C1013.3,181,1067,235,1120,224C1173.3,213,1227,139,1280,122.7C1333.3,107,1387,149,1413,170.7L1440,192L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
        ></path>
      </svg>
    </Container>
  );
};

export default HeaderPa;
