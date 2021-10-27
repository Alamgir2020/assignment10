import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  getAuth,
  //   signInWithPopup,
  //   GoogleAuthProvider,
  //   signOut,
  createUserWithEmailAndPassword,
  //   signInWithEmailAndPassword,
} from "firebase/auth";

const Register = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [isLogin, setIsLogin] = useState(false);

  const auth = getAuth();

  const handleRegistration = (e) => {
    e.preventDefault();

    // console.log("register");
    // console.log(email, password);

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    registerNewUser(email, password);
  };

  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in

        // console.log(result);
        console.log("here");

        const user = result.user;

        console.log(user);
        setError("");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
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
        <h2>Register: Create Account</h2>
        <form onSubmit={handleRegistration}>
          <input
            type="email"
            name="email"
            id=""
            placeholder="Your Email"
            onBlur={handleEmailChange}
          />
          <br />
          <input
            type="password"
            name="password"
            id=""
            placeholder="Your Password"
            onBlur={handlePasswordChange}
          />

          <div>{error}</div>
          <input type="submit" value="Submit" />
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
        {/* <div>----------or-------------</div>
        <button className="btn-regular">Google Sign In</button> */}
      </div>
    </div>
  );
};

export default Register;
