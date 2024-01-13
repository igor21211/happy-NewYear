import Button from "../Button/Button";
import styles from "./Congratulation.module.css";
import { FcLike } from "react-icons/fc";
import { AiFillDelete } from "react-icons/ai";
import { FcLikePlaceholder } from "react-icons/fc";
const Сongratulation = ({
  id,
  title,
  message,
  image,
  deleteCon,
  isFavorite,
  update,
  renderItemsById,
}) => {
  const handleDeleteCong = (id) => {
    deleteCon(id);
  };

  return (
    <div className={styles["cart-container"]}>
      <h2 className={styles["h2"]}>{title}</h2>
      <p className={styles["p"]}>{message}</p>
      <img className={styles["img"]} src={image} alt="img" />
      <div className={styles["action-container"]}>
        {isFavorite ? (
          <FcLike onClick={() => update(id)} className={styles["icon"]} />
        ) : (
          <FcLikePlaceholder
            onClick={() => update(id)}
            className={styles["icon"]}
          />
        )}
        <Button onClick={() => renderItemsById(id)}>Edit</Button>
        <AiFillDelete
          className={styles["icon-cart"]}
          onClick={() => handleDeleteCong(id)}
        ></AiFillDelete>
      </div>
    </div>
  );
};

export default Сongratulation;
