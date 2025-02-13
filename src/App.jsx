import "./App.css";
import TravelLoginPage from "./pages/TravelLoginPage";
import TravelRegisterPage from "./pages/TravelRegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthGuard from "./middleware/AuthGuard";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import Mainpage from "./pages/mainpage";
import LocationPage from "./pages/LocationPage";
import TravelGuidePage from "./pages/TravelGuidePage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<TravelLoginPage />} />
          <Route path="login" element={<TravelLoginPage />} />
          <Route path="register" element={<TravelRegisterPage />} />
          <Route path="reset-password" element={<ResetPasswordPage />} />
          {/* <Route
            path="home"
            element={<AuthGuard role="user" Component={mainpage} />}
          /> */}
          <Route path="home" element={<Mainpage />} />
          <Route path="location/:locationId" element={<LocationPage />} />
          <Route path="travelguide/:guideId" element={<TravelGuidePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
