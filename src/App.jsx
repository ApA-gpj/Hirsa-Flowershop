import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import ImageSlider from "./components/imageSlider/ImageSlider";
import sliderImg1 from "./assets/hero1.jpg";
import sliderImg2 from "./assets/hero2.jpg";
import Benefits from "./components/benefits/Benefits";
import Categories from "./components/categories/Categories";
import Products from "./components/products/Products";
import Customize from "./components/customize/Customize";
import Instagram from "./components/instagram/Instagram";
import Footer from "./components/footer/Footer";



function App() {
  const imageUrls = [sliderImg1, sliderImg2];

  return (
    <>
      <Header />
      <ImageSlider images={imageUrls} />
      <Benefits />
      <Categories />
      <Products />
      <Customize />
      <Instagram/>
      <Footer />
    </>
  );
}

export default App;
