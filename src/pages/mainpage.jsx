import FilterBar from "../components/FilterBar";
import HeaderBar from "../components/HeaderBar";
import HomePageBanner from "../components/HomePageBanner";
import TopLocations from "../components/TopLocations";
import TravelGuides from "../components/TravelGuides";

export default function Mainpage() {
  return (
    <div>
      <HeaderBar />
      <HomePageBanner />
      <FilterBar />
      <TopLocations />
      <TravelGuides />
    </div>
  );
}
