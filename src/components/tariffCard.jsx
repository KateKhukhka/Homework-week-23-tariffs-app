import "./tariffCard.css";
import { useState } from "react";

function Card(props) {
  const { price_name, speed, remark } = props;
  const [selected, setSelected] = useState(false);
  const handleChange = () => {
    setSelected(!selected);
  };
  return (
    <div onClick={handleChange} className={`card ${selected ? "selected" : ""}`}>
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
