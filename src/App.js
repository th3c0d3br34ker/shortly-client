import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// project imports
import Home from "./pages/Home";
import Manage from "./pages/Manage";
import ReRoute from "./pages/ReRoute";

import "./styles/index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<ReRoute />} />
        <Route path="manage" element={<Manage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
