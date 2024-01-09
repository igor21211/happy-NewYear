import { useSelector } from "react-redux";
import Сongratulation from "../Сongratulation/Сongratulation";
import styles from "./List.module.css";
const List = () => {
  const cong = useSelector((state) => state.wish);
  return (
    <div className={styles["list-container"]}>
      {cong.length === 0 ? (
        <h2>Not have any congratulations</h2>
      ) : (
        cong.map((con) => <Сongratulation key={con.id} {...con} />)
      )}
    </div>
  );
};

export default List;
