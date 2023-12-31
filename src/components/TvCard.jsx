import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

export default function ActionAreaCard({ tv }) {
  return (
    <>
      <Card
        component={RouterLink}
        to={`/tv-details/${tv.id}`}
        sx={{
          background: "#a9c9c9",
          width: 240,
          height: 400,
          display: "inline-flex",
          mt: 10,
          mx: 8,
          borderRadius: 3,
          boxShadow: "0 3px 6px rgba(255, 255, 255, 0.5)",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="350"
            style={{ objectFit: "cover" }}
            image={`https://image.tmdb.org/t/p/w500/${tv.posterPath}`}
            alt={tv.name}
          />
          <CardContent>
            <Typography
              gutterBottom
              fontSize="15px"
              fontWeight="bold"
              component="div"
              textAlign="left"
              sx={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {tv.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
