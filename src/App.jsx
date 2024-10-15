import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import FlightPage from "./pages/FlightPage";
import HomePage from "./pages/HomePage";
import StayPage from "./pages/StayPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AccountPage from "./pages/AccountPage";
import { useState } from "react";
import { auth } from "./firebase/firebase";
import AuthProvider from "./context/AuthContext/AuthProvider";

function MiniApp() {
  const location = useLocation();

  const isAuthPage = location.pathname.startsWith("/auth");

  return (
    <>
      {!isAuthPage && <Navbar />}

      <Routes>
        {isAuthPage ? (
          <>
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/signup" element={<SignupPage />} />
          </>
        ) : (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/flights" element={<FlightPage />} />
            <Route path="/stays" element={<StayPage />} />
            <Route path="/account" element={<AccountPage />} />
          </>
        )}
      </Routes>

      {!isAuthPage && <Footer />}
    </>
  );
}

function App() {
  // const [user, setUser] = useState({});

  return (
    <BrowserRouter>
      <AuthProvider auth={auth}>
        <MiniApp />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
