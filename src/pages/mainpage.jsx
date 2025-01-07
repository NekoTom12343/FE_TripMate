import FilterBar from "../components/FilterBar";
import HeaderBar from "../components/HeaderBar";
import HomePageBanner from "../components/HomePageBanner";
import TopLocations from "../components/TopLocations";
import TravelGuides from "../components/TravelGuides";
import { useRef } from "react";

export default function Mainpage() {
  const filterRef = useRef(null);
  const topLocationRef = useRef(null);
  const travelGuideRef = useRef(null);
  return (
    <div>
      <HeaderBar />
      <HomePageBanner
        targetRefs={{ filterRef, topLocationRef, travelGuideRef }}
      />
      <FilterBar filterRef={filterRef} />
      <TopLocations topLocationRef={topLocationRef} />
      <TravelGuides travelGuideRef={travelGuideRef} />
    </div>
  );
}
