import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

import {
  getAuth,
  // signInWithPopup,
  // GoogleAuthProvider,
  // signOut,
  // createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  // const { user, logOut } = useAuth;
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/";

  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
      console.log(result);
    });
  };

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [isLogin, setIsLogin] = useState(false);

  const auth = getAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    // console.log("register");
    // console.log(email, password);

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    processLogin(email, password);
  };

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
        setError("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setError(errorMessage);
      });
  };

  const handleEmailChange = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);
  };

  return (
    <div className="login-form">
      <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email: </label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            onBlur={handleEmailChange}
          />
          <br /> <br />
          <label htmlFor="password">Password:</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            onBlur={handlePasswordChange}
          />
          <br /> <br />
          <div>{error}</div>
          <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
        <p>
          New Here? <Link to="/register">Create An Account</Link>
        </p>
        <div>-------or----------</div>
        <button className="btn btn-primary" onClick={handleGoogleLogin}>
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
