import { Component } from "react";
import styles from "./Button.module.css";

class Button extends Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <button {...props} className={styles["button"]}>
        {children}
      </button>
    );
  }
}

export default Button;
