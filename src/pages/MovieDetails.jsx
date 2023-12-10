// Details.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { singleMovie } from "../services/singleMovie";

function Details() {
  const [mDetails, setMDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchAndSetMovieDetails() {
      try {
        console.log("id:", id);
        const fetchedMovieDetails = await singleMovie(id);
        setMDetails(fetchedMovieDetails);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }

    fetchAndSetMovieDetails();
  }, [id]);

  return (
    <div>
      {mDetails && (
        <div style={{ textAlign: "center" }}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${mDetails.posterPath}`}
            alt={mDetails.originalTitle}
            style={{ width: "300px", marginBottom: "10px", marginTop: "100px" }}
          />
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              marginBottom: "8px",
              color:'white'
            }}
          >
            {mDetails.originalTitle}
          </h2>
          <p
            style={{
              fontSize: "16px",
              marginBottom: "16px",
              marginRight: "300px",
              marginLeft: "300px",
              color:'white'
            }}
          >
            {mDetails.overview}
          </p>
        </div>
      )}
    </div>
  );
}

export default Details;
