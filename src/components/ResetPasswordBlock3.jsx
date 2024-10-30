import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (confirmPasswordError) {
      return;
    }
    console.log("New password set:", password);
    // Here you would typically send the new password to your server
    alert("Password reset would be implemented here.");
  };

  const togglePasswordVisibility = (field) => {
    if (field === "password") {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-start mb-[50px]">
          <h2 className="mt-6 text-4xl font-extrabold text-gray-900">
            Reset Password
          </h2>
          <p className="mt-2 text-xl text-gray-600">
            Enter your New Password to access your account
          </p>
        </div>
        <form className="mt-8 " onSubmit={handleSubmit}>
          <div className="space-y-6 mb-[60px]">
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
            <TextField
              error={confirmPasswordError}
              helperText={confirmPasswordError ? "Passwords do not match" : ""}
              label="Confirm Password"
              variant="standard"
              type={showConfirmPassword ? "text" : "password"}
              fullWidth
              margin="normal"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setConfirmPasswordError(password !== e.target.value);
              }}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() =>
                          togglePasswordVisibility("confirmPassword")
                        }
                        edge="end"
                      >
                        {showConfirmPassword ? <EyeOff /> : <Eye />}
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
            Reset Password
          </Button>
        </form>
      </div>
    </div>
  );
}
