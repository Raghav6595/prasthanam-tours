import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

function LoginModal({ onClose }) {
  const { login } = useAuth();

  const [isSignup, setIsSignup] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const BASE_URL = "https://prasthanam-tour.onrender.com";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await axios.post(
        `${BASE_URL}/auth/login`,
        {
          email: formData.email,
          password: formData.password,
        }
      );

      login(response.data);

      onClose();
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError(
        "Password must be at least 6 characters"
      );
      return;
    }

    setLoading(true);

    try {
      await axios.post(
        `${BASE_URL}/auth/register`,
        {
          name: formData.name,
          email: formData.email,
          mobileNumber: formData.mobileNumber,
          password: formData.password,
        }
      );

      setSuccess(
        "Account created successfully. Please login."
      );

      setIsSignup(false);

      setFormData((prev) => ({
        ...prev,
        password: "",
        confirmPassword: "",
      }));
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to create account"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">

      <div className="w-full max-w-md rounded-2xl bg-white dark:bg-gray-800 shadow-xl p-6">

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
          {isSignup
            ? "Create Account"
            : "Welcome Back"}
        </h2>

        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          {isSignup
            ? "Create your Prasthanam Tours account"
            : "Login to continue"}
        </p>

        <form
          onSubmit={
            isSignup
              ? handleSignup
              : handleLogin
          }
        >

          {isSignup && (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
                  Mobile Number
                </label>

                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                  placeholder="Enter mobile number"
                  className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                />
              </div>
            </>
          )}

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter password"
              className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
          </div>

          {isSignup && (
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="Confirm password"
                className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              />
            </div>
          )}

          {error && (
            <p className="mb-4 text-sm text-red-500">
              {error}
            </p>
          )}

          {success && (
            <p className="mb-4 text-sm text-green-600">
              {success}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-orange-500
              hover:bg-orange-600
              disabled:opacity-50
              text-white
              font-medium
              py-2.5
              rounded-lg
              transition-colors
            "
          >
            {loading
              ? "Please wait..."
              : isSignup
              ? "Create Account"
              : "Login"}
          </button>

        </form>

        <div className="text-center mt-5 text-sm text-gray-600 dark:text-gray-300">

          {isSignup ? (
            <>
              Already have an account?{" "}

              <button
                type="button"
                onClick={() => {
                  setError("");
                  setSuccess("");
                  setIsSignup(false);
                }}
                className="text-orange-500 hover:text-orange-600 font-medium"
              >
                Login here
              </button>
            </>
          ) : (
            <>
              Don't have an account?{" "}

              <button
                type="button"
                onClick={() => {
                  setError("");
                  setSuccess("");
                  setIsSignup(true);
                }}
                className="text-orange-500 hover:text-orange-600 font-medium"
              >
                Sign up here
              </button>
            </>
          )}

        </div>

        <button
          type="button"
          onClick={onClose}
          className="
            w-full
            mt-3
            text-sm
            text-gray-500
            hover:text-gray-800
            dark:hover:text-white
          "
        >
          Cancel
        </button>

      </div>
    </div>
  );
}

export default LoginModal;