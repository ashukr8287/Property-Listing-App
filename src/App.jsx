import React from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // ✅ important
import RoutePages from "./routes/RoutePages";
import Navbar from "./Components/CommonLayouts/Navbar";
import Footer from "./Components/CommonLayouts/Footer";
import TitleComponent from "./Components/CommonLayouts/TitleComponent";

function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}

// ✅ Separate component so useLocation works inside BrowserRouter
function MainLayout() {
  const location = useLocation();
  const hideFooterRoutes = ["/login", "/signup"];

  return (
    <>
      <TitleComponent />
      {!hideFooterRoutes.includes(location.pathname) && <Navbar />}
      <RoutePages />
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
      
      {/* ✅ Toastify container must be included only once */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
