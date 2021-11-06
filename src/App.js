import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";

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
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":id" element={<ReRoute />} />
          <Route path="manage" element={<Manage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
