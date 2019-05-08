import { apiKey } from './apiKey';

const fetchMovieTvData = async (url, urlPath) => {
  let movieTvUrl = `${url}${apiKey}${urlPath}`;
  const response = await fetch(movieTvUrl);
  const movieTvResults = await response.json();
  console.log(movieTvResults);
}

export { fetchMovieTvData };