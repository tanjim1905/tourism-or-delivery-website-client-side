import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";

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
    }).catch((error) => {
        setResponse(error.message)
    }).finally(() => setIsLoading(false));
  };
  return (
    <div>
      <div className="register">
        <h3>Register With Google</h3>
        <button onClick={handleGoogleSignIn} className="btn btn-warning">
          Google
        </button>
      </div>
    </div>
  );
};

export default Register;
