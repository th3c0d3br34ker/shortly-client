import React from "react";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FormInput from "./components/FormInput";
import StatisticsSection from "./components/StatisticsSection";
import BoostSection from "./components/BoostSection";
import Footer from "./components/Footer";

import "./styles/app.css";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <FormInput />
      <StatisticsSection />
      <BoostSection />
      <Footer />
    </>
  );
}

export default App;
