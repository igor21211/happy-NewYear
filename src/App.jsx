import { Component } from "react";
import "./App.css";
import ModalForm from "./components/ModalForm/ModalForm";
import List from "./components/СongratulationsList/List";
import Header from "./components/Header/Header";
import { congratulationsList } from "./api";
import Erorr from "./components/Erorr/Erorr";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      congratulations: [],
      isActive: false,
      title: "",
      message: "",
      image: "",
      update: false,
      id: "",
      isLoading: false,
      erorrMsg: "",
    };
  }

  createNewWish = async (congratulation) => {
    this.setState({ isLoading: true });
    try {
      const response = await congratulationsList.post(congratulation);
      this.setState((prevState) => ({
        congratulations: [...prevState.congratulations, response],
        erorrMsg: "Successfull Create!!",
      }));
    } catch (error) {
      this.setState({ erorrMsg: error.message });
    } finally {
      this.setState({ isActive: false, isLoading: false });
    }
  };

  updateCongratulations = async (wish) => {
    this.setState({ isLoading: true });
    try {
      const response = await congratulationsList.put(wish, this.state.id);
      const index = this.state.congratulations.findIndex(
        (el) => el.id === this.state.id,
      );
      const updateCongratulations = [...this.state.congratulations];
      updateCongratulations[index] = response;
      this.setState({ congratulations: [...updateCongratulations] });
      this.setState({ id: "", erorrMsg: "Successful Update!!" });
    } catch (error) {
      this.setState({ erorrMsg: error.message });
    } finally {
      this.setState({ isActive: false, isLoading: false, update: false });
    }
  };

  fetchList = async () => {
    this.setState({ isLoading: true });
    try {
      const response = await congratulationsList.get();
      if (response.length === 0) {
        throw new Erorr("Api return 0 data");
      }
      const index = Math.floor(Math.random() * response.length);
      const wish = response[index];
      this.setState({
        congratulations: [...this.state.congratulations, wish],
        erorrMsg: "Successful Random!!",
      });
    } catch (error) {
      this.setState({ erorrMsg: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  toggleIsFavorite = async (id) => {
    try {
      const item = this.state.congratulations.find((el) => el.id === id);
      const response = await congratulationsList.put(
        { ...item, isFavorite: !item.isFavorite },
        id,
      );
      const index = this.state.congratulations.findIndex((el) => el.id === id);
      const updateCongratulations = this.state.congratulations;
      updateCongratulations[index] = response;
      this.setState({
        congratulations: [...this.state.congratulations],
        erorrMsg: "Successful",
      });
    } catch (error) {
      this.setState({ erorrMsg: error.message });
    }
  };

  renderItemsById = (id) => {
    this.setState({ isLoading: true });
    const item = this.state.congratulations.find((el) => el.id === id);
    const { title, message, image } = item;
    this.setState({
      id,
      isActive: true,
      title,
      message,
      image,
      update: true,
      isLoading: false,
    });
  };
  deleteList = async (id) => {
    try {
      const newArr = this.state.congratulations.filter(
        (cong) => cong.id !== id,
      );
      congratulationsList.delete(id);
      this.setState({
        congratulations: newArr,
        erorrMsg: "Successful Deleted!!",
      });
    } catch (error) {
      this.setState({ erorrMsg: error.message });
    }
  };

  showModalWindow = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    const {
      congratulations,
      isActive,
      isLoading,
      update,
      title,
      message,
      image,
      erorrMsg,
    } = this.state;

    return (
      <div className="App">
        <Header
          createCong={this.fetchList}
          showModalWindow={this.showModalWindow}
          isLoading={isLoading}
        />
        {isActive && (
          <ModalForm
            title={title}
            message={message}
            image={image}
            setTitle={(title) => this.setState({ title })}
            setMessage={(message) => this.setState({ message })}
            setImage={(image) => this.setState({ image })}
            createNewWish={this.createNewWish}
            updateCongratulations={this.updateCongratulations}
            update={update}
            isLoading={isLoading}
          />
        )}
        <List
          renderItemsById={this.renderItemsById}
          update={this.toggleIsFavorite}
          cong={congratulations}
          deleteCon={this.deleteList}
          isLoading={isLoading}
        />
        <Erorr
          erorrMsg={erorrMsg}
          setErorr={(erorrMsg) => this.setState({ erorrMsg })}
        />
      </div>
    );
  }
}

export default App;
