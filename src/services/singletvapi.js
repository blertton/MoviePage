import axios from "axios";

const apiKey = "0c417a58c1c75346941b8d1157cb6c11";
const baseUrl = "https://api.themoviedb.org/3/tv"; // Change the base URL to fetch details for a single TV show

const axiosInstance = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: apiKey,
  },
});

async function singleTv(id) {
  try {
    const response = await axiosInstance.get(`/${id}`);
    const details = response.data;

    return {
      id: details.id,
      posterPath: details.poster_path,
      overview: details.overview,
      name: details.name,
      releaseDate: details.release_date,
      vote: details.vote_average,
    };
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export { singleTv };
