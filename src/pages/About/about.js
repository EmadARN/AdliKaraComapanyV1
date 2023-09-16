import React from "react";
import HeaderPa from "../Header/headerPa";
import NavBar from "../../component/NavBar/NavBar";
import Card from "../Card/Card";
import About from "../../component/About/About";
import Team from "../Team/Team";
import Footer from "../Footer/Footer";
const About1 = () => {
  return (
    <>
      <NavBar></NavBar>
      <HeaderPa title="درباره ما" linkText="درباره ما"></HeaderPa>
      <Card></Card>
      <About></About>
      <Team></Team>
      <Footer></Footer>
    </>
  );
};

export default About1;
