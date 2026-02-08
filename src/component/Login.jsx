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
}
