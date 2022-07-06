import React from "react";
import Banner from "./Banner";

import "./HomeScreen.css";
import Nav from "./Nav";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Nav />

      <Banner />
      {/* ROW */}
    </div>
  );
};

export default HomeScreen;
