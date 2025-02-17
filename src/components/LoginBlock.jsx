import React from "react";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { Login } from "../apis/login";
import GoogleIcon from "../assets/google.svg";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { useNavigate } from "react-router-dom";
import { FormControl, FormControlLabel } from "@mui/material";

export default function LoginBlock() {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["access_token"]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = (field) => {
    if (field === "password") {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };
  const handleSubmit = async (e) => {
    navigate("/home");
    e.preventDefault();
    console.log("Login attempt:", { username, password });
    const result = await Login(username, password);
    if (result.status === 200) {
      const success = result.data;
      let expires = new Date();
      expires.setTime(expires.getTime() + 7 * 24 * 60 * 60 * 1000);

      setCookie("access_token", success.token, {
        path: "/",
        expires: expires,
        maxAge: 7 * 24 * 60 * 60,
        secure: true,
        sameSite: "strict",
      });
    }
  };
  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-start">
          <h2 className="mt-6 text-4xl font-extrabold text-gray-900">
            Welcome Back, My Mate
          </h2>
          <p className="mt-2 text-xl text-gray-600">
            Continue with Google or Enter Login Details
          </p>
        </div>
        <form className="mt-8 " onSubmit={handleSubmit}>
          <Button
            variant="outlined"
            size="large"
            sx={{
              height: "55px",
              borderRadius: "45px",
              borderColor: "#5B5B5B",
              color: "#5B5B5B",
              "&:hover": {
                backgroundColor: "#F5F5F5",
                borderColor: "#7A7A7A",
                color: "#7A7A7A",
              },
            }}
            startIcon={
              <img src={GoogleIcon} alt="Google" className="w-6 h-6" />
            }
            fullWidth
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontFamily: "Urbanist",
                textTransform: "none",
              }}
            >
              Continue with Google
            </Typography>
          </Button>
          <div className="flex items-center justify-center mt-[40px]">
            <div className="border-t border-gray-300 flex-grow mr-3" />
            <span className="text-sm text-gray-500">or</span>
            <div className="border-t border-gray-300 flex-grow ml-3" />
          </div>
          <div className="space-y-6 mb-[60px]">
            <TextField
              label="Username"
              variant="standard"
              fullWidth
              margin="normal"
              slotProps={{
                input: { sx: { paddingBottom: "10px", fontSize: "1.5rem" } },
              }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Password"
              variant="standard"
              type={showPassword ? "text" : "password"}
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => togglePasswordVisibility("password")}
                        edge="end"
                      >
                        {showPassword ? <EyeOff /> : <Eye />}
                      </IconButton>
                    </InputAdornment>
                  ),
                  sx: {
                    paddingBottom: "10px",
                    fontSize: "1.5rem",
                  },
                },
              }}
            />
            <div className="flex justify-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    name="Remember me"
                  />
                }
                label="Remember me"
                sx={{
                  color: "#5D5D5D",
                }}
              />
              <a
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/reset-password")}
                className="flex items-center justify-center font-medium text-blue-600 hover:text-blue-500 "
              >
                Forget password
              </a>
            </div>
          </div>
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#4169E1",
              "&:hover": { backgroundColor: "#2D84F7 " },
              height: "55px",
              borderRadius: "45px",
              fontWeight: "bold",
              fontFamily: "Urbanist",
              textTransform: "none",
              fontSize: "18px",
            }}
            fullWidth
          >
            Sign In
          </Button>
        </form>
        <p className="mt-2 text-center text-md text-gray-600 flex items-center justify-center gap-[100px]">
          Don't have an account yet?
          <a
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/register")}
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Create account
          </a>
        </p>
      </div>
    </div>
  );
}
