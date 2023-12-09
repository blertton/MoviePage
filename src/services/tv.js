import axios from "axios";

const apiKey = "0c417a58c1c75346941b8d1157cb6c11";
const baseUrl = "https://api.themoviedb.org/3/discover/tv";

const axiosInstance = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: apiKey,
  },
});

async function fetchTv() {
  try {
    const response = await axiosInstance.get("");
    return response.data.results.map((tv) => ({
      posterPath: tv.poster_path,
      overview: tv.overview,
      name: tv.name,
      releaseDate: tv.release_date,
    }));
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

export { fetchTv };