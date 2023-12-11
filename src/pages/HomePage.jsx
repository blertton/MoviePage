import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function FullWidthTextField() {
  return (
    <div>
      <h1
        style={{
          position: "fixed",
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
  );
}
