import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import HeroList from "./pages/HeroList";

function App() {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        {/* page par défaut */}
        <Route
          path="/"
          element={token ? <HeroList /> : <Navigate to="/login" />}
        />

        {/* login */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
