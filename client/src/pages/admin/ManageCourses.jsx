import React from 'react'

const ManageCourses = () => {
    return (
        <div>
            <div className="p-6 bg-white rounded-lg shadow">
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Course Name"
                        className="bg-gray-100 rounded-lg px-4 py-2 w-full"
                    />
                    <textarea
                        placeholder="Course Description"
                        className="bg-gray-100 rounded-lg px-4 py-2 w-full"
                    ></textarea>
                    <div className="flex space-x-4">
                        <input
                            type="text"
                            placeholder="Duration (e.g., 4 weeks)"
                            className="bg-gray-100 rounded-lg px-4 py-2 w-1/2"
                        />
                        <input
                            type="text"
                            placeholder="Price"
                            className="bg-gray-100 rounded-lg px-4 py-2 w-1/2"
                        />
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">Add Course</button>
                </form>
            </div>

        </div>
    )
}

export default ManageCourses