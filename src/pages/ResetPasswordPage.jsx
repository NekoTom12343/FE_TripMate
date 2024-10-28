import React from "react";
import ResetPasswordBlock1 from "../components/ResetPasswordBlock1";
import ResetPasswordBlock2 from "../components/ResetPasswordBlock2";
import ResetPasswordBlock3 from "../components/ResetPasswordBlock3";
import Logo from "../assets/logo.svg";
import bg from "../assets/image1.png";
import { useState } from "react";
export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);
  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:block lg:w-1/2 relative">
        <div
          className="h-1/5 bg-blue-500 relative z-10"
          style={{
            background:
              "linear-gradient(180deg, #2D84F7 0%, rgba(45, 132, 247, 0.00) 100%)",
          }}
        >
          <img
            src={Logo}
            alt="Tripmate"
            className="absolute w-200 h-200 mt-[40px] ml-[60px]"
          />
        </div>
        <img
          src={bg}
          alt="Beach scene"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      </div>
      {step === 1 ? (
        <ResetPasswordBlock1
          setStep={setStep}
          email={email}
          setEmail={setEmail}
        />
      ) : step === 2 ? (
        <ResetPasswordBlock2 setStep={setStep} email={email} />
      ) : (
        <ResetPasswordBlock3 />
      )}
    </div>
  );
}
