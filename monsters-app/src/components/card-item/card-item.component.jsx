import React from "react";
import Card from "../card/card.component";
import "./card-item.styles.css";

const CardItem = ({ monsters }) => {
  return (
    <div className="card-item">
      {monsters.map((monster, i) => (
        <Card monster={monster} key={monster.id} />
      ))}
    </div>
  );
};

export default CardItem;
