import { User } from "lucide-react";
import HeaderBar from "../components/HeaderBar";
import UserProfile from "../components/UserProfile";
import Footer from "../components/Footer";

export default function UserProfilePage() {
  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <HeaderBar />
      <UserProfile />
      <Footer />
    </div>
  );
}
