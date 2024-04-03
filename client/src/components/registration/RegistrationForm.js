"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const RegistrationForm = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [verificationError, setVerificationError] = useState("");
  const router = useRouter();

  const sendOTP = async () => {
    // Send OTP logic here (call your backend which interacts with SMS service)
    // Example: sendOTPToMobileNumber(mobileNumber);
    try {
      // Assuming an API call to send OTP
      const response = await fetch("/api/sendOTP", {
        method: "POST",
        body: JSON.stringify({ mobileNumber }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        setOtpSent(true);
      } else {
        throw new Error("Failed to send OTP");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      setVerificationError("Failed to send OTP. Please try again later.");
    }
  };

  const verifyOTP = async () => {
    // Verify OTP logic here
    // Example: verifyOTPCode(otp);
    try {
      // Assuming an API call to verify OTP
      const response = await fetch("/api/verifyOTP", {
        method: "POST",
        body: JSON.stringify({ mobileNumber, otp }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        // OTP verified successfully, navigate to registration page
        router.push("/registration");
      } else {
        throw new Error("Invalid OTP");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setVerificationError("Invalid OTP. Please try again.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otpSent) {
      verifyOTP();
    } else {
      sendOTP();
    }
  };

  return (
    <div className="min-h-screen">
      <form onSubmit={handleSubmit}>
        <label>
          Mobile Number:
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
          />
        </label>
        {!otpSent && <button type="submit">Send OTP</button>}
        {otpSent && (
          <>
            <label>
              OTP:
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </label>
            <button type="submit">Verify OTP</button>
          </>
        )}
      </form>
      {verificationError && <p>{verificationError}</p>}
    </div>
  );
};

export default RegistrationForm;
