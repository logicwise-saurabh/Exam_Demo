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
}
