import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "../api/user";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  const navigate = useNavigate();

  const responseGoogle = async (authResult) => {
    try {
      console.log(authResult);
      if (authResult["code"]) {
        const result = await googleAuth(authResult["code"]);

        const { email, name, image, lastLogin } = result.data.payload.user;
        const token = result.data.payload.token;

        const obj = {
          email,
          name,
          image,
          token,
          lastLogin,
        };

        localStorage.setItem("user-info", JSON.stringify(obj));
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(`Error while requesting: ${error}`);
    }
  };

  const googleLoginHandler = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
  });

  return (
    <div className="h-screen w-screen bg-black text-white flex items-center justify-center">
      <button
        className="flex items-center justify-center gap-2 text-xl rounded-full border-white border-2 px-10 py-2 hover:bg-stone-950 hover:scale-105 active:scale-95 transition duration-200"
        onClick={googleLoginHandler}
      >
        <FcGoogle size={24} />
        <span className="font-semibold">Sign in with Google</span>
      </button>
    </div>
  );
};

export default GoogleLogin;
