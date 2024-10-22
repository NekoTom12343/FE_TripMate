import React, { useState } from "react";
import { Plane, Luggage, Sun, ArrowLeft } from "lucide-react";

export default function ResetPasswordBlock2({ setStep }) {
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

  return (
    <div className="w-[350px] bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
      <div className="p-6 space-y-4">
        <h2 className="text-2xl font-bold text-center">Confirm Your OTP</h2>
        <p className="text-center text-gray-600">
          Enter the code we sent to continue your journey!
        </p>
        <div className="flex justify-center space-x-4 text-blue-600">
          <Plane size={24} />
          <Luggage size={24} />
          <Sun size={24} />
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex justify-between space-x-2">
            {otp.map((data, index) => {
              return (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  className="w-10 h-12 text-center text-xl font-bold border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              );
            })}
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Verify OTP
          </button>
        </form>
        <div className="text-center">
          <a
            href="#"
            className="text-sm text-blue-600 hover:underline flex items-center justify-center"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to Login
          </a>
        </div>
        <div className="text-center text-sm text-gray-600">
          <p>Didn't receive the code?</p>
          <a href="#" className="text-blue-600 hover:underline">
            Resend OTP
          </a>
        </div>
      </div>
    </div>
  );
}
