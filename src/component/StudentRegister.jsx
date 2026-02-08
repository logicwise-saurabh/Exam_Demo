import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StudentRegister() {
  const [studentName, setStudentName] = useState("");
  const [studentEmailId, setStudentEmailId] = useState("");
  const [studentPassword, setStudentPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [studentError, setStudentError] = useState("");

  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return; 

    let storedStudents = JSON.parse(localStorage.getItem("Student")) || [];

    const newStudents = {
      name: studentName,
      email: studentEmailId,
      password: studentPassword,
    };

    storedStudents.push(newStudents);
    localStorage.setItem("Student", JSON.stringify(storedStudents));

    navigate("/StudentLoginCard"); 
  };

  const validate = () => {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;
    const userNamepatern = /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/;
    const passregex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

    let valid = true;

    if (studentName.trim() === "") {
      setStudentError("Name is required");
      valid = false;
    } else if (!userNamepatern.test(studentName)) {
      setStudentError("Enter valid name");
      valid = false;
    } else {
      setStudentError("");
    }

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
      <form onSubmit={handelSubmit}>
        <label>Enter Name</label>
        <input
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        <span>{studentError}</span>

        <br />

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

        <button type="submit"> Register </button>
      </form>
    </div>
  );
}
