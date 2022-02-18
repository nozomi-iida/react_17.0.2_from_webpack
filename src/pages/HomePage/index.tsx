import { VFC } from "react";
import DefaultImg from "assets/images/DefaultImage.png";

const HomePage: VFC = () => {
  return (
    <div>
      <h1>hogehoge!</h1>
      <img src={DefaultImg} alt="test" />
    </div>
  );
};

export default HomePage;
