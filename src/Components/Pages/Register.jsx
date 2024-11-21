import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../Firebase/firebase.int";

const Register = () => {
  const { createUser, setUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  // Password validation logic
  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isValidLength = password.length >= 6;

    if (!hasUpperCase)
      return "Password must include at least one uppercase letter.";
    if (!hasLowerCase)
      return "Password must include at least one lowercase letter.";
    if (!hasSpecialCharacter)
      return "Password must include at least one special character.";
    if (!isValidLength) return "Password must be at least 6 characters long.";
    return null;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    // Validate the password
    const validationError = validatePassword(password);
    if (validationError) {
      setError({ password: validationError });
      setSuccess(false);
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);

        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setSuccess(true);
            setError({});
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => setError({ global: error.message }));
  };

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      setUser(user);
      navigate("/");
    } catch (error) {
      setError({ global: error.message });
    }
  };

  return (
    <div className="min-h-screen hero bg-base-200 my-7 flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="photo-url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            {error.password && (
              <p className="text-red-500 text-sm mt-1">{error.password}</p>
            )}
            
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>
        {error.global && (
          <p className="text-red-500 text-center mt-4">{error.global}</p>
        )}
        {success && (
          <p className="text-green-500 text-center mt-4">
            Registration successful!
          </p>
        )}
        <p className="text-center font-semibold">
          Don't Have An Account? Please{" "}
          <Link className="text-red-500" to="/auth/login">
            Login
          </Link>
        </p>
        <button
          onClick={handleGoogleSignup}
          className="btn btn-active w-1/2 mx-auto my-6"
        >
          <FaGoogle />
          SignUp with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
