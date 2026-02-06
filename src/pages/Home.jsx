import React from 'react'

import TeacherLoginCard from '../component/TeacherLoginCard'
import StudentLoginCard from '../component/StudentLoginCard'
import { Route, Routes, BrowserRouter, useNavigate } from 'react-router-dom'

export default function Home() {

    const navigate = useNavigate()
    return (
        <div>

            <Routes>
                <Route path={"/StudentLoginCard"} element={<StudentLoginCard />} />
            </Routes>


            <button onClick={() => navigate("/StudentLoginCard")} >Student Login</button>
            <button onClick={() => navigate("/TeacherLoginCard")} >Teacher Login</button>
            {/* <button onClick={() => navigate(-1)}>Back</button> */}
            {/* <StudentLoginCard />
            <TeacherLoginCard /> */}
        </div>
    )
}
