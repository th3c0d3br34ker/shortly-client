import React from 'react';

const BoostSection = () => {
  return (
    <>
      <section className="relative bg-purple-700 bg-center bg-cover boost-section">
        <div className="container flex flex-col items-center p-8 mx-auto max-w-screen-dt">
          <h2 className="mb-4 text-2xl font-bold text-white title">
            Boost your links today
          </h2>
          <a
            href="/"
            className="px-10 py-3 text-sm text-white transition duration-300 ease-in-out bg-teal-400 rounded-full shadow hover:bg-teal-600 hover:shadow-md"
          >
            Get Started
          </a>
        </div>
      </section>
    </>
  );
};

export default BoostSection;
