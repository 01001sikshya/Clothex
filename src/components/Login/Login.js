import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import InputControl from "../InputControl/InputControl";

import { auth } from "../../authentication/firebase";

import "./Login.scss";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    console.log("🚀 ~ file: Login.js:20 ~ handleSubmission ~ values:", values?.email)
    if (!values.email || !values.pass) {
      setErrorMsg("Please enter email and password !!");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        console.log("🚀 ~ file: Login.js:31 ~ .then ~ res:", res)
        setSubmitButtonDisabled(false);
        navigate("/");
      }) 
      .catch((err) => {
        console.log("🚀 ~ file: Login.js:36 ~ handleSubmission ~ err:", err)
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  return (
    <div className="login-container">
      <div className="innerBox">
        <h1 className="heading">Login To Clothex. &nbsp;<i className="fa-solid fa-bag-shopping fa-spin " style={{color: "#F94E30"}}></i>
</h1>

        <InputControl 
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Enter email address"
        />
        <InputControl 
          label="Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Enter Password"
        />

        <div className="login-footer">
          <b className="error">{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>
            Login
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;