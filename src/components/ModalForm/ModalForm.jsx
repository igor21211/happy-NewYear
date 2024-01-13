import styles from "./ModalForm.module.css";
import Button from "../Button/Button";

const ModalForm = ({
  createNewWish,
  title,
  message,
  image,
  setTitle,
  setImage,
  setMessage,
  updateCongratulations,
  update,
}) => {
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
    console.log(update);
    if (update) {
      updateCongratulations({ title, message, image, isFavorite: false });
    }
    if (!update) {
      createNewWish({ title, message, image, isFavorite: false });
    }
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
