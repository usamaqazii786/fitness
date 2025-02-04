import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dumbbell } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import AOS from "aos";
import "aos/dist/aos.css";
import VideoHero from "../asset/img/exercises.jpg";

export default function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ offset: 200, duration: 900, easing: "ease-in-sine", delay: 100 });
  }, []);

  // Form validation & submission using Formik
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      image: "", // Added missing image field
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required").min(3, "At least 3 characters"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().required("Password is required").min(6, "At least 6 characters"),
      image: Yup.string().required("Profile image URL is required"), // Ensured image is validated
    }),
    onSubmit: async (values) => {
      setLoading(true);
      setError("");
      try {
        const result = await fetch("http://localhost:5001/api/auth/register", {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const response = await result.json();
        if (response.ok, response.auth) {
          localStorage.setItem("users", JSON.stringify(response.user));
          localStorage.setItem("token", response.auth);
          navigate("/");
        } else {
          const errorData = await result.json();
          setError(errorData.message || "Registration failed. Try again.");
        }
      } catch (err) {
        console.error("Frontend Error:", err);
        setError("An error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="landing-page">
      <div className="flex items-center justify-center h-screen px-4 py-12 bg-gray-100 sm:px-6 lg:px-8 landing-header">
        <img src={VideoHero} alt="Hero" id="landing-video" />
        <div className="w-full max-w-md p-5 space-y-8 bg-white rounded shadow landing-content" data-aos="flip-right">
          <div>
            <div className="flex justify-center" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="9000">
              <Dumbbell className="w-12 h-12 text-indigo-600" />
            </div>
            <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Create your account</h2>
          </div>

          {error && (
            <div className="relative px-4 py-3 mt-4 text-red-700 bg-red-100 border border-red-400 rounded" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
            <div className="-space-y-px rounded-md shadow-sm">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Full Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="mt-1 text-sm text-red-600">{formik.errors.name}</p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Email address"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="mt-1 text-sm text-red-600">{formik.errors.email}</p>
                )}
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password && (
                  <p className="mt-1 text-sm text-red-600">{formik.errors.password}</p>
                )}
              </div>

              {/* Image Input */}
              <div>
                <label htmlFor="image" className="sr-only">
                  Profile Image URL
                </label>
                <input
                  id="image"
                  name="image"
                  type="file"
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Profile Image URL"
                  value={formik.values.image}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.image && formik.errors.image && (
                  <p className="mt-1 text-sm text-red-600">{formik.errors.image}</p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className={`relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white ${
                  loading ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-600"
                } border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </div>

            <div className="text-sm text-center">
              <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                Already have an account? Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
