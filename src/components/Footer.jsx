import React from "react";
import { Container, Typography, Link } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Logo from "../assets/logo.svg";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#2D84F7", padding: "50px 0" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item size={{ md: 4, sm: 12 }}>
            <img src={Logo} alt="Tripmate" className=" w-200 h-200 mb-5" />
            <Typography variant="body1" color="white">
              Website sharing knowledge, experience and information about
              travel. Community connecting travelers, pairing travelers, group
              travelers. A place connecting travelers and local guides.
            </Typography>
            <div className="mt-3">
              <FacebookRoundedIcon
                sx={{ color: "white", fontSize: 40, mr: 1 }}
              />
              <InstagramIcon sx={{ color: "white", fontSize: 40, mr: 1 }} />
              <YouTubeIcon sx={{ color: "white", fontSize: 40 }} />
            </div>
          </Grid>
          <Grid item size={{ md: 4, sm: 12 }}>
            <Typography
              variant="h5"
              color="white"
              fontWeight={"bold"}
              gutterBottom
            >
              About US
            </Typography>
            <Link
              href="#"
              variant="body1"
              display="block"
              sx={{ color: "white" }}
            >
              Contact
            </Link>
            <Link
              href="#"
              variant="body1"
              display="block"
              sx={{ color: "white" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              variant="body1"
              display="block"
              sx={{ color: "white" }}
            >
              FAQs
            </Link>
            <Link
              href="#"
              variant="body1"
              display="block"
              sx={{ color: "white" }}
            >
              Return and Refund Policy
            </Link>
            <Link
              href="#"
              variant="body1"
              display="block"
              sx={{ color: "white" }}
            >
              Consumer Data Protection Policy
            </Link>
            <Link
              href="#"
              variant="body1"
              display="block"
              sx={{ color: "white" }}
            >
              Payment Policy
            </Link>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          color="white"
          align="center"
          style={{ marginTop: "20px" }}
        >
          © {new Date().getFullYear()} TripMate. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
}
