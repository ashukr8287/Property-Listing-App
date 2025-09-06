import React from "react";

import RoutePages from "./routes/RoutePages";
import { BrowserRouter, useLocation } from "react-router-dom";
import Navbar from "./Components/CommonLayouts/Navbar";
import Footer from "./Components/CommonLayouts/Footer";

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
      <Navbar />
      <RoutePages />
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;
