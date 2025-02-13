import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

const articles = [
  {
    id: 1,
    title: "Sapa: The Misty Highlands",
    description: "Aenean eleifend ante maecenas pulvinar montes lorem et pede.",
    image:
      "https://saigontourism.com.vn/wp-content/uploads/2023/10/Sapa-Vietnam-04.jpg",
    date: "June 21, 2022",
    readTime: "2 minute read",
  },
  {
    id: 2,
    title: "Ha Long Bay: A Natural Wonder of the World",
    description: "Aenean eleifend ante maecenas pulvinar montes lorem et pede.",
    image: "https://lp-cms-production.imgix.net/2023-10/GettyRF92865967.jpg",
    date: "June 21, 2022",
    readTime: "2 minute read",
  },
  {
    id: 3,
    title: "Hanoi: The Timeless Charm of Vietnam",
    description: "Aenean eleifend ante maecenas pulvinar montes lorem et pede.",
    image:
      "https://tiimtravel.com/storage/uploads/2024/08/hanoi-tiimtravel-KRXN3BN7.jpg",
    date: "June 21, 2022",
    readTime: "2 minute read",
  },
  {
    id: 4,
    title: "Da Nang: The Coastal Gem of Central Vietnam",
    description: "Aenean eleifend ante maecenas pulvinar montes lorem et pede.",
    image:
      "https://bangkokattractions.com/wp-content/uploads/2023/03/da-nang.jpg",
    date: "June 21, 2022",
    readTime: "2 minute read",
  },
];
export default function TravelGuideBlogCard() {
  return (
    <Container sx={{ mt: 10, mb: 10 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 5,
          fontFamily: "Urbanist",
          color: "#2D84F7",
        }}
      >
        YOU MAY ALSO LIKE
      </Typography>
      <Grid container spacing={3}>
        {articles.map((article) => (
          <Grid item size={{ md: 6, xs: 6 }} key={article.id}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardMedia
                component="img"
                sx={{ height: "350px", width: "100%", objectFit: "cover" }}
                image={article.image}
                alt={article.title}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {article.description}
                </Typography>
                <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                  {article.date} — <strong>{article.readTime}</strong>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
