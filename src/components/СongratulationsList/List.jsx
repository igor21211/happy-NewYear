import { Component } from "react";
import Сongratulation from "../Сongratulation/Сongratulation";
import styles from "./List.module.css";
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { cong, deleteCon, update, renderItemsById, isLoading } = this.props;
    return (
      <div className={styles["list-container"]}>
        {cong.length === 0 ? (
          <h2>Not have any congratulations</h2>
        ) : (
          cong.map((con) => (
            <Сongratulation
              renderItemsById={renderItemsById}
              update={update}
              deleteCon={deleteCon}
              key={con.id}
              isLoading={isLoading}
              {...con}
            />
          ))
        )}
      </div>
    );
  }
}

export default List;
