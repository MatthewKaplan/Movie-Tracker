import apiKey from "./apiKey";

const fetchMovieTvData = async (url, urlPath) => {
  let movieTvUrl = `${url}${apiKey}${urlPath}`;
  const response = await fetch(movieTvUrl);
  if (!response.ok) {
    throw Error("Something went wrong");
  }
  const movieTvResults = await response.json();
  console.log(movieTvResults);
  return movieTvResults;
};

export { fetchMovieTvData };
