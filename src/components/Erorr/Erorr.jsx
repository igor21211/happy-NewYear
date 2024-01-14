import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const Erorr = ({ erorrMsg, setErorr }) => {
  useEffect(() => {
    if (
      (erorrMsg.includes("Erorr") && erorrMsg) ||
      erorrMsg.includes("failed") ||
      erorrMsg.includes("404")
    ) {
      toast.error(erorrMsg);
      setErorr("");
    }
    if (erorrMsg.includes("Success")) {
      toast.success(erorrMsg);
      setErorr("");
    }
  }, [erorrMsg, setErorr]);

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
};

export default Erorr;
