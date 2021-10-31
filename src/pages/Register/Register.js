import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./Register.css";

const Register = () => {
  const { signInWithGoogle, setUser, setIsLoading, setResponse } = useAuth();
  const history = useHistory();
  const location = useLocation();

  const url = location.state?.from || "/home";

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res.user);
        setIsLoading(true);
        setUser(res.user);
        history.push(url);
      })
      .catch((error) => {
        setResponse(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <div>
      <div className="register container py-5">
        <h4 className="card-title mt-3 text-center">Create Account</h4>
        <p className="text-center">Get started with your free account</p>
        <div className="d-flex justify-content-center">
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-danger btn-twitter"
          >
            {" "}
            <i className="fab fa-google"></i>   Login via Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
