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
          <Route path="/youtube" element={<Youtube />} />
          <Route path="/bilibili" element={<Bilibili />} />
          <Route path="/account" element={<Account />} />
          <Route path="/history" element={<History />} />
          <Route path="/convert" element={<Convert />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </LeftDrawer>
    </Router>
  </React.StrictMode>
);
