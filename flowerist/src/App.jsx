import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import ImageSlider from "./components/imageSlider/ImageSlider";
import sliderImg1 from "./assets/hero1.jpg";
import sliderImg2 from "./assets/hero2.jpg";

function App() {
  const imageUrls = [sliderImg1, sliderImg2];

  return (
    <>
      <Header />
      <ImageSlider images={imageUrls} />
    </>
  );
}

export default App;
