import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Header";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Header>
      {/*  <BrowserRouter basename="/">
        {/*<Link to="/tmr">aaa</Link>*/}
      {/*<Link to="/today">bbb</Link>*/}
      {/*<Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Account" element={<h1>Account</h1>} />
          <Route path="/tmr" element={<h1>tmr</h1>} />
        </Routes>
      </BrowserRouter>
      */}
    </Header>
  </React.StrictMode>
);
