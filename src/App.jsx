import "./App.css";
import TravelLogin from "./components/TravelLogin";
import TravelRegister from "./components/TravelRegister";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<TravelLogin />} />
          <Route path="login" element={<TravelLogin />} />
          <Route path="register" element={<TravelRegister />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
