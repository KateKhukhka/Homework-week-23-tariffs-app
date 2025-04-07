import Card from "./tariffCard";

function Content() {
  const cards = [
    { name: 300, speed: 10, remark: "Обьем включенного трафика не ограничен" },
    { name: 450, speed: 50, remark: "Обьем включенного трафика не ограничен" },
    { name: 550, speed: 100, remark: "Обьем включенного трафика не ограничен" },
    { name: 1000, speed: 200, remark: "Обьем включенного трафика не ограничен" },
  ];
  return (
    <div className="content">
      {cards.map((item, index) => {
        return <Card key={index} price_name={item.name} speed={item.speed} remark={item.remark} />;
      })}
    </div>
  );
}
export default Content;
