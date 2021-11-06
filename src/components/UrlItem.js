import React, { useState } from "react";
import copy from "copy-to-clipboard";

import { deleteShortUrl } from "../api/url";

// project imports
import { Spinner } from "./Icons";

const UrlItem = ({ result, refresh }) => {
  const { id, short_url, long_url } = result;
  const [copyText, setCopyText] = useState("Copy");
  const [loading, setLoading] = useState(false);

  const handleCopy = () => {
    copy(short_url);
    setCopyText("Copied!");
  };

  const handleDelete = async () => {
    setLoading(true);
    await deleteShortUrl(id);
    await refresh();
    setLoading(false);
  };

  return (
    <div className="bg-white border flex flex-wrap items-center justify-between my-4 p-4 rounded text-sm">
      <p className="mb-4 md:mb-0 truncate border-bottom-2">{long_url}</p>
      <hr className="bg-gray-100 block mb-4 w-full md:hidden border-separate" />
      <span className="w-full md:w-auto text-blue-400 flex flex-col md:flex-row md:items-center">
        {short_url}

        <button
          onClick={handleCopy}
          className={`inline-flex items-center px-4 py-2 md:mt-0 md:ml-4 rounded-xl border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:border-blue-700 active:bg-blue-700 transition ease-in-out duration-150 ${
            copyText === "Copied!" ? "active" : ""
          }`}
        >
          {copyText}
        </button>
        <button
          onClick={handleDelete}
          type="button"
          className="inline-flex items-center px-4 py-2 md:mt-0 md:ml-4 rounded-xl  border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:border-red-700 active:bg-red-700 transition ease-in-out duration-150"
          disabled={loading}
        >
          {loading && <Spinner />}
          Delete
        </button>
      </span>
    </div>
  );
};

export default UrlItem;
