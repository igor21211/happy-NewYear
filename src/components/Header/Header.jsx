import newYearGreetingsData from "../../data/data";
import createWishWithID from "../../utils/createObjectWithID";
import Button from "../Button/Button";
import styles from "./Header.module.css";
const Header = ({ createCong, showModalWindow }) => {
  const handleRandomWish = () => {
    const index = Math.floor(Math.random() * newYearGreetingsData.length);
    const wish = newYearGreetingsData[index];
    createCong(createWishWithID(wish));
  };

  const handleShowWindow = () => {
    console.log("here");
    showModalWindow();
  };
  return (
    <div className={styles["header-container"]}>
      <Button onClick={handleShowWindow}>Add Your Own Congratulation</Button>
      <h1>Welcome!</h1>
      <Button onClick={handleRandomWish}>Add Random Congratulation</Button>
    </div>
  );
};

export default Header;
