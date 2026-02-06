import './App.css'
import StudentLoginCard from './component/StudentLoginCard'
import Student from './component/StudentLoginForm'
import TeacherLoginCard from './component/TeacherLoginCard'
import Home from './pages/Home'
import { Link, NavLink } from 'react-router-dom'
import { Route, Routes, Router, BrowserRouter } from 'react-router-dom'
import ExamForm from './component/ExamForm'
import StudentRegister from './component/StudentRegister'
import { useState } from 'react'

function App() {
  const [login, setLogin] = useState(true)



  return (
    <>

      <nav >
        <Link to={'/'}>Home</Link>
        {/* <Link to={'/StudentLoginCard'}>Student Login</Link>
        <Link to={'/TeacherLoginCard'}>Teacher Login</Link> */}
        {/* <Link to={'/StudentRegister'}>Register</Link> */}

        {/* <Link to={"/TeacherLoginCard/CreateExam"}>Crete Exam Form</Link> */}
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/TeacherLoginCard' element={<TeacherLoginCard />} >
          <Route path='/TeacherLoginCard/CreateExam' element={<ExamForm />}>
          </Route>
        </Route>
        <Route path='/StudentLoginCard' element={<StudentLoginCard />} />
        <Route path='/StudentRegister' element={<StudentRegister />} />

      </Routes>

      {/* <Home /> */}
      {/* <StudentRegister /> */}



    </>
  )
}

export default App
