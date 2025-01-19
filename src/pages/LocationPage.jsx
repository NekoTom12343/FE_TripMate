import { useParams } from "react-router-dom";
import TopLocationBanner from "../components/TopLocationBanner";
import HeaderBar from "../components/HeaderBar";

export default function LocationPage() {
  const { locationId } = useParams();
  return (
    <div>
      <HeaderBar />
      <TopLocationBanner locationId={locationId} />
    </div>
  );
}
