import React, { useState } from "react";
import Button from "@mui/material/Button";
export default function ResetPasswordBlock2({ setStep, email }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    const newOtp = [...otp];
    newOtp[index] = element.value;

    setOtp(newOtp);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    console.log("OTP submitted:", enteredOtp);
    // Here you would typically send this OTP to your server for verification
    setStep(3);
  };
  const resendCode = () => {
    alert("Code has been resent to " + email);
  };
  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-start mb-[50px]">
          <h2 className="mt-6 text-4xl font-extrabold text-gray-900">
            Enter Verification Code
          </h2>
          <p className="mt-2 text-xl text-gray-600">
            We have just sent a verification code to {email}
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="flex justify-between space-x-2">
            {otp.map((data, index) => {
              return (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  className="w-[3.5rem] h-[4rem] text-center text-xl font-bold border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              );
            })}
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
              Verify
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
              onClick={resendCode}
            >
              Resend Code
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
