import React, { useState } from "react";

import { createShortUrl } from "../api/url";

// project imports
import UrlItem from "./UrlItem";
import { Spinner } from "./Icons";

const FormInput = () => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const changeHandler = (e) => {
    setUrl(e.target.value);
  };

  const formHandler = async (evt) => {
    evt.preventDefault();
    setLoading(true);

    if (url === "") {
      setError("Please add a link.");
      setLoading(false);
    } else {
      setError(false);

      const response = await createShortUrl({ long_url: url });

      if (response.error) {
        setError(response.error);
      } else {
        setResult(response.data);
        setUrl("");
      }

      setLoading(false);
      setUrl("");
    }
  };

  return (
    <>
      <section className="relative px-8 -mb-24 form-input">
        <div className="container py-4 mx-auto max-w-screen-dt">
          <form
            onSubmit={(e) => formHandler(e)}
            className="w-full px-5 lg:px-10 py-6 lg:py-12 text-sm bg-indigo-600 bg-center
            bg-cover rounded-lg lg:flex lg:justify-between lg:items-center"
          >
            <div className="w-full relative flex flex-col mb-8 lg:mb-0 ">
              <input
                type="text"
                placeholder="Shorten a link here..."
                value={url}
                onChange={changeHandler}
                className={`w-full p-3 border-2 rounded-md h-14 
                ${error ? "border-red-500" : "border-gray-300"}`}
              />
              {error && (
                <p className="absolute text-red-500 error-msg">{error}</p>
              )}
            </div>
            <button
              className={`px-4 py-2 text-xl md:mt-0 md:ml-4 rounded-xl border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:border-blue-700 active:bg-blue-700 transition h-14 lg:px-5 lg:ml-4 ease-in-out duration-150
            ${loading && "inline-flex items-center justify-items-center"}`}
              disabled={loading}
            >
              {loading && <Spinner />}
              Shorten!
            </button>
          </form>
          {result && (
            <div className="shorten__results">
              <UrlItem
                result={result}
                key={result.id}
                refresh={() => setResult(null)}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default FormInput;
