import { Component } from "react";
import Button from "../Button/Button";
import styles from "./Header.module.css";
import { FaSpinner } from "react-icons/fa";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleShowWindow = () => {
    this.props.showModalWindow();
  };
  render() {
    const { createCong, isLoading } = this.props;
    return (
      <div className={styles["header-container"]}>
        <Button onClick={this.handleShowWindow} type="button">
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
  }
}

export default Header;
