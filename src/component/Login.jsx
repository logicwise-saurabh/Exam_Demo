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
}
