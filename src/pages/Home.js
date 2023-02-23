import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/doughnuts.JPG";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h2>Peck's Doughnut</h2>
        <p>DOUGHNUT TO FIT ANY TASTE</p>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
