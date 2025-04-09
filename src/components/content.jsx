import Card from "./tariffCard";
import cardData from "../cardData";

function Content() {
  return (
    <div className="content">
      {cardData.map((item, index) => {
        return <Card key={index} price_name={item.name} speed={item.speed} remark={item.remark} />;
      })}
    </div>
  );
}
export default Content;
