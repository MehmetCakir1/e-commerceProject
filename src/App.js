import React from "react";
import AppRouter from "./router/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProductContextProvider from "./context/ProductContext";

const App = () => {
  return (
    <div>
      <ProductContextProvider>
        <AppRouter />
      </ProductContextProvider>
    </div>
  );
};

export default App;
