import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { MessageCircleMore } from "lucide-react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import logo from "../assets/logo.svg";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useNavigate } from "react-router-dom";

export default function HeaderBar() {
  const navigate = useNavigate();
  return (
    <AppBar
      position="static"
      sx={{ background: "linear-gradient(90deg, #1A4D91 0%, #2D84F7 100%)" }}
    >
      <Toolbar>
        {/* Left side */}
        <img
          src={logo}
          alt="Tripmate"
          className="w-24 h-24"
          onClick={() => navigate("/home")}
          style={{ cursor: "pointer" }}
        />
        {/* Center  */}
        <Box sx={{ flexGrow: 1 }} />
        {/* Right side */}
        <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <IconButton color="inherit">
            <ExploreOutlinedIcon sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton color="inherit">
            <NotificationsNoneOutlinedIcon sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton color="inherit">
            <FavoriteBorderOutlinedIcon sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton color="inherit">
            <MessageCircleMore size={30} style={{ transform: "scaleX(-1)" }} />
          </IconButton>
          <IconButton color="inherit" onClick={() => navigate("/profile")}>
            <AccountCircleOutlinedIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
