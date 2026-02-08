import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../container/Login";
// import StudentDashBoard from "./StudentDashBoard";

export default function StudentLoginForm() {
  const [studentEmailId, setStudentEmailId] = useState("");
  const [studentPassword, setStudentPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const loggedIn = Login("Student", studentEmailId, studentPassword);
    if (loggedIn) {
      navigate("/StudentDashBoard");
    } else {
      alert("Invalid email or password");      
    }
    console.log("login");
  };

  const validate = () => {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;
    const passregex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
      
    let valid = true;

    if (studentEmailId.trim() === "") {
      setEmailError("Email required");
      valid = false;
    } else if (!regexEmail.test(studentEmailId)) {
      setEmailError("Enter valid Email");
      valid = false;
    } else {
      setEmailError("");
    }
    if (studentPassword.trim() === "") {
      setPasswordError("Password required");
      valid = false;
    } else if (!passregex.test(studentPassword)) {
      setPasswordError("Enter valid password");
      valid = false;
    } else {
      setPasswordError("");
    }
    return valid;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter Email Id</label>
        <input
          type="text"
          value={studentEmailId}
          onChange={(e) => setStudentEmailId(e.target.value)}
        />
        <span>{emailError}</span>
        <br />
        <label>Enter Password</label>
        <input
          type="password"
          value={studentPassword}
          onChange={(e) => setStudentPassword(e.target.value)}
        />
        <span>{passwordError}</span>
        <br />
        <button type="submit"> Login </button>
      </form>
      <button onClick={() => navigate("/StudentRegister")}>
        {" "}
        New Student Register
      </button>
      <button onClick={() => navigate(-1)}> Back</button>
    </div>
  );
}
