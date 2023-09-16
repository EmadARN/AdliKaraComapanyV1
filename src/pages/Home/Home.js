import React from "react";
import Header from "../../component/Header/Header";
import NavBar from "../../component/NavBar/NavBar";
import Card from "../Card/Card";
import About from "../../component/About/About";
import Facts from "../Facts/Facts";
import ServiceP from "../ServiceP/ServiceP";
import NewsLetter from "../NewsLetter/NewsLetter";
import StartProjectPa from "../StartProject/StartProjectPa";
import Test from "../../component/TestCo/Test";
import Team from "../Team/Team";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      <Header></Header>
      <Card></Card>
      <About></About>
      <Facts></Facts>
      <ServiceP></ServiceP>
      <NewsLetter></NewsLetter>
      <StartProjectPa></StartProjectPa>
      <Test></Test>
      <Team></Team>
      <Footer></Footer>
    </>
  );
};

export default Home;
