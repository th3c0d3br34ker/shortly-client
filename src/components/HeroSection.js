import React from "react";
import Illustration from "../images/illustration-working.svg";

const HeroSection = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container p-8 lg:py-32 lg:px-4 max-w-screen-dt mx-auto">
          <div className="block lg:hidden mb-8">
            <img src={Illustration} alt="Illustration" />
          </div>
          <div className="flex flex-col items-center lg:items-start lg:w-6/12 w-full">
            <h1 className="max-w-lg mb-2 text-center lg:text-left text-5xl font-bold leading-tight">
              More than just shorter links
            </h1>
            <p className="max-w-md mb-6 text-center lg:text-left text-purple-400">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <a href="/" className="btn">
              Get Started
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
