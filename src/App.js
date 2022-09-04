import React from "react";
import AppRouter from "./router/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProductContextProvider from "./context/ProductContext";
import { ToastContainer } from "react-toastify";


const App = () => {
  return (
    <div>
      <ProductContextProvider>
        <AppRouter />
        <ToastContainer/>
      </ProductContextProvider>
    </div>
  );
};

export default App;
