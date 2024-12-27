import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RefreshHandler = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const data = localStorage.getItem("user-info");
    const token = JSON.parse(data);

    if (token) {
      setIsAuthenticated(true);
      if (location.pathname === "/" || location.pathname === "/login") {
        navigate("/dashboard");
      }
    }
  }, [location, navigate, setIsAuthenticated]);

  return null;
};

export default RefreshHandler;
