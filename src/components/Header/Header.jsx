import Button from "../Button/Button";
import styles from "./Header.module.css";
import { FaSpinner } from "react-icons/fa";
const Header = ({ createCong, showModalWindow, isLoading }) => {
  const handleShowWindow = () => {
    console.log("here");
    showModalWindow();
  };
  return (
    <div className={styles["header-container"]}>
      <Button onClick={handleShowWindow} type="button">
        Add Your Own Congratulation
      </Button>
      <h1>Welcome!</h1>
      <Button onClick={createCong} disabled={isLoading} type="button">
        {isLoading ? (
          <FaSpinner className={styles["spinner"]} />
        ) : (
          "Add Random Congratulation"
        )}
      </Button>
    </div>
  );
};

export default Header;
