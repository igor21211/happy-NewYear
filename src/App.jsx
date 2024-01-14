import { useState } from "react";
import "./App.css";
import ModalForm from "./components/ModalForm/ModalForm";
import List from "./components/СongratulationsList/List";
import Header from "./components/Header/Header";
import { congratulationsList } from "./api";
import Erorr from "./components/Erorr/Erorr";

function App() {
  const [congratulations, setCongratulations] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");
  const [update, setUpdate] = useState(false);
  const [id, setId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [erorrMsg, setErorr] = useState("");

  const createNewWish = async (congratulation) => {
    setIsLoading(true);
    try {
      const response = await congratulationsList.post(congratulation);
      setCongratulations([...congratulations, response]);
      setErorr("Successfull Create!!");
    } catch (error) {
      setErorr(error.message);
    } finally {
      setIsActive(false);
      setIsLoading(false);
    }
  };

  const updateCongratulations = async (wish) => {
    setIsLoading(true);
    try {
      const response = await congratulationsList.put(wish, id);
      const index = congratulations.findIndex((el) => el.id === id);
      const updateCongratulations = congratulations;
      updateCongratulations[index] = response;
      setCongratulations([...updateCongratulations]);
      setErorr("Successful Update!!");
      setId("");
    } catch (error) {
      setErorr(error.message);
    } finally {
      setIsActive(false);
      setIsLoading(false);
      setUpdate(false);
    }
  };

  const fetchList = async () => {
    setIsLoading(true);
    try {
      const response = await congratulationsList.get();
      if (response.length === 0) {
        throw new Erorr("Api return 0 data");
      }
      const index = Math.floor(Math.random() * response.length);
      const wish = response[index];
      setCongratulations([...congratulations, wish]);
      setErorr("Successful Random!!");
    } catch (error) {
      setErorr(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleIsFavorite = async (id) => {
    try {
      const item = congratulations.find((el) => el.id === id);
      const response = await congratulationsList.put(
        { ...item, isFavorite: !item.isFavorite },
        id,
      );
      const index = congratulations.findIndex((el) => el.id === id);
      const updateCongratulations = congratulations;
      updateCongratulations[index] = response;
      setCongratulations([...updateCongratulations]);
      setErorr("Successful add Like!!");
    } catch (error) {
      setErorr(error.message);
    }
  };

  const renderItemsById = (id) => {
    setIsLoading(true);
    const item = congratulations.find((el) => el.id === id);
    setId(id);
    setIsActive(true);
    setTitle(item.title);
    setMessage(item.message);
    setImage(item.image);
    setUpdate(true);
    setIsLoading(false);
  };
  const deleteList = async (id) => {
    try {
      const newArr = congratulations.filter((cong) => cong.id !== id);
      congratulationsList.delete(id);
      setCongratulations(newArr);
      setErorr("Successful Deleted!!");
    } catch (error) {
      setErorr(error.message);
    }
  };

  const showModalWindow = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="App">
      <Header
        createCong={fetchList}
        showModalWindow={showModalWindow}
        isLoading={isLoading}
      />
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
          isLoading={isLoading}
        />
      )}
      <List
        renderItemsById={renderItemsById}
        update={toggleIsFavorite}
        cong={congratulations}
        deleteCon={deleteList}
        isLoading={isLoading}
      />
      <Erorr erorrMsg={erorrMsg} setErorr={setErorr} />
    </div>
  );
}

export default App;
