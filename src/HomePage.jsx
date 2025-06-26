import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/auth/signin");
    }
  }, [navigate]);

  function handleLogout() {
    localStorage.removeItem("token");
    alert("Logout successfully!")
    navigate("/auth/signin");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-300 via-green-200 to-green-100 flex flex-col items-center justify-center px-4">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="text-xl font-bold text-green-600">Welcome</div>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </nav>

      {/* Main Section */}
      <main className="flex-1 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          🎉 You’ve Logged In Successfully!
        </h1>
        <p className="text-lg text-gray-700 max-w-xl">
          This application uses secure authentication with encrypted passwords and
          JWT tokens to keep your data safe.
        </p>

        <p className="mt-6 text-gray-600 text-md max-w-md">
          Feel free to explore the platform. You’re now inside the protected area of the app.
        </p>
      </main>

      {/* Footer */}
      <footer className="w-full text-center text-gray-500 py-4 border-t mt-8">
        &copy; 2025. All rights reserved.
      </footer>
    </div>
  );
}
