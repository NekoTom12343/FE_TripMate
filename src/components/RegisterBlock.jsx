import { Plane, Luggage, Sun } from "lucide-react";
import { useState } from "react";
import { useCookies } from "react-cookie";

export default function RegisterBlock() {
  const [cookies, setCookie] = useCookies(["access_token"]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
    // Here you would typically send these credentials to your server
    const Register = await Register(email, password, confirmPassword);
  };

  return (
    <div className="w-[350px] bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
      <div className="p-6 space-y-4">
        <h2 className="text-2xl font-bold text-center">Welcome, Traveler!</h2>
        <p className="text-center text-gray-600">
          Sign up to plan your first adventure
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
          <div>
            <label
              htmlFor="ConfirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="ConfirmPassword"
              name="ConfirmPassword"
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center">
          <p className="text-sm">
            Already have an account?
            <a
              href="login"
              className="text-sm text-blue-600 hover:underline pl-2"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
