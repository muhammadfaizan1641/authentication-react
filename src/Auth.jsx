import { Routes, Route, useNavigate } from "react-router-dom";
import SignIn from "./Signin";
import SignUp from "./Signup";

export default function AuthPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#1B84FF] flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full">
        <Routes>
          <Route
            path="signin"
            element={<SignIn onSwitch={() => navigate("/auth/signup")} />}
          />
          <Route
            path="signup"
            element={<SignUp onSwitch={() => navigate("/auth/signin")} />}
          />
        </Routes>
      </div>
    </div>
  );
}
