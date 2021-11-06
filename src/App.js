import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/index.css";

// project imports
const Home = lazy(() => import(/* webpackChunkName: "Home" */ "./pages/Home"));
const Manage = lazy(() =>
  import(/* webpackChunkName: "Manage" */ "./pages/Manage")
);
const ReRoute = lazy(() =>
  import(/* webpackChunkName: "ReRoute" */ "./pages/ReRoute")
);

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
