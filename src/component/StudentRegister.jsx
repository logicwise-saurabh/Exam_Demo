<<<<<<< HEAD
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
=======
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function StudentRegister() {
    const [studentName, setStudentName] = useState("")
    const [studentEmailId, setStudentEmailId] = useState("")
    const [studentPassword, setStudentPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [studentError, setStudentError] = useState("")

    // const [students, setStudents] = useState([])

    const handelSubmit = (e) => {
        e.preventDefault()
        let storedStudents = JSON.parse(localStorage.getItem("Student")) || [];
        // console.log(storedStudents)
        const newStudensts = {
            name: studentName,
            email: studentEmailId,
            password: studentPassword
        }
        storedStudents.push(newStudensts)
        console.log(storedStudents)
        localStorage.setItem("Student", JSON.stringify(storedStudents))
    }
    const navigate = useNavigate()


    const validate = () => {
        // let e = {};
        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;
        const userNamepatern = /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/;
        const passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

        if (studentName.trim() === "") {
            setStudentError("Name is required")
        } else if (!userNamepatern.test(studentName)) {
            setStudentError("Enter valid name")
        }


        if (studentEmailId.trim()) {
            setEmailError("Email  required");
        } else if (!regexEmail.test(studentEmailId)) {
            setEmailError("Enter valid Email");
        }

        if (studentPassword.trim()) {
            setPasswordError("Password required")

        }
        else if (!passregex.test(studentPassword))
            setPasswordError("Enter Valid password")
    }


    return (
        <div>
            <form action="" onSubmit={handelSubmit} method='post'>
                <label htmlFor="">Enter Name</label>
                <input type="text"
                    value={studentName}
                    onChange={(e) => { setStudentName(e.target.value) }}
                />
                <br />
                <label htmlFor="">Enter Email Id</label>
                <input type="text"
                    value={studentEmailId}
                    onChange={(e) => { setStudentEmailId(e.target.value) }} />
                <span >{emailError}</span>
                <br />

                <label htmlFor="">Enter Password</label>
                <input type="text"
                    value={studentPassword}
                    onChange={(e) => { setStudentPassword(e.target.value) }} />
                <span>{passwordError}</span>
                <br />
                {/* <Link to={'/StudentRegister'}>Register</Link> */}

                <button type='Submit' onClick={() => { navigate('/StudentLoginCard') }}> Register </button>

            </form>
        </div>
    )
>>>>>>> 5d6a138c7efb1c3a8c0a87aca3e8bc76e9ef5c2b
}
