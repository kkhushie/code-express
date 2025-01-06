import React, { useState } from "react";
import { FaBars, FaUserGraduate, FaChalkboardTeacher, FaBook, FaSignOutAlt, FaCalendarAlt, FaHome } from "react-icons/fa";
import ManageStudents from "./ManageStudents";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-16"
        } bg-gray-800 text-white h-screen transition-width duration-300`}
      >
        {/* Toggle Button */}
        <div className="flex items-center justify-between px-4 py-4">
          <span className={`${isOpen ? "block" : "hidden"} font-bold text-lg`}>
          CodeXpress
          </span>
          <FaBars
            onClick={toggleSidebar}
            className="cursor-pointer text-xl"
          />
        </div>

        {/* Menu Items */}
        <nav className="mt-4">
          <ul>
            <li className="group">
              <a
                href="#"
                className="flex items-center px-4 py-3 hover:bg-gray-700 transition"
              >
                <FaHome className="text-xl mr-4" />
                <span className={`${isOpen ? "block" : "hidden"}`}>Dashboard</span>
              </a>
            </li>
            <li className="group">
              <a
                href="#"
                className="flex items-center px-4 py-3 hover:bg-gray-700 transition"
              >
                <FaUserGraduate className="text-xl mr-4" />
                <span className={`${isOpen ? "block" : "hidden"}`}>Manage Students</span>
              </a>
            </li>
            <li className="group">
              <a
                href="#"
                className="flex items-center px-4 py-3 hover:bg-gray-700 transition"
              >
                <FaChalkboardTeacher className="text-xl mr-4" />
                <span className={`${isOpen ? "block" : "hidden"}`}>Manage Faculties</span>
              </a>
            </li>
            <li className="group">
              <a
                href="#"
                className="flex items-center px-4 py-3 hover:bg-gray-700 transition"
              >
                <FaBook className="text-xl mr-4" />
                <span className={`${isOpen ? "block" : "hidden"}`}>Manage Courses</span>
              </a>
            </li>
            <li className="group">
              <a
                href="#"
                className="flex items-center px-4 py-3 hover:bg-gray-700 transition"
              >
                <FaCalendarAlt className="text-xl mr-4" />
                <span className={`${isOpen ? "block" : "hidden"}`}>Leave Applications</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      
    </div>
  );
};

export default Sidebar;
