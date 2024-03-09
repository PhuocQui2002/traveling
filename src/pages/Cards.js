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
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label = "Adventure"
              path = "/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label = "Adventure"
              path = "/services"
            />
          </ul>
          <ul className="cards-items">
            <CardItem
              src="images/img-1.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label = "Adventure"
              path = "/services"
            />
            <CardItem
              src="images/img-6.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label = "Adventure"
              path = "/services"
            />
            <CardItem
              src="images/img-7.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label = "Adventure"
              path = "/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
