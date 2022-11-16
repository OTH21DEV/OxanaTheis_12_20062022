import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./pages/Login/Login";
import DashBoard from "./pages/DashBoard/DashBoard";
import Error from "./components/Error/Error";
import { BrowserRouter as Router, Routes, Route,HashRouter,HashHistory } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router history={HashHistory} >
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/user/:id" element={<DashBoard />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router  >
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
