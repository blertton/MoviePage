import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function FullWidthTextField() {
  return (
    <Box
      sx={{
        width: 550,
        maxWidth: "100%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "grey",
      }}
    >
      <div style={{ display: "flex" }}>
        <TextField
          fullWidth
          label="Search Movies or Series Names"
          id="fullWidth"
          InputProps={{
            style: { color: "your-desired-color" },
          }}
          InputLabelProps={{
            style: { color: "white" },
          }}
          sx={{
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderColor: "white",
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
          }}
        >
          Search
        </Button>
      </div>
    </Box>
  );
}
