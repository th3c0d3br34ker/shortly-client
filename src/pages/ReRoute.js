import { useState } from "react";
import { useParams } from "react-router-dom";

import { useEffectOnce } from "react-use";
import { getShortUrl } from "../api/url";
import Loading from "../components/Loading";

const ReRoute = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffectOnce(() => {
    const fetchData = async () => {
      const response = await getShortUrl(id);

      if (response.error) {
        setError(response.error);
        setLoading(false);
      }
      setData(response.data);
      setLoading(false);
    };

    fetchData();
  });

  if (loading) {
    return <Loading />;
  }

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
    <div class="h-screen w-screen bg-gray-100 flex items-center">
      <div class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
        <div class="max-w-md">
          <div class="text-5xl font-dark font-bold">200</div>
          <p class="text-2xl md:text-3xl font-light leading-normal mb-8">
            Found the URL!
          </p>

          <a
            href={data.long_url}
            class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700"
          >
            Go!
          </a>
        </div>
        <div class="max-w-lg"></div>
      </div>
    </div>
  );
};

export default ReRoute;
