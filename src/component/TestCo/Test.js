import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Carousel from "react-bootstrap/Carousel";
import test1 from "../../assets/testimonial-1.jpg";
import test2 from "../../assets/testimonial-2.jpg";
import test3 from "../../assets/testimonial-3.jpg";
import test4 from "../../assets/testimonial-4.jpg";
import { Row, Container, Col } from "react-bootstrap";
import "./Test.css";
const Test = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 0, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 0, // optional, default to 1.
    },
  };
  return (
    <>
      <Container
        style={{ marginTop: "100px" }}
        className=" wow animate__animated animate__fadeInUp"
      >
        <p className="section-title text-secondary justify-content-center">
          <span className="fs-3">نظرات</span>
        </p>
        <h1 className="text-center mb-5 fw-bold fs-4">نظرات مشتریان</h1>

        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition=" 5s ease"
          transitionDuration={5000}
          containerclassName="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={true}
          dotListclassName="custom-dot-list-style"
          itemclassName="carousel-item-padding-40-px"
        >
          <div className="testimonial-carousel me-2 wow animate__animated animate__fadeInUp">
            <div className="testimonial-item  bg-light rounded my-4 ">
              <p className="fs-5 ">
                <i className="  text-warning   me-3"></i>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود
              </p>
              <div
                className="d-flex justify-align-content-lg-start 
                    "
              >
                <img
                  className="img-fluid flex-shrink-0 rounded-circle "
                  src={test1}
                />

                <div className="ps-4  ">
                  <h5 className="mt-4 pe-3">نام</h5>
                  <span>Profession</span>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-carousel me-2 wow animate__animated animate__fadeInUp">
            <div className="testimonial-item  bg-light rounded my-4 ">
              <p className="fs-5">
                <i className="text-warning  me-3"></i>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود
              </p>
              <div
                className="d-flex justify-align-content-lg-start 
                    "
              >
                <img
                  className="img-fluid flex-shrink-0 rounded-circle "
                  src={test2}
                />

                <div className="ps-4  ">
                  <h5 className="mt-4 pe-3">نام</h5>
                  <span>Profession</span>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-carousel  me-2 wow animate__animated animate__fadeInUp">
            <div className="testimonial-item  bg-light rounded my-4 ">
              <p className="fs-5">
                <i className=" text-warning  me-3"></i>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود
              </p>
              <div
                className="d-flex justify-align-content-lg-start 
                    "
              >
                <img
                  className="img-fluid flex-shrink-0 rounded-circle "
                  src={test3}
                />

                <div className="ps-4  ">
                  <h5 className="mt-4 pe-3">نام</h5>
                  <span>Profession</span>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-carousel me-2 wow animate__animated animate__fadeInUp">
            <div className="testimonial-item  bg-light rounded my-4 ">
              <p className="fs-5">
                <i className=" text-warning  me-3"></i>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود
              </p>
              <div
                className="d-flex justify-align-content-lg-start 
                    "
              >
                <img
                  className="img-fluid flex-shrink-0 rounded-circle "
                  src={test4}
                />

                <div className="ps-4  ">
                  <h5 className="mt-4 pe-3">نام</h5>
                  <span>Profession</span>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </Container>
    </>
  );
};

export default Test;
