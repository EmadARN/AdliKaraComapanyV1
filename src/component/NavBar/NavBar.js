import { Nav, Navbar, Container, Col } from "react-bootstrap";
import { BiLogoNetlify } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import "./NavBar.css";
import React, { useRef, useState } from "react";
import { obj, obj1 } from "./object";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
export default function NavBar() {
  const [bearch1, setBearch1] = useState(obj);

  // Start search Btn
  const inpRef = useRef();
  const changeSearch = (e) => {
    setBearch1(obj1);
    inpRef.current.focus();
  };
  const changeTextSearch = (e) => {
    if (e.target.value.length > 0) {
      setBearch1(obj1);
    }
  };
  const changeSearchBlur = (e) => {
    setBearch1(obj);
    if (e.target.value.length > 0) {
      setBearch1(obj1);
    }
  };
  // End search Btn

  // Start scroll NavBar
  function myNav() {
    if (window.scrollY > 70) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  }
  const [navColor, setNavColor] = useState(false);
  window.addEventListener("scroll", myNav);
  // End scroll NavBar
  return (
    <div>
      <Navbar
        expand="lg"
        className={navColor ? "Custome-NavBar active-Header" : "Custome-NavBar"}
      >
        <Container fluid className="">
          <Col xs={1} md={3} lg={{ span: 1 }}>
            <Navbar.Brand className="order-sm-first text-light" href="#">
              <Link className="text-decoration-none  text-light" to="/">
                {" "}
                <BiLogoNetlify size={"60px"}></BiLogoNetlify>
              </Link>
            </Navbar.Brand>
          </Col>
          <Col
            xs={{ span: 5 }}
            sm={{ span: 7 }}
            md={7}
            lg={{ span: 2 }}
            className=""
          >
            {" "}
            <section
              className="order-sm-first  search animate__animated animate__zoomInUp animate__slow  
            "
            >
              <span className="position-relative ">
                <input
                  onChange={changeTextSearch}
                  style={bearch1}
                  onClick={changeSearch}
                  onBlur={changeSearchBlur}
                  type="text"
                  className="Custome-Search"
                  ref={inpRef}
                />

                <FaSearch
                  onClick={changeSearch}
                  onBlur={changeSearchBlur}
                  size={"20px"}
                  color="gray"
                  className="icon-search-custome position-absolute"
                />
              </span>
            </section>
          </Col>

          <Col sm={1} md={1} lg={7} xl={9} className="">
            {" "}
            <Navbar.Toggle className="bg-light" aria-controls="navbarScroll" />
            <Navbar.Offcanvas
              className="bg-dark "
              dir="right"
              id="navbarScroll"
              placement="start"
            >
              <Offcanvas.Header
                closeButton
                className="bg-light justify-content-end "
              ></Offcanvas.Header>
              <Nav
                className=" me-auto my-lg-0 "
                style={{ Height: "100px", width: "100%" }}
              >
                <div className=" w-100 d-flex  justify-content-between ">
                  <section className=" d-flex custome-size fs-5">
                    <Link
                      id="a1"
                      className="text-decoration-none  px-2 text-light tw-5 bord"
                      to="/About"
                    >
                      درباره ما
                    </Link>
                    <div class="border-bott1"></div>
                    <Link
                      id="a2"
                      className="text-decoration-none  px-2 text-light bord1"
                      to="/Contact"
                    >
                      ارتباط با ما
                    </Link>
                    <div class="border-bott2"></div>
                    <Link
                      id="a3"
                      className="text-decoration-none  px-2 text-light bord2"
                      href="#action3"
                    >
                      پنل
                    </Link>
                    <div class="border-bott3"></div>
                  </section>
                  <section className="custome-margin">
                    <Link
                      className="text-decoration-none  px-2 order-sm-first order-lg-last text-light"
                      to="/Login"
                    >
                      <AiOutlineLogin
                        className="custome-Login-Icon"
                        size={"30px"}
                      ></AiOutlineLogin>
                    </Link>
                  </section>
                </div>
              </Nav>
            </Navbar.Offcanvas>
          </Col>
        </Container>
      </Navbar>
    </div>
  );
}
