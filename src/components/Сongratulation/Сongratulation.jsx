import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import styles from "./Congratulation.module.css";
import { deleteWish } from "../redux/slice/wishSlice";
const Сongratulation = ({ id, title, message, image }) => {
  const dispatch = useDispatch();
  const handleDeleteCong = (id) => {
    dispatch(deleteWish(id));
  };
  return (
    <div className={styles["cart-container"]}>
      <h2 className={styles["h2"]}>{title}</h2>
      <p className={styles["p"]}>{message}</p>
      <img className={styles["img"]} src={image} alt="img" />
      <Button onClick={() => handleDeleteCong(id)}>Delete</Button>
    </div>
  );
};

export default Сongratulation;
