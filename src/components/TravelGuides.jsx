import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import { Card, CardMedia, CardContent, Pagination } from "@mui/material";

const guides = [
  {
    title: "The best places to visit in Vietnam",
    image: "https://picsum.photos/767/506",
    description:
      "Vietnam is a Southeast Asian country known for its beaches, rivers, Buddhist pagodas and bustling cities. Hanoi, the capital, pays homage to the nation’s iconic",
    link: "#",
  },
  {
    title: "The best places to visit in Vietnam",
    image: "https://picsum.photos/767/506",
    description:
      "Vietnam is a Southeast Asian country known for its beaches, rivers, Buddhist pagodas and bustling cities. Hanoi, the capital, pays homage to the nation’s iconic",
    link: "#",
  },
  {
    title: "The best places to visit in Vietnam",
    image: "https://picsum.photos/767/506",
    description:
      "Vietnam is a Southeast Asian country known for its beaches, rivers, Buddhist pagodas and bustling cities. Hanoi, the capital, pays homage to the nation’s iconic",
    link: "#",
  },
  {
    title: "The best places to visit in Vietnam",
    image: "https://picsum.photos/767/506",
    description:
      "Vietnam is a Southeast Asian country known for its beaches, rivers, Buddhist pagodas and bustling cities. Hanoi, the capital, pays homage to the nation’s iconic",
    link: "#",
  },
  {
    title: "The best places to visit in Vietnam",
    image: "https://picsum.photos/767/506",
    description:
      "Vietnam is a Southeast Asian country known for its beaches, rivers, Buddhist pagodas and bustling cities. Hanoi, the capital, pays homage to the nation’s iconic",
    link: "#",
  },
];
export default function TravelGuides({ travelGuideRef }) {
  const [page, setPage] = useState(1);

  // Calculate the items to display based on the current page
  const itemsPerPage = 4;
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
        <Grid container spacing={10} justifyContent="space-between">
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
                  height="200"
                  image={guide.image}
                  alt={guide.name}
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
                    href={guide.link}
                    style={{ marginTop: "10px" }}
                  >
                    Read Full Post
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
