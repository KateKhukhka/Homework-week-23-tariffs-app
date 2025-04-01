import React from "react";
import "./tariffCard.css";

function Card(props) {
  const { price_name, speed, remark } = props;
  return (
    <div className="card">
      <div className="card_name">Безлимитный {price_name}</div>
      <div className="card_price">
        <div className="current">руб</div>
        <span className="price">{price_name}</span> /мес
      </div>
      <div className="card_speed">до {speed} Мбайт/сек</div>
      <div className="card_remark">{remark}</div>
    </div>
  );
}
export default Card;
