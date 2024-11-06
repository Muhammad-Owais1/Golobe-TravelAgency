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
import { useContext } from "react";
import { AuthContext } from "./context/context";
import FlightsListPage from "./pages/FlightsListPage";
import FlightDetailsPage from "./pages/FlightDetailsPage";
import FlightBookingPage from "./pages/FlightBookingPage";
import StaysListPage from "./pages/StaysListPage";
import StayDetailsPage from "./pages/StayDetailsPage";
import StayBookingPage from "./pages/StayBookingPage";

function MiniApp() {
  const location = useLocation();

  const isAuthPage = location.pathname.startsWith("/auth");

  const { user } = useContext(AuthContext);

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
            <Route path="/stays" element={<StayPage />} />
            <Route path="/stays/stays_list" element={<StaysListPage />} />
            <Route path="/stays/stay/:id" element={<StayDetailsPage />} />
            <Route
              path="/stays/stay/booking/:id"
              element={<StayBookingPage />}
            />
            <Route path="/flights" element={<FlightPage />} />
            <Route path="/flights/flights_list" element={<FlightsListPage />} />
            <Route path="/flights/flight/:id" element={<FlightDetailsPage />} />
            <Route
              path="/flights/flight/booking/:id"
              element={<FlightBookingPage />}
            />
            {user && <Route path="/account" element={<AccountPage />} />}
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
