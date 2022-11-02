import React from "react";
import ReactDOM from "react-dom/client";
import BaiTapThucHanhLayout from "./components/BaiTapLayoutComponent/BaiTapThucHanhLayout.jsx";

// Nhúng css
import "./assets/css/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <BaiTapThucHanhLayout />
  </div>
);
