import React, { useState } from 'react'
import Login from './Login'
import { useNavigate } from 'react-router-dom'
import StudentRegister from './StudentRegister'

export default function StudentLoginForm() {

    const [studentEmailId, setStudentID] = useState()
    const [studentPassword, setStudentPassword] = useState()
    const navigate = useNavigate()


    const handelSubmit = (e) => {
        e.preventDefault()
        console.log(studentEmailId)
        console.log(studentPassword)
        // localStorage.setItem("Student", JSON.stringify({ studentEmailId, studentPassword }))
        // localStorage.
        if (Login(studentEmailId, studentPassword)) {
            return (<>
                {<p>Your login ID is {studentEmailId} </p>}
            </>)
        }

    }




    return (
        <div>
            <form action="" onSubmit={handelSubmit}>
                <label htmlFor="">Enter Student  Email ID</label>
                <input type="text"
                    value={studentEmailId}
                    onChange={(e) => setStudentID((e.target.value))} />
                <br />

                <label htmlFor="">Enter Password</label>
                <input type="text"
                    value={studentPassword}
                    onChange={(e) => setStudentPassword(e.target.value)} />
                <br />

                <button type='Submit'>Login</button>
                <button onClick={() => navigate('/StudentRegister')}  > New Student Register</button>
                <button onClick={() => navigate(-1)}  > Back</button>

            </form>


        </div>
    )
}
