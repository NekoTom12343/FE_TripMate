import React, { useState } from "react";
import { Typography, Button, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Pagination from "@mui/material/Pagination";

const locations = [
  { name: "Ha Noi Capital", image: "https://picsum.photos/280/343" },
  { name: "Hue Ancient Capital", image: "https://picsum.photos/280/343" },
  { name: "Da Nang City", image: "https://picsum.photos/280/343" },
  { name: "Hoi An Ancient Town", image: "https://picsum.photos/280/343" },
  { name: "Ho Chi Minh City", image: "https://picsum.photos/280/343" },
  { name: "Da Lat", image: "https://picsum.photos/280/343" },
];

export default function TopLocations() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  // Determine which items to display based on the page number
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = locations.slice(indexOfFirstItem, indexOfLastItem);

  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#F5F9FF",
        textAlign: "left",
        fontFamily: "Urbanist",
      }}
    >
      <div className="mt-10 mx-10 space-y-16">
        <Typography
          variant="h4"
          style={{ color: "#2979FF", fontWeight: "bold", marginBottom: "20px" }}
        >
          Top locations to Explore
        </Typography>
        <Grid container spacing={5} justifyContent="space-evenly">
          {currentItems.map((location, index) => (
            <Grid size={{ md: 2, xs: 3 }} key={index}>
              <div
                style={{
                  position: "relative",
                  borderRadius: "24px",
                  overflow: "hidden",
                  minHeight: "280px",
                  //   width: "280px",
                  paddingX: "20px",
                  backgroundImage: `linear-gradient(180deg, rgba(45, 132, 247, 0) 0%, #2D84F7 100%), url(${location.image})`,
                }}
              >
                <Typography
                  sx={{
                    bottom: "20px",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "240px",
                    color: "white",
                    fontFamily: "Urbanist",
                    fontWeight: "700",
                    wordWrap: "break-word",
                  }}
                >
                  {location.name}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <IconButton
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
          >
            <ArrowBackIcon />
          </IconButton>
          <IconButton
            onClick={() =>
              setPage((prev) =>
                Math.min(prev + 1, Math.ceil(locations.length / itemsPerPage))
              )
            }
            disabled={page === Math.ceil(locations.length / itemsPerPage)}
          >
            <ArrowForwardIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
