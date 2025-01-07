import { Typography } from "@mui/material";

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
      </div>
    </div>
  );
}
