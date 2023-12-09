import React, { useState, useEffect } from "react";
import TvCard from "../components/TvCard";
import { fetchTv } from "../services/tv.js";

function TvShow() {
  const [tv, setTv] = useState([]);

  useEffect(() => {
    async function fetchAndSetTv() {
      const fetchedTv = await fetchTv();
      setTv(fetchedTv);
    }

    fetchAndSetTv();
  }, []);

  return (
    <div>
      <div>
        {tv.map((tv, index) => (
          <TvCard key={index} tv={tv} />
        ))}
      </div>
    </div>
  );
}

export default TvShow;
