import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import Login from "../container/Login";

export default function TeacherLoginForm() {
  const [teacherId, setTeacherID] = useState();
  const [teacherPassword, setTeacherPassword] = useState();
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();    
    // const isLoggedIn = Login("Teacher", teacherId, teacherPassword);
    const isLoggedIn=true;
    if(isLoggedIn){
        navigate("/TeacherDashBoard")
    }
  };

  return (
    <div>
      <form action="" onSubmit={handelSubmit}>
        <label htmlFor="">Enter Teacher Email ID</label>
        <input
          type="text"
          value={teacherId}
          onChange={(e) => setTeacherID(e.target.value)}
        />
        <br />
        <label htmlFor="">Enter Password</label>
        <input
          type="text"
          value={teacherPassword}
          onChange={(e) => setTeacherPassword(e.target.value)}
        />
        <br />
        <button type="Submit">Login</button>{" "}
        <button onClick={() => navigate(-1)}>Back</button>
      </form>
    </div>
  );
}
