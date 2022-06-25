import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./pages/Login";
import DashBoard from "./pages/DashBoard";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
//<DashBoard></DashBoard>



const root = ReactDOM.createRoot(document.getElementById("root"));
/*
const usersData = new GetDataApi().getUsersData();
console.log(usersData)*/

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/user/:id" element={<DashBoard/>}></Route>
 
  </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
