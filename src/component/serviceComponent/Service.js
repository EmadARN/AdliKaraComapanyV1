import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Service.css";
const ServiceComponent = ({ icon, iconBtn, title, text }) => {
  return (
    <div>

        <div className="service-item d-flex flex-column text-center rounded">
          <div className="service-icon flex-shrink-0">
            <i className={`${icon} fa-2x`}></i>
          </div>
          <h5 className="mb-3">{title}</h5>
          <p className="m-0">{text}</p>
          <a className=" btn btn-square" href="">
            <i className={iconBtn}></i>
          </a>
        </div>
      </div>
   
  );
};

export default ServiceComponent;
