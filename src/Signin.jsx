import { useState } from "react";

export default function SignIn({ onSwitch }) {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://signup-signin-backend-goqv.onrender.com/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Sign in failed");
      }

    
      localStorage.setItem("token", data.token);

      alert(data.message); 

    
      window.location.href = "/home";
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Sign In</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#1B84FF] hover:bg-[#54A3FF] text-white font-semibold py-2 rounded-lg transition duration-200"
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>

      <p className="text-center mt-6 text-gray-600">
        Don't have an account?{" "}
        <button onClick={onSwitch} className="text-[#1B84FF] font-medium hover:underline">
          Sign Up
        </button>
      </p>
    </div>
  );
}
