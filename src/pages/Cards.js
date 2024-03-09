import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem
              src="images/img-10.jpg"
              text="Experience cloud hunting, sightseeing and taking photos in Da Lat"
              label="Đà Lạt"
              path="/services"
            />
            <CardItem
              src="images/img-11.jpg"
              text="Enjoy the wind and swim in Vung Tau beach"
              label="Vũng Tàu"
              path="/services"
            />
          </ul>
          <ul className="cards-items">
            <CardItem
              src="images/img-12.jpg"
              text="Adventure on beautiful, poetic roads"
              label="Hà Giang"
              path="/services"
            />
            <CardItem
              src="images/img-13.jpg"
              text="Resort, swimming and enjoying fresh seafood"
              label="Phú Quốc"
              path="/services"
            />
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
