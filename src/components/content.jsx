import Card from "./tariffCard";

function Content() {
  return (
    <div className="content">
      <Card price_name="300" speed="10" remark="Обьем включенного трафика не ограничен" />
      <Card price_name="450" speed="50" remark="Обьем включенного трафика не ограничен" />
      <Card price_name="550" speed="100" remark="Обьем включенного трафика не ограничен" />
      <Card price_name="1000" speed="200" remark="Обьем включенного трафика не ограничен" />
    </div>
  );
}
export default Content;
