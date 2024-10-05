import React from "react";
import { Plane, Luggage, Sun } from "lucide-react";
import { useState } from "react";
import { useCookies } from "react-cookie";

import { Login } from "../apis/login";
export default function TravelLogin() {
  const [cookies, setCookie] = useCookies(["access_token"]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
    const result = await Login(email, password);
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
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80')",
      }}
    >
      <div className="w-[350px] bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-bold text-center">
            Welcome Back, Traveler!
          </h2>
          <p className="text-center text-gray-600">
            Sign in to plan your next adventure
          </p>
          <div className="flex justify-center space-x-4 text-blue-600">
            <Plane size={24} />
            <Luggage size={24} />
            <Sun size={24} />
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="m@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign In
            </button>
          </form>
          <div className="text-center">
            <p className="text-sm">
              Don't have an account?
              <a
                href="register"
                className="text-sm text-blue-600 hover:underline pl-2"
              >
                Sign up
              </a>
            </p>
          </div>
          <div className="text-center">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
