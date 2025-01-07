import { Typography } from "@mui/material";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function HomePageBanner({ targetRefs }) {
  const handleClick = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex">
      <div className="w-1/3 relative group">
        <img
          src={banner1}
          alt="banner1"
          className="object-cover w-full h-full"
        />
        <div
          className="absolute inset-0 opacity-0 cursor-pointer group-hover:opacity-100 bg-gradient-to-b from-[rgba(45,132,247,0)] via-[rgba(45,132,247,0)] to-[rgba(45,132,247,100)] transition-opacity duration-500 ease-in-out"
          onClick={() => handleClick(targetRefs.filterRef)}
        >
          <div className=" w-10/12 absolute flex items-center gap-3 bottom-10 ml-10 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 text-white font-bold ">
            <Typography
              sx={{
                fontSize: "2rem",
                fontWeight: "bold",
                fontFamily: "Urbanist",
                textTransform: "none",
              }}
              className="w-2/3"
            >
              Looking for best TRIP MATEs
            </Typography>
            <div className="flex items-center justify-center w-1/3">
              <ArrowForwardIcon
                sx={{
                  width: "50px",
                  height: "50px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3 relative group">
        <img
          src={banner2}
          alt="banner2"
          className="object-cover w-full h-full"
        />
        <div
          className="absolute inset-0 opacity-0 cursor-pointer group-hover:opacity-100 bg-gradient-to-b from-[rgba(45,132,247,0)] via-[rgba(45,132,247,0)] to-[rgba(45,132,247,100)] transition-opacity duration-500 ease-in-out"
          onClick={() => handleClick(targetRefs.topLocationRef)}
        >
          <div className=" w-10/12 absolute flex items-center gap-3 bottom-10 ml-10 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 text-white font-bold ">
            <Typography
              sx={{
                fontSize: "2rem",
                fontWeight: "bold",
                fontFamily: "Urbanist",
                textTransform: "none",
              }}
              className="w-2/3"
            >
              Interesting destinations
            </Typography>
            <div className="flex items-center justify-center w-1/3">
              <ArrowForwardIcon
                sx={{
                  width: "50px",
                  height: "50px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3 relative group">
        <img
          src={banner3}
          alt="banner3"
          className="object-cover w-full h-full"
        />
        <div
          className="absolute inset-0 opacity-0 cursor-pointer group-hover:opacity-100 bg-gradient-to-b from-[rgba(45,132,247,0)] via-[rgba(45,132,247,0)] to-[rgba(45,132,247,100)] transition-opacity duration-500 ease-in-out"
          onClick={() => handleClick(targetRefs.travelGuideRef)}
        >
          <div className=" w-10/12 absolute flex items-center gap-3 bottom-10 ml-10 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 text-white font-bold ">
            <Typography
              sx={{
                fontSize: "2rem",
                fontWeight: "bold",
                fontFamily: "Urbanist",
                textTransform: "none",
              }}
              className="w-2/3"
            >
              Travel Guides
            </Typography>
            <div className="flex items-center justify-center w-1/3">
              <ArrowForwardIcon
                sx={{
                  width: "50px",
                  height: "50px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
