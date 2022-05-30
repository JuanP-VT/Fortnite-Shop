import React from "react";
import { Link } from "react-router-dom";
import dogeImage from "../img/DogeCoinMain.jpg";
function Home() {
  return (
    <div id="Home">
      <div id="homeTitle">
        {" "}
        Join Now The Best Fortnite Shop In The Galaxy! <br />
        Now Featuring DogeCoin!!
      </div>
      <Link to="/shop" id="goToShop">
        Go To Shop
      </Link>
      <div id="dogeHomeContainer">
        <img id="dogeHomeImage" src={dogeImage} alt="dogeCoinImage" />
      </div>
    </div>
  );
}

export default Home;
