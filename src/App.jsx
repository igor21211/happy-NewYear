import { useState } from "react";
import "./App.css";
import ModalForm from "./components/ModalForm/ModalForm";
import List from "./components/СongratulationsList/List";
import Header from "./components/Header/Header";

function App() {
  const [isActive, setIsActive] = useState(false);

  const showModalWindow = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="App">
      <Header showModalWindow={showModalWindow} />
      {isActive && <ModalForm />}
      <List />
    </div>
  );
}

export default App;
