import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import { Card, CardMedia, CardContent, Pagination, Stack } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useNavigate } from "react-router-dom";

const guides = [
  {
    id: 1,
    title: "Sapa: The Misty Highlands",
    description: "Aenean eleifend ante maecenas pulvinar montes lorem et pede.",
    headerImage:
      "https://saigontourism.com.vn/wp-content/uploads/2023/10/Sapa-Vietnam-04.jpg",
    date: "June 21, 2022",
    readTime: "2 minute read",
  },
  {
    id: 2,
    title: "Ha Long Bay: A Natural Wonder of the World",
    description: "Aenean eleifend ante maecenas pulvinar montes lorem et pede.",
    headerImage:
      "https://lp-cms-production.imgix.net/2023-10/GettyRF92865967.jpg",
    date: "June 21, 2022",
    readTime: "2 minute read",
  },
  {
    id: 3,
    title: "Hanoi: The Timeless Charm of Vietnam",
    description: "Aenean eleifend ante maecenas pulvinar montes lorem et pede.",
    headerImage:
      "https://tiimtravel.com/storage/uploads/2024/08/hanoi-tiimtravel-KRXN3BN7.jpg",
    date: "June 21, 2022",
    readTime: "2 minute read",
  },
  {
    id: 4,
    title: "Da Nang: The Coastal Gem of Central Vietnam",
    description: "Aenean eleifend ante maecenas pulvinar montes lorem et pede.",
    headerImage:
      "https://bangkokattractions.com/wp-content/uploads/2023/03/da-nang.jpg",
    date: "June 21, 2022",
    readTime: "2 minute read",
  },
  {
    id: 5,
    title: "A Wonderful Journey to Ho Chi Minh City",
    description:
      "Relationship tips couples therapists are giving all the time.",
    headerImage:
      "https://live.staticflickr.com/65535/53329298767_3c1a14858b_c.jpg",
    date: "June 21, 2022",
    readTime: "2 minute read",
  },
];

export default function TravelGuides({ travelGuideRef }) {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  // Calculate the items to display based on the current page
  const itemsPerPage = 6;
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = guides.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#F5F9FF",
        textAlign: "left",
        fontFamily: "Urbanist",
      }}
      ref={travelGuideRef}
    >
      <div className="mt-10 mx-10 space-y-16">
        <div className="flex justify-between">
          <Typography
            variant="h4"
            style={{
              color: "#2979FF",
              fontWeight: "bold",
              paddingTop: "5px",
              paddingBottom: "5px",
            }}
          >
            Travel Guides
          </Typography>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "40px",
              textTransform: "none",
              padding: "0px 30px",
              fontSize: "1rem",
            }}
          >
            View All Stories
          </Button>
        </div>
        <Grid container spacing={10}>
          {currentItems.map((guide, index) => (
            <Grid item size={{ md: 4, xs: 4 }} key={index}>
              <Card
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ height: "350px", width: "100%", objectFit: "cover" }}
                  image={guide.headerImage}
                  alt={guide.name}
                  borderRadius="16px 16px 0 0"
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    style={{ fontWeight: "bold", marginBottom: "8px" }}
                  >
                    {guide.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {guide.description}
                  </Typography>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => {
                      navigate(`/travelguide/${guide.id}`);
                    }}
                    style={{
                      marginTop: "10px",
                      textTransform: "none",
                      fontWeight: "bold",
                      fontFamily: "Urbanist",
                      fontSize: "1rem",
                    }}
                    endIcon={<ArrowOutwardIcon />}
                  >
                    Read Full Post
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Stack
          spacing={2}
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pagination
            count={10}
            shape="rounded"
            color="primary"
            size="large"
            onChange={(event, value) => setPage(value)}
          />
        </Stack>
      </div>
    </div>
  );
}
