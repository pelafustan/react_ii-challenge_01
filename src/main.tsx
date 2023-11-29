import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="react_ii-challenge_01">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
