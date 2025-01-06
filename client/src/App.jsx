import React from 'react'
import Registration from './pages/Registration'
import HomePage from './pages/Home'
import AdditionalData from './pages/AdditionalData'
import Login from './pages/Login'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './pages/admin/AdminDashboard'
import ManageCourses from './pages/admin/ManageCourses'

const App = () => {
  return (
    <>
     <Router>
      <Routes>
        
        <Route path="/" element={<HomePage/>} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/admin/dashboard" element={<AdminDashboard/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/add" element={<ManageCourses />} />
      </Routes>
    </Router>
    </>
  )
}

export default App