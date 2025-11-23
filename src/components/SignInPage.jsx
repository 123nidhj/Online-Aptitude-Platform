import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignInPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // NEW

  const handleSignIn = async (e) => {
    e.preventDefault();

    setErrorMessage(""); // clear old errors

    if (!email || !password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    // call backend
    try {
      const response = await fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: email, password }),
      });

      const data = await response.text();

      if (!response.ok) {
        setErrorMessage(data); // show backend message
        return;
      }

      // success → navigate
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage("Email not found.Create an account first");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Sign In
        </h1>

        <form onSubmit={handleSignIn} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {errorMessage && (
            <p className="text-red-600 text-sm text-center">{errorMessage}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignInPage;



