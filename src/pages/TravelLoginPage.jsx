import LoginBlock from "../components/LoginBlock";
import Logo from "../assets/logo.svg";
import bg from "../assets/image1.png";

export default function TravelLogin() {
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
      <LoginBlock />
    </div>
  );
}
// https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80
