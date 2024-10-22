import "./App.css";
import TravelLoginPage from "./pages/TravelLoginPage";
import TravelRegisterPage from "./pages/TravelRegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthGuard from "./middleware/AuthGuard";
import ResetPasswordPage from "./pages/ResetPasswordPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<TravelLoginPage />} />
          <Route path="login" element={<TravelLoginPage />} />
          <Route
            path="register"
            element={<AuthGuard Component={TravelRegisterPage} />}
          />
          <Route path="reset-password" element={<ResetPasswordPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
