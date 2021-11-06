import React, { memo } from "react";

import statsList from "../stats.js";

const StatisticsSection = () => (
  <>
    <section className="px-8 bg-gray-200 statistics-section">
      <div className="container max-w-screen-dt py-40 mx-auto">
        <div className="flex flex-col items-center mb-8 intro">
          <h2 className="mb-2 text-5xl font-bold title">Advanced Statistics</h2>
          <h3 className="max-w-md mb-8 text-sm font-medium text-center text-indigo-400 subtitle">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-12 lg:gap-6 lg:grid-cols-3 cards-wrap">
          {statsList.map((stat) => (
            <div
              className="relative z-10 p-8 pt-16 bg-white rounded-md shadow card"
              key={stat.id}
            >
              <div className="absolute p-4 bg-indigo-700 rounded-full">
                <img src={stat.icon} alt="" />
              </div>
              <h3 className="mb-4 font-bold">{stat.title}</h3>
              <p className="text-black-400">{stat.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default memo(StatisticsSection);
