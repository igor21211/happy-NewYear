import Button from "../Button/Button";
import styles from "./Congratulation.module.css";
import { FcLike } from "react-icons/fc";
import { AiFillDelete } from "react-icons/ai";
import { FcLikePlaceholder } from "react-icons/fc";
import { FaSpinner } from "react-icons/fa";
import { Component } from "react";
class Сongratulation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleDeleteCong = (id) => {
    this.props.deleteCon(id);
  };

  render() {
    const {
      id,
      title,
      message,
      image,
      isFavorite,
      update,
      renderItemsById,
      isLoading,
    } = this.props;
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
          <Button disable={isLoading} onClick={() => renderItemsById(id)}>
            {isLoading ? <FaSpinner className={styles["spinner"]} /> : "Edit"}
          </Button>
          <AiFillDelete
            className={styles["icon-cart"]}
            onClick={() => this.handleDeleteCong(id)}
          ></AiFillDelete>
        </div>
      </div>
    );
  }
}

export default Сongratulation;
