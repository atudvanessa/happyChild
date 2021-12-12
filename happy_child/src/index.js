import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./App";
import About from "./components/about";
import Helper from "./components/helper";
import Donor from "./components/donor";
import NavBar from "./components/navbar";

const routing = (
  <Router>
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/helper" element={<Helper />} />
        <Route path="/donor" element={<Donor />} />
      </Routes>
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
