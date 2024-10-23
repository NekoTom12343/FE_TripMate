import React from "react";
import ResetPasswordBlock1 from "../components/ResetPasswordBlock1";
import ResetPasswordBlock2 from "../components/ResetPasswordBlock2";
import ResetPasswordBlock3 from "../components/ResetPasswordBlock3";

import { useState } from "react";
export default function ResetPasswordPage() {
  const [step, setStep] = useState(1);
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80')",
      }}
    >
      {step === 1 ? (
        <ResetPasswordBlock1 setStep={setStep} />
      ) : step === 2 ? (
        <ResetPasswordBlock2 setStep={setStep} />
      ) : (
        <ResetPasswordBlock3 />
      )}
    </div>
  );
}
