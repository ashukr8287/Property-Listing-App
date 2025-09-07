import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function TitleComponent() {
  let location = useLocation();
  let [title, SetTitle] = useState("PropBot");
  document.title = title;
  useEffect(() => {
    if (location.pathname === "/") {
      SetTitle("PropBot - Home");
    } else if (location.pathname === "/buy") {
      SetTitle("PropBot - Buy");
    } else if (location.pathname === "/login") {
      SetTitle("PropBot - Login");
    } else if (location.pathname === "/signup") {
      SetTitle("PropBot - Signup");
    } else {
      SetTitle("PropBot");
    }
  }, [location]);

  return null;
}

export default TitleComponent;
