import { useState } from "react";
import "./App.css";
import ModalForm from "./components/ModalForm/ModalForm";
import List from "./components/СongratulationsList/List";
import Header from "./components/Header/Header";
import { congratulationsList } from "./api";

function App() {
  const [congratulations, setCongratulations] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");
  const [update, setUpdate] = useState(false);
  const [id, setId] = useState("");

  const createNewWish = async (congratulation) => {
    const response = await congratulationsList.post(congratulation);
    setCongratulations([...congratulations, response]);
  };

  const updateCongratulations = async (wish) => {
    const response = await congratulationsList.put(wish, id);
    const index = congratulations.findIndex((el) => el.id === id);
    const updateCongratulations = congratulations;
    updateCongratulations[index] = response;
    setCongratulations([...updateCongratulations]);
  };

  const fetchList = async () => {
    const response = await congratulationsList.get();
    const index = Math.floor(Math.random() * response.length);
    const wish = response[index];
    console.log(wish);
    setCongratulations([...congratulations, wish]);
  };

  const toggleIsFavorite = async (id) => {
    const item = congratulations.find((el) => el.id === id);
    const response = await congratulationsList.put(
      { ...item, isFavorite: !item.isFavorite },
      id,
    );
    const index = congratulations.findIndex((el) => el.id === id);
    const updateCongratulations = congratulations;
    updateCongratulations[index] = response;
    setCongratulations([...updateCongratulations]);
  };

  const renderItemsById = (id) => {
    const item = congratulations.find((el) => el.id === id);
    setId(id);
    setIsActive(true);
    setTitle(item.title);
    setMessage(item.message);
    setImage(item.image);
    setUpdate(true);
  };
  const deleteList = async (id) => {
    congratulationsList.delete(id);
    const newArr = congratulations.filter((cong) => cong.id !== id);
    setCongratulations(newArr);
  };

  const showModalWindow = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="App">
      <Header createCong={fetchList} showModalWindow={showModalWindow} />
      {isActive && (
        <ModalForm
          title={title}
          message={message}
          image={image}
          setTitle={setTitle}
          setMessage={setMessage}
          setImage={setImage}
          createNewWish={createNewWish}
          updateCongratulations={updateCongratulations}
          update={update}
        />
      )}
      <List
        renderItemsById={renderItemsById}
        update={toggleIsFavorite}
        cong={congratulations}
        deleteCon={deleteList}
      />
    </div>
  );
}

export default App;
