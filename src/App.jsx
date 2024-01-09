import { useState } from "react";
import "./App.css";
import ModalForm from "./components/ModalForm/ModalForm";
import List from "./components/СongratulationsList/List";
import Header from "./components/Header/Header";

function App() {
  const [congratulations, setCongratulations] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const createNewWish = (congratulation) => {
    setCongratulations([...congratulations, congratulation]);
  };

  const deleteCongratulation = (id) => {
    const newArr = congratulations.filter((cong) => cong.id !== id);
    setCongratulations([...newArr]);
  };

  const showModalWindow = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="App">
      <Header createCong={createNewWish} showModalWindow={showModalWindow} />
      {isActive && <ModalForm createNewWish={createNewWish} />}
      <List cong={congratulations} deleteCon={deleteCongratulation} />
    </div>
  );
}

export default App;
