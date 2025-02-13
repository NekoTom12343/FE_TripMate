import React, { useState } from "react";
import { Typography, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const locations = [
  {
    id: "hanoi",
    name: "Ha Noi Capital",
    image:
      "https://image.vietnam.travel/sites/default/files/styles/top_banner/public/2017-06/vietnam-travel-5.jpg?itok=XVnHP3ty",
  },
  {
    id: "hue",
    name: "Hue Ancient Capital",
    image: "https://izitour.com/media/blog/hue-imperial-city-vietnam.webp",
  },
  {
    id: "danang",
    name: "Da Nang City",
    image:
      "https://www.getvisavietnam.com/wp-content/uploads/2024/05/Han-River-and-Han-River-Bridge.jpg",
  },
  {
    id: "hoian",
    name: "Hoi An Ancient Town",
    image:
      "https://blisshoian.com/wp-content/uploads/2024/08/53703063-5989-4005-b5de-7ef567181d86d2fd0929-16922414873551394557686.webp",
  },
  {
    id: "hochiminh",
    name: "Ho Chi Minh City",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f4/Ho_Chi_Minh_City_panorama_2019_%28cropped2%29.jpg",
  },
  {
    id: "dalat",
    name: "Da Lat",
    image:
      "https://bizweb.dktcdn.net/thumb/grande/100/342/038/products/gioi-thieu-ve-da-lat-1-1-jpg-v-1706500854530-bc3b54af-032a-4bc3-bc4f-4b994e311ef4-jpg-v-1706507674117-87b4753c-35a9-4aa8-bb13-a6dd00d156c2.jpg?v=1706586286750",
  },
];

export default function TopLocations({ topLocationRef }) {
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const navigate = useNavigate();

  // Determine which items to display based on the page number
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = locations.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#F5F9FF",
        textAlign: "left",
        fontFamily: "Urbanist",
      }}
      ref={topLocationRef}
    >
      <div className="mt-10 mx-10 space-y-16">
        <Typography
          variant="h4"
          style={{ color: "#2979FF", fontWeight: "bold", marginBottom: "20px" }}
        >
          Top locations to Explore
        </Typography>
        <Grid container spacing={0} justifyContent="space-between">
          {currentItems.map((location, index) => (
            <Grid
              item
              size={{ md: 2, xs: 3 }}
              key={index}
              onClick={() => navigate(`/location/${location.id}`)}
              sx={{ cursor: "pointer" }}
            >
              <Box
                sx={{
                  border: "1px solid rgba(45, 132, 247, 1)",
                  position: "relative",
                  borderRadius: "24px",
                  overflow: "hidden",
                  minHeight: {
                    xl: "400px",
                    md: "280px",
                  },
                  backgroundImage: `linear-gradient(180deg, rgba(45, 132, 247, 0) 0%, #2D84F7 100%), url(${location.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <Typography
                  sx={{
                    position: "absolute",
                    bottom: "20px", // Adjust this value to move it up or down from the bottom
                    left: "50%",
                    transform: "translateX(-50%)",
                    color: "white",
                    fontFamily: "Urbanist",
                    fontWeight: "700",
                    wordWrap: "break-word",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  {location.name}
                </Typography>
              </Box>
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
          className="space-x-6"
        >
          <IconButton
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            size="large"
            sx={{
              backgroundColor: page === 1 ? "#CDCCCC" : "rgb(41, 121, 255)", // Gray when disabled, primary color when enabled
              color: "white",
              "&:hover": {
                backgroundColor: page === 1 ? "gray" : "primary.main", // Darker shade on hover when enabled
              },
            }}
          >
            <ArrowBackIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton
            onClick={() =>
              setPage((prev) =>
                Math.min(prev + 1, Math.ceil(locations.length / itemsPerPage))
              )
            }
            // disabled={page === Math.ceil(locations.length / itemsPerPage)}
            size="large"
            sx={{
              backgroundColor:
                page === Math.ceil(locations.length / itemsPerPage)
                  ? "#CDCCCC"
                  : "rgb(41, 121, 255)",
              "&:hover": {
                backgroundColor:
                  page === Math.ceil(locations.length / itemsPerPage)
                    ? "gray"
                    : "primary.main",
              },
            }}
          >
            <ArrowForwardIcon sx={{ color: "white" }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
