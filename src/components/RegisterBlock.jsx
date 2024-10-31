import { useState } from "react";
import { useCookies } from "react-cookie";
import GoogleIcon from "../assets/google.svg";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { InputAdornment } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Eye, EyeOff } from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function RegisterBlock() {
  const [cookies, setCookie] = useCookies(["access_token"]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
    e.preventDefault();
    console.log("Login attempt:", { email, password });
    // Here you would typically send these credentials to your server
    const Register = await Register(email, password, confirmPassword);
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
              label="Full Name"
              variant="standard"
              fullWidth
              margin="normal"
              slotProps={{
                input: { sx: { paddingBottom: "10px", fontSize: "1.5rem" } },
              }}
              // value={username}
              // onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Full Name"
              variant="standard"
              fullWidth
              margin="normal"
              slotProps={{
                input: { sx: { paddingBottom: "10px", fontSize: "1.5rem" } },
              }}
              // value={username}
              // onChange={(e) => setUsername(e.target.value)}
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
