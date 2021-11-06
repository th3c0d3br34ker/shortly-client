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
            <h1 className="max-w-lg mb-2 text-center lg:text-left text-6xl font-bold leading-tight">
              More than just shorter links
            </h1>
            <p className="max-w-md mb-6 text-center lg:text-left text-black-400">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <a
              href="/"
              className="inline-flex items-center px-4 py-2 md:mt-0 rounded-xl border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:border-blue-700 active:bg-blue-700 transition ease-in-out duration-150"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
