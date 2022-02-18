import { FC } from "react";
import DefaultImg from "assets/images/DefaultImage.png";

const HomePage: FC = () => {
  return (
    <div>
      <h1>hoge</h1>
      <img src={DefaultImg} alt="test" />
    </div>
  );
};

export default HomePage;
