import { useDispatch } from "react-redux";
import newYearGreetingsData from "../../data/data";
import createWishWithID from "../../utils/createObjectWithID";
import Button from "../Button/Button";
import styles from "./Header.module.css";
import { addWish } from "../redux/slice/wishSlice";
const Header = ({ showModalWindow }) => {
  const dispatch = useDispatch();
  const handleRandomWish = () => {
    const index = Math.floor(Math.random() * newYearGreetingsData.length);
    const wish = newYearGreetingsData[index];
    dispatch(addWish(createWishWithID(wish)));
  };

  const handleShowWindow = () => {
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
