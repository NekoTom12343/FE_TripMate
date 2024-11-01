import FilterBar from "../components/FilterBar";
import HeaderBar from "../components/HeaderBar";
import HomePageBanner from "../components/HomePageBanner";
import TopLocations from "../components/TopLocations";

export default function Mainpage() {
  return (
    <div>
      <HeaderBar />
      <HomePageBanner />
      <FilterBar />
      <TopLocations />
    </div>
  );
}
