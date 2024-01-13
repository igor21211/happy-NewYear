import Button from "../Button/Button";
import styles from "./Header.module.css";
const Header = ({ createCong, showModalWindow }) => {
  const handleShowWindow = () => {
    console.log("here");
    showModalWindow();
  };
  return (
    <div className={styles["header-container"]}>
      <Button onClick={handleShowWindow}>Add Your Own Congratulation</Button>
      <h1>Welcome!</h1>
      <Button onClick={createCong}>Add Random Congratulation</Button>
    </div>
  );
};

export default Header;
