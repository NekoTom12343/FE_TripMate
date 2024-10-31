import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";

export default function HomePageBanner() {
  return (
    <div className="flex">
      <img src={banner1} alt="banner1" className="w-1/3  object-cover" />
      <img src={banner2} alt="banner2" className="w-1/3  object-cover" />
      <img src={banner3} alt="banner3" className="w-1/3  object-cover" />
    </div>
  );
}
