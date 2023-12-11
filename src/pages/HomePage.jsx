import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MoviePage from "./MoviePage";
import TvShowPage from "./TvShowPage";

export default function FullWidthTextField() {
  return (
    <div style={{ display: "flex", marginTop: 300 }}>
      <div>
        <h1
          style={{
            position: "absolute",
            top: "15%",
            left: "36%",
            transform: "translate(-5%, -50%)",
            fontFamily: "Raleway, Arial",
            fontWeight: 700,
            letterSpacing: ".2rem",
            color: "#83e3f2",
          }}
        >
          MovieSlap
        </h1>
        <Box
          sx={{
            width: 550,
            maxWidth: "100%",
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#9aa6a6",
          }}
        >
          <div style={{ display: "flex" }}>
            <TextField
              fullWidth
              label="Search Movies or Series Names"
              id="fullWidth"
              InputProps={{
                style: { color: "white" },
              }}
              InputLabelProps={{
                style: { color: "white" },
              }}
              sx={{
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                borderColor: "white",
                boxShadow: "0 3px 6px rgba(255, 255, 255, 0.5)",
              }}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{
                height: 55,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                background: "#007c7c",
                boxShadow: "0 3px 6px rgba(255, 255, 255, 0.5)",
              }}
            >
              Search
            </Button>
          </div>
        </Box>
      </div>
      <div>
        <div>
          <h2
            style={{
              marginTop: "60px",
              marginLeft: "60px",
              color: "white",
              letterSpacing: ".1rem",
              color: "#83e3f2",
            }}
          >
            Top Films
          </h2>
          <MoviePage maxMovies={5} />
        </div>
        <div>
          <h2
            style={{
              marginTop: "60px",
              marginLeft: "60px",
              color: "white",
              letterSpacing: ".1rem",
              color: "#83e3f2",
            }}
          >
            Top Shows
          </h2>
          <TvShowPage maxTv={5} />
        </div>
      </div>
    </div>
  );
}
