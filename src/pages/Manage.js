import { useEffect, useState } from "react";

import { fetchUrls } from "../utils";

// project imports
import UrlItem from "../components/UrlItem";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Manage = () => {
  const [error, setError] = useState(null);
  const [results, setResults] = useState([]);

  const refresh = () => {
    fetchUrls({ onSuccess: setResults, onError: setError });
  };

  useEffect(() => {
    refresh();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error)
    return (
      <div class="h-screen w-screen bg-gray-100 flex items-center">
        <div class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
          <div class="max-w-md">
            <div class="text-5xl font-dark font-bold">{error.statusCode}</div>
            <p class="text-2xl md:text-3xl font-light leading-normal mb-8">
              {error.message}
            </p>
            <p class="mb-8">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>

            <a
              href="/"
              class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700"
            >
              back to homepage
            </a>
          </div>
          <div class="max-w-lg"></div>
        </div>
      </div>
    );

  return (
    <>
      <Header />
      <div className="w-screen h-screen bg-gray-100 flex flex-col items-center px-16">
        {results?.length === 0 ? null : (
          <>
            <div className="w-full bg-white border flex flex-wrap items-center justify-between my-4 p-4 rounded text-sm">
              <p className="mb-4 md:mb-0 truncate text-2xl">Long URL</p>
              <p className="md:w-auto mr-80 text-blue-400 flex flex-col md:flex-row md:items-center">
                Short URL
              </p>
            </div>

            {results?.map((result, idx) => (
              <div className="w-full">
                <UrlItem
                  result={result}
                  key={result.id + idx}
                  refresh={refresh}
                />
              </div>
            ))}
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Manage;
