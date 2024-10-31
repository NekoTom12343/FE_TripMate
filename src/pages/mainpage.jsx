import FilterBar from "../components/FilterBar";
import HeaderBar from "../components/HeaderBar";
import HomePageBanner from "../components/HomePageBanner";

export default function Mainpage() {
  return (
    <div>
      <HeaderBar />
      <HomePageBanner />
      <FilterBar />
    </div>
  );
}
