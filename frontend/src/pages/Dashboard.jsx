import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("user-info");
    const userData = JSON.parse(data);
    setUserInfo(userData);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user-info");
    navigate("/login");
  };

  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center flex-col gap-4 text-white">
      <h1 className="text-3xl font-bold">Welcome {userInfo?.name}</h1>
      <h3 className="text-xl">Email: {userInfo?.email}</h3>
      <img
        className="rounded-full border-white border-4 animate-pulse"
        src={userInfo?.image}
        alt="profile"
      />
      <p>Last logged in: {new Date(userInfo?.lastLogin).toLocaleString()}</p>
      <button
        className="border-2 border-red-900 px-8 py-2 rounded-full hover:bg-red-900 hover:scale-105 active:scale-95 transition-all duration-200"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
