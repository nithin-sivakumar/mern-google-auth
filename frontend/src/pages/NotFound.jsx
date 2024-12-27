import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>404 | Page Not Found</h2>
      <button onClick={() => navigate("/login")}>Back to Login</button>
    </div>
  );
};

export default NotFound;
