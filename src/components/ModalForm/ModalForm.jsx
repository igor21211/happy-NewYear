import styles from "./ModalForm.module.css";
import Button from "../Button/Button";
import { FaSpinner } from "react-icons/fa";
import { Component } from "react";

class ModalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSetValue = (e) => {
    this.props.setTitle(e.target.value);
  };
  handleSetMessage = (e) => {
    this.props.setMessage(e.target.value);
  };
  handleSetImage = (e) => {
    this.props.setImage(e.target.value);
  };

  handleSubmitForm = (e) => {
    const { title, message, image } = this.props;
    e.preventDefault();
    if (this.props.update) {
      this.props.updateCongratulations({
        title,
        message,
        image,
        isFavorite: false,
      });
    }
    if (!this.props.update) {
      this.props.createNewWish({ title, message, image, isFavorite: false });
    }
    this.props.setTitle("");
    this.props.setMessage("");
    this.props.setImage("");
  };

  render() {
    const { title, message, image, isLoading } = this.props;
    return (
      <div className={styles["form-container"]}>
        <h2>Form</h2>
        <form onSubmit={this.handleSubmitForm}>
          <input
            type="text"
            placeholder="wish something .. for new 2024"
            value={title}
            onChange={this.handleSetValue}
          />
          <input
            type="text"
            placeholder="write message ..."
            value={message}
            onChange={this.handleSetMessage}
          />
          <input
            type="text"
            placeholder="paste picture link..."
            value={image}
            onChange={this.handleSetImage}
          />
          <Button disabled={isLoading} type="submit">
            {isLoading ? <FaSpinner className={styles["spinner"]} /> : "Submit"}
          </Button>
        </form>
      </div>
    );
  }
}

export default ModalForm;
