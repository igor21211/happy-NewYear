import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Component } from "react";

class Erorr extends Component {
  componentDidUpdate(prevProps) {
    const { erorrMsg, setErorr } = this.props;

    if (
      (erorrMsg.includes("Erorr") && erorrMsg) ||
      erorrMsg.includes("failed") ||
      erorrMsg.includes("404")
    ) {
      toast.error(erorrMsg);
      setErorr("");
    }

    if (erorrMsg.includes("Success") && erorrMsg !== prevProps.erorrMsg) {
      toast.success(erorrMsg);
      setErorr("");
    }
  }

  render() {
    return (
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    );
  }
}

export default Erorr;
