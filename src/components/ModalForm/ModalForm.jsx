import { useState } from "react";
import styles from "./ModalForm.module.css";
import Button from "../Button/Button";
import createWishWithID from "../../utils/createObjectWithID";
import { useDispatch } from "react-redux";
import { addWish } from "../redux/slice/wishSlice";

const ModalForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");

  const handleSetValue = (e) => {
    setTitle(e.target.value);
  };
  const handleSetMessage = (e) => {
    setMessage(e.target.value);
  };
  const handleSetImage = (e) => {
    setImage(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(addWish(createWishWithID({ title, message, image })));
    setTitle("");
    setMessage("");
    setImage("");
  };

  return (
    <div className={styles["form-container"]}>
      <h2>Form</h2>
      <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          placeholder="wish something .. for new 2024"
          value={title}
          onChange={handleSetValue}
        />
        <input
          type="text"
          placeholder="write message ..."
          value={message}
          onChange={handleSetMessage}
        />
        <input
          type="text"
          placeholder="paste picture link..."
          value={image}
          onChange={handleSetImage}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default ModalForm;
