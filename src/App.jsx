import "./App.css";
import TravelLoginPage from "./pages/TravelLoginPage";
import TravelRegisterPage from "./pages/TravelRegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthGuard from "./middleware/AuthGuard";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import mainpage from "./pages/mainpage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<TravelLoginPage />} />
          <Route path="login" element={<TravelLoginPage />} />
          <Route path="register" element={<TravelRegisterPage />} />
          <Route path="reset-password" element={<ResetPasswordPage />} />
          <Route
            path="home"
            element={<AuthGuard role="user" Component={mainpage} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
