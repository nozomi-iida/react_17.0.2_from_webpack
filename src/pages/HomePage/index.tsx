import { VFC } from "react";
import DefaultImg from "assets/images/DefaultImage.png";

const HomePage: VFC = () => {
  return (
    <div>
      <h1>To!</h1>
      <img src={DefaultImg} alt="test" />
    </div>
  );
};

export default HomePage;
