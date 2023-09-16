import React from "react";
import HeaderPa from "../Header/headerPa";
import NavBar from "../../component/NavBar/NavBar";
import Footer from "../Footer/Footer";
import ContactForm from '../ContactForm/ContactForm'
const Contact = () => {
  return (
    <>
      <NavBar></NavBar>
      <HeaderPa title="ارتباط با ما" linkText="ارتباط با ما"></HeaderPa>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </>
  );
};

export default Contact;
