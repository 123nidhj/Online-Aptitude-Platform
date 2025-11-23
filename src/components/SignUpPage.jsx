import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const validatePassword = (password) => {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return pattern.test(password);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;
    let newErrors = { email: "", password: "" };

    // Email validation
    if (!validateEmail(form.email)) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }

    // Password validation
    if (!validatePassword(form.password)) {
      newErrors.password =
        "Password must be 8+ characters, include uppercase, lowercase, and a number.";
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) return;

    // Save user to localStorage
    localStorage.setItem("user", JSON.stringify(form));

    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg"
            value={form.name}
            onChange={handleChange}
            required
          />

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg"
              value={form.email}
              onChange={handleChange}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-3 border rounded-lg"
              value={form.password}
              onChange={handleChange}
              required
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
