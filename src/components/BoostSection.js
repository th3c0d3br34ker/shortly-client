import React, { memo } from "react";

const BoostSection = () => (
  <>
    <section className="relative bg-indigo-700 bg-center bg-cover boost-section">
      <div className="container flex flex-col items-center p-8 mx-auto max-w-screen-dt">
        <h2 className="mb-4 text-2xl font-bold text-white title">
          Boost your links today
        </h2>
        <a
          href="/"
          className="inline-flex items-center px-4 py-2 md:mt-0 md:ml-4 rounded-xl  border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:border-blue-700 active:bg-blue-700 transition ease-in-out duration-150"
        >
          Get Started
        </a>
      </div>
    </section>
  </>
);

export default memo(BoostSection);
