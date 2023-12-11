import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { singleTv } from "../services/singletvapi.js";

function Details() {
  const [showDetail, setShowDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchAndSetTvDetails() {
      try {
        console.log("id:", id);
        const fetchedTvDetails = await singleTv(id);
        setShowDetail(fetchedTvDetails);
      } catch (error) {
        console.error("Error fetching TV show details:", error);
      }
    }

    fetchAndSetTvDetails();
  }, [id]);

  return (
    <div>
      {Array.isArray(showDetail)
        ? showDetail.map((tv) => (
            <div key={tv.id} style={{ textAlign: "center" }}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${tv.posterPath}`}
                alt={tv.name}
                style={{ maxWidth: "100%", marginBottom: "10px" }}
              />
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: "8px",
                }}
              >
                {tv.name}
              </h2>
              <p style={{ fontSize: "16px", marginBottom: "16px" }}>
                {tv.overview}
              </p>
              <p style={{ fontSize: "16px", marginBottom: "8px" }}>
                {tv.Details}
              </p>
              <p style={{ fontSize: "16px" }}>{tv.vote_average}</p>
            </div>
          ))
        : showDetail && (
            <div style={{ textAlign: "center" }}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${showDetail.posterPath}`}
                alt={showDetail.name}
                style={{
                  width: "300px",
                  marginBottom: "10px",
                  marginTop: "100px",
                  borderRadius: "10px",
                }}
              />
              <h2
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  marginBottom: "8px",
                  color: "white",
                }}
              >
                {showDetail.name}
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  marginBottom: "16px",
                  marginRight: "300px",
                  marginLeft: "300px",
                  color: "white",
                }}
              >
                {showDetail.overview}
              </p>
            </div>
          )}
    </div>
  );
}

export default Details;
