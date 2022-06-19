import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LeftDrawer from "./LeftDrawer";
import Home from "./content/Home";
import Youtube from "./content/Youtube";
import Bilibili from "./content/Bilibili";
import Convert from "./content/Convert";
import Contact from "./content/Contact";
import History from "./content/History";
import Account from "./content/Account";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <LeftDrawer>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/youtube" element={<Youtube />} />
          <Route exact path="/bilibili" element={<Bilibili />} />
          <Route exact path="/account" element={<Account />} />
          <Route exact path="/history" element={<History />} />
          <Route exact path="/convert" element={<Convert />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </LeftDrawer>
    </Router>
  </React.StrictMode>
);
