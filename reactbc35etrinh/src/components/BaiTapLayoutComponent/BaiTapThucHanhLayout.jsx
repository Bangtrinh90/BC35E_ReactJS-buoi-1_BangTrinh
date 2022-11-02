import React, { Component } from "react";
import Header from "./Header";
import Body from "./Body";
import Banner from "./Banner";
import Item from "./Item";
import Footer from "./Footer";

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Banner />

        <Item />

        <Footer />
      </div>
    );
  }
}
