import axios from 'axios';
import React, { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const [course, setCourse] = useState({});
  const {id} = useParams()
  console.log(id);

  useEffect(()=>{
    const fetchCourse =async () =>{
      try{
        const res = await axios.get(`http://localhost:3000/courses/${id}`)
        setCourse(res.data)
        // console.log(res.data);

      }
      catch(err){
        console.log(err);
        
      }
      
    }
    fetchCourse();
  },[])
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row">
        {/* Left Side: Image and Basic Info */}
        <div className="md:w-1/3">
          <img
            className="w-full h-64 object-cover rounded-lg"
            src={course.thumbnailUrl}
            alt={course.name}
          />
        </div>
        {/* Right Side: Course Info */}
        <div className="md:w-2/3 md:pl-8 mt-6 md:mt-0">
          <h2 className="text-3xl font-semibold text-gray-800">{course.name}</h2>
          <p className="text-xl text-gray-600 mt-2">
            Price: <span className="font-bold text-gray-800">₹{course.price}</span>
          </p>
          <p className="text-xl text-gray-600 mt-1">
            Duration: <span className="font-medium">{course.duration}</span>
          </p>
          <p className="text-gray-600 mt-4">{course.description}</p>

          {/* Instructor Info */}
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800">Instructor</h3>
            <p className="text-lg text-gray-600 mt-2">Name: instructorName</p>
            <p className="text-lg text-gray-600 mt-1">Experience: instructorExperience years</p>
          </div>

          {/* Syllabus */}
          {/* {course.syllabus && course.syllabus.length > 0 && ( */}
            <div className="mt-6 p-4 bg-gray-100 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800">Syllabus</h3>
              <ul className="list-disc pl-6 mt-2 text-lg text-gray-600">
                {/* {course.syllabus.map((topic, index) => (
                  <li  className="mt-2">{topic}</li>
                ))} */}
              </ul>
            </div>
          {/* )} */}

          {/* Start and End Dates */}
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <p className="text-lg text-gray-600">
              Start Date: <span className="font-medium">{new Date(course.startDate).toLocaleDateString()}</span>
            </p>
            <p className="text-lg text-gray-600">
              End Date: <span className="font-medium">{new Date(course.endDate).toLocaleDateString()}</span>
            </p>
          </div>

          {/* Enrollment Button */}
          <div className="mt-6">
            <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-200">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
