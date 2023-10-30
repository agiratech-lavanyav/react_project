import React from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import CardSlider from "./Slider";
import About from "./AboutUs/About";
import Shop from "./Shop/Shop";
import { Contact } from "./Contact/Contact";
import SharedComponent from "../../SharedComponent";

const Home = () => {
  return (
    <div className="homePage">
      <Banner />
      <div className="homePage__productCollection">
        <div className="homePage__productCollection__left">
          <h1 className="title">New Arrivals</h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            obcaecati.
          </p>
        </div>
        <div className="homePage__productCollection__right">
          <SharedComponent.Container fixed>
            <CardSlider />
          </SharedComponent.Container>
        </div>
      </div>
      <About />
      <Shop />
      <Contact />
    </div>
  );
};

export default Home;
