import React, { useContext } from "react";
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
import productsCtx from "./contexts/productsCtx";
import productImage1 from "./assets/productsImages/product1.webp";
import productImage2 from "./assets/productsImages/product2.webp";
import productImage3 from "./assets/productsImages/product3.webp";
import productImage4 from "./assets/productsImages/product4.webp";
import productImage5 from "./assets/productsImages/product5.webp";
import productImage6 from "./assets/productsImages/product6.webp";
import productImage7 from "./assets/productsImages/product7.webp";
import productImage8 from "./assets/productsImages/product8.webp";
import productImage9 from "./assets/productsImages/product9.webp";
import productImage10 from "./assets/productsImages/product10.webp";


function App() {
  const imageUrls = [sliderImg1, sliderImg2];

  const productsContent = [
    {
      id: 1,
      imgSrc: productImage1,
      title: "شاخه گل رز سرخ طبیعی",
      price: 60_000,
      category: "شاخه گل",
      isLiked: false,
      isHovered: false,
    },
    {
      id: 2,
      imgSrc: productImage2,
      title: "شاخه گل نرگس طبیعی",
      price: 60_000,
      category: "شاخه گل",
      isLiked: false,
      isHovered: false,
    },
    {
      id: 3,
      imgSrc: productImage3,
      title: "گل آپارتمانی کروتون",
      price: 1_500_000,
      category: "گیاهان آپارتمانی",
      isLiked: false,
      isHovered: false,
    },
    {
      id: 4,
      imgSrc: productImage4,
      title: "گل آپارتمانی بابا آدم",
      price: 2_500_000,
      category: "گیاهان آپارتمانی",
      isLiked: false,
      isHovered: false,
    },
    {
      id: 5,
      imgSrc: productImage5,
      title: "دسته گل ویژه هیرسا",
      price: 1_250_000,
      category: "دسته گل",
      isLiked: false,
      isHovered: false,
    },
    {
      id: 6,
      imgSrc: productImage6,
      title: "دسته گل عروس",
      price: 4_000_000,
      category: "دسته گل",
      isLiked: false,
      isHovered: false,
    },
    {
      id: 7,
      imgSrc: productImage7,
      title: "تاج گل ختمی",
      price: 3_000_000,
      category: "تاج گل",
      isLiked: false,
      isHovered: false,
    },
    {
      id: 8,
      imgSrc: productImage8,
      title: "تاج گل هپی مپی",
      price: 3_500_000,
      category: "تاج گل",
      isLiked: false,
      isHovered: false,
    },
    {
      id: 9,
      imgSrc: productImage9,
      title: "پک کادویی ولنتاین",
      price: 1_500_000,
      category: "بسته‌های کادویی",
      isLiked: false,
      isHovered: false,
    },
    {
      id: 10,
      imgSrc: productImage10,
      title: "پک کادویی تولد",
      price: 1_500_000,
      category: "بسته‌های کادویی",
      isLiked: false,
      isHovered: false,
    },
  ];

  return (
    <>
      <productsCtx.Provider value={productsContent}>

        <Header />
        <ImageSlider images={imageUrls} />
        <Benefits />
        <Categories />
        <Products />
        <Customize />
        <Instagram />
        <Footer />

      </productsCtx.Provider>
    </>
  );
}

export default App;
