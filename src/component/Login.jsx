<<<<<<< HEAD
import React from 'react';

export default function Login({ emailId, passWord }) {
  const users = JSON.parse(localStorage.getItem("Student")) || [];

  const isValidUser = users.some((u) => {
    return u.email === emailId && u.password === passWord;
  });

  return (
    <div>
      <p>Your Email is {emailId}</p>
      {isValidUser ? <p>Login successful!</p> : <p>Invalid credentials</p>}
    </div>
  );
=======
import React from 'react'

export default function Login({ emailId, passWord }) {

  const users = JSON.prase(localStorage.get("Student"))
  users.map((u) => {
    if ((u.email === emailId) && (u.password === passWord)) {
      return true
    }
    else { return false }
  })

  return (
    <div>
      <p>  Your are Email is {emailId}</p>
    </div>
  )
>>>>>>> 5d6a138c7efb1c3a8c0a87aca3e8bc76e9ef5c2b
}
