import { Plane, Luggage, Sun, ArrowLeft } from "lucide-react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function ResetPasswordBlock1({ setStep, email, setEmail }) {
  const [emailError, setEmailError] = useState(false);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailError) {
      return;
    }
    console.log("Password reset requested for:", email);
    setStep(2);
    // Here you would typically send a request to your server to initiate the password reset process
    alert("Password reset email would be sent here.");
  };
  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-start mb-[50px]">
          <h2 className="mt-6 text-4xl font-extrabold text-gray-900">
            Forgot Password?
          </h2>
          <p className="mt-2 text-xl text-gray-600">
            No worries, we will send you reset Instructions
          </p>
        </div>
        <form className="mt-8 " onSubmit={handleSubmit}>
          <div className="space-y-6 mb-[60px]">
            <TextField
              error={emailError}
              helperText={
                emailError ? "Please enter a valid email address" : ""
              }
              type="email"
              value={email}
              onChange={(e) => {
                setEmailError(!emailRegex.test(e.target.value));
                setEmail(e.target.value);
                console.log(emailError);
              }}
              label="Email Address"
              variant="standard"
              fullWidth
              margin="normal"
              slotProps={{
                input: { sx: { paddingBottom: "10px", fontSize: "1.5rem" } },
              }}
            />
          </div>
          <div className="space-y-6">
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
              Send
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                height: "55px",
                borderRadius: "45px",
                fontWeight: "bold",
                fontFamily: "Urbanist",
                textTransform: "none",
                fontSize: "18px",
              }}
              fullWidth
              startIcon={<ArrowLeft size={18} style={{ color: "#4169E1" }} />}
              onClick={() => navigate("/login")}
            >
              Back to Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
