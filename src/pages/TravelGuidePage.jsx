import Footer from "../components/Footer";
import HeaderBar from "../components/HeaderBar";
import TravelGuideBlog from "../components/TravelGuideBlog";
import TravelGuideBlogCard from "../components/TravelGuideBlogCard";
import { useParams } from "react-router-dom";

export default function TravelGuidePage() {
  const { guideId } = useParams();
  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <HeaderBar />
      <TravelGuideBlog guideId={guideId} />
      <TravelGuideBlogCard />
      <Footer />
    </div>
  );
}
