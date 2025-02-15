import SocialFeed from "../components/SocialFeed";
import HeaderBar from "../components/HeaderBar";
import Footer from "../components/Footer";
import TopLocations from "../components/TopLocations";
import FilterBar from "../components/FilterBar";
export default function NewFeedPage() {
  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <HeaderBar />
      <FilterBar />
      <TopLocations />
      <SocialFeed />
      <Footer />
    </div>
  );
}
