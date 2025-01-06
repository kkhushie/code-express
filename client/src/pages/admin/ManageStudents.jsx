import React from 'react'

const ManageStudents = () => {
  return (
    <div>
        <div className="p-6 bg-white rounded-lg shadow">
  <input
    type="text"
    placeholder="Search Students"
    className="bg-gray-100 rounded-lg px-4 py-2 mb-4 w-full"
  />
  <table className="table-auto w-full text-left border-collapse">
    <thead>
      <tr className="bg-gray-200 text-gray-700">
        <th className="px-4 py-2">Student ID</th>
        <th className="px-4 py-2">Name</th>
        <th className="px-4 py-2">Email</th>
        <th className="px-4 py-2">Enrolled Course</th>
        <th className="px-4 py-2">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-t">
        <td className="px-4 py-2">1001</td>
        <td className="px-4 py-2">John Doe</td>
        <td className="px-4 py-2">johndoe@example.com</td>
        <td className="px-4 py-2">React.js</td>
        <td className="px-4 py-2">
          <button className="bg-blue-500 text-white px-3 py-1 rounded">Edit</button>
          <button className="bg-red-500 text-white px-3 py-1 rounded ml-2">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
  )
}

export default ManageStudents