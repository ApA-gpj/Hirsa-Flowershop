import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import ImageSlider from "./components/imageSlider/ImageSlider";
import sliderImg1 from "./assets/hero1.jpg";
import sliderImg2 from "./assets/hero2.jpg";
import Benefits from "./components/benefits/Benefits";
import Categories from "./components/categories/Categories";
import Products from "./components/products/Products";

function App() {
  const imageUrls = [sliderImg1, sliderImg2];

  return (
    <>
      <Header />
      <ImageSlider images={imageUrls} />
      <Benefits />
      <Categories />
      <Products />
    </>
  );
}

export default App;
