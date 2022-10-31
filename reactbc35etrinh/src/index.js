import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/BaiTapLayoutComponent/Header.jsx";
import Body from "./components/BaiTapLayoutComponent/Body.jsx";
import Banner from "./components/BaiTapLayoutComponent/Banner.jsx";
import Item from "./components/BaiTapLayoutComponent/Item.jsx";
import Footer from "./components/BaiTapLayoutComponent/Footer.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <Body />
    <Banner />
    <Item />
    <Footer />
  </div>
);
