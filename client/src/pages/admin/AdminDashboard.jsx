import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ManageCourses from './ManageCourses'
import Sidebar from './SideBar'
import Dashboard from './Dashboard'
const AdminDashboard = () => {

    useEffect(() => {
    }, [])
    
  return (
    <div className=' flex'>
    <Sidebar/>
    {/* Main Content */}
    <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Welcome to Admin Panel</h1>
       <Dashboard/>
      </div>
    <div>
    </div>
    </div>
  )
}

export default AdminDashboard