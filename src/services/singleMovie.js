import axios from "axios";

const apiKey = "0c417a58c1c75346941b8d1157cb6c11";
const baseUrl = "https://api.themoviedb.org/3/movie";

const axiosInstance = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: apiKey,
  },
});

async function singleMovie(id) {
  try {
    const response = await axiosInstance.get(`/${id}`);
    const mdetails = response.data;

    return {
      id: mdetails.id,
      posterPath: mdetails.poster_path,
      overview: mdetails.overview,
      originalTitle: mdetails.original_title,
      releaseDate: mdetails.release_date,
    };
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export { singleMovie };
