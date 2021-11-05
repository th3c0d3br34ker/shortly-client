import React, { useState } from "react";
import copy from "copy-to-clipboard";

const UrlItem = ({ result }) => {
  const { short_url, long_url } = result;
  const [copyText, setCopyText] = useState("Copy");
  const handleCopy = () => {
    copy(short_url);
    setCopyText("Copied!");
  };
  return (
    <div className="bg-white border flex flex-wrap items-center justify-between my-4 p-4 rounded text-sm">
      <p className="mb-4 md:mb-0 truncate border-bottom-2">{long_url}</p>
      <hr className="bg-gray-100 block mb-4 w-full md:hidden border-separate" />
      <span className="w-full md:w-auto text-teal-400 flex flex-col md:flex-row md:items-center">
        {short_url}

        <button
          onClick={handleCopy}
          className={`btn mt-4 md:mt-0 md:ml-4 rounded py-2 px-6 ${
            copyText === "Copied!" ? "active" : ""
          }`}
        >
          {copyText}
        </button>
      </span>
    </div>
  );
};

export default UrlItem;
