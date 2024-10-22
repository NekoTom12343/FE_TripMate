import { Plane, Luggage, Sun, ArrowLeft } from "lucide-react";

export default function ResetPasswordBlock1({ setStep }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log("Password reset requested for:", email);
    setStep(2);
    // Here you would typically send a request to your server to initiate the password reset process
    alert("Password reset email would be sent here.");
  };
  return (
    <div className="w-[350px] bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
      <div className="p-6 space-y-4">
        <h2 className="text-2xl font-bold text-center">
          Forgot Your Password?
        </h2>
        <p className="text-center text-gray-600">
          Don't worry, we'll help you get back to your adventures!
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
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Reset Password
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
      </div>
    </div>
  );
}
