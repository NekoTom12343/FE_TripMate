import { Avatar, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const mates = [
  { name: "Ten khach", avatar: "https://picsum.photos/56/56" },
  { name: "Ten khach", avatar: "https://picsum.photos/56/56" },
  { name: "Ten khach", avatar: "https://picsum.photos/56/56" },
  { name: "Ten khach", avatar: "https://picsum.photos/56/56" },
  { name: "Ten khach", avatar: "https://picsum.photos/56/56" },
  { name: "Ten khach", avatar: "https://picsum.photos/56/56" },
  { name: "Ten khach", avatar: "https://picsum.photos/56/56" },
  { name: "Ten khach", avatar: "https://picsum.photos/56/56" },
  { name: "Ten khach", avatar: "https://picsum.photos/56/56" },
  { name: "+1000 mores...", avatar: "https://picsum.photos/56/56" },
];

export default function TripMateList() {
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
          TRIP MATEs are waiting for you to travel together
        </Typography>
        <Grid container spacing={6} justifyContent="start">
          {mates.map((mate, index) => (
            <Grid
              item
              key={index}
              size={{ md: 2, xs: 4 }}
              className="flex justify-center"
            >
              {index === mates.length - 1 ? (
                <Button
                  className="flex gap-4 bg-white p-4 rounded-full shadow-md w-full"
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "9999px",
                  }}
                  onClick={() => alert("Show more mates")}
                >
                  <Avatar
                    sx={{
                      width: 56,
                      height: 56,
                    }}
                    src={mate.avatar}
                  />
                  <Typography
                    variant="h6"
                    className="mt-2 flex-wrap content-center text-blue-700 font-semibold "
                  >
                    {mate.name}
                  </Typography>
                </Button>
              ) : (
                <div className="flex gap-4 bg-white p-4 rounded-full shadow-md w-full cursor-pointer">
                  <Avatar
                    sx={{
                      width: 56,
                      height: 56,
                    }}
                    src={mate.avatar}
                  >
                    {/* Add placeholder icon or image */}
                  </Avatar>
                  <Typography
                    variant="h6"
                    className="mt-2 flex-wrap content-center text-blue-700 font-semibold "
                  >
                    {mate.name}
                  </Typography>
                </div>
              )}
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
