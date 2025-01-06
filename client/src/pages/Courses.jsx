// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Navbar from '../components/Navbar';

// const Courses = () => {

//     const handleCourse = (index) => {

//     }

//     return (
//         <div className='bg-gray-50'>
//             <Navbar />
//             {/* Navigation Bar */}
//             {/* <nav className="bg-blue-700 p-4 fixed w-full z-10 top-0 shadow-lg">
//                 <div className="max-w-7xl mx-auto flex justify-between items-center">
//                     <div className="text-white text-2xl font-semibold">CodeXpress</div>
//                     <div>
//                         <ul className="flex space-x-8">
//                             <li><a href="#about" className="text-white hover:text-yellow-300">About</a></li>
//                             <li><a href="#courses" className="text-white hover:text-yellow-300">Courses</a></li>
//                             <li><a href="#contact" className="text-white hover:text-yellow-300">Contact</a></li>
//                             <li><a href="#signup" className=" bg-yellow-500 text-black rounded-full shadow-lg hover:bg-yellow-600 transition-all px-4 py-3">Sign Up</a></li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav> */}
//             <h1>Courses</h1>
//             <div className='mt-12 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
//                 {

//                     courses.length > 0 ? (
//                         courses.map((course, index) => {
//                             return (
//                                 <div
//                                     key={index} // Ensure each course has a unique key
//                                     className="bg-white shadow-xl rounded-lg p-8 m-4 w-full max-w-sm"
//                                 >
//                                     <img
//                                         src={course.thumbnailUrl} // Use dynamic course images with a fallback
//                                         alt={course.name || "Course Image"}
//                                         className="w-full h-40 object-cover rounded-md"
//                                     />
//                                     <h3 className="mt-4 text-2xl font-semibold">{course.name || "Unnamed Course"}</h3>
//                                     <p className="mt-2 text-sm text-gray-700 line-clamp-2">
//                                         {course.description || "No description available for this course."}
//                                     </p>
//                                     <p className="mt-2 text-gray-500">
//                                         <strong>Instructor:</strong> {course.instructor || "Not specified"}
//                                     </p>
//                                     <p className="mt-2 text-gray-500">
//                                         <strong>Price:</strong> ₹{course.price || "Free"}
//                                     </p>
//                                     <button
//                                         className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all"

//                                     >
//                                         <a href={`/courses/${course._id}`}>
//                                             Enroll
//                                         </a>
//                                     </button>
//                                 </div>
//                             );
//                         })
//                     ) : (
//                         <p className="text-center text-gray-600 text-lg">No Courses Available</p>
//                     )


//                 }
//             </div>

//         </div>
//     );
// };

// export default Courses;
import React,{useState,useEffect} from 'react'
import Header from '../components/Header'
import axios from 'axios';

const Courses = () => {
     const [courses, setCourses] = useState([]); // Fixed state variable name for clarity
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get("http://localhost:3000/courses");
                console.log("API Response:", response);
                setCourses(response.data);
            } catch (error) {
                console.error("Error fetching courses:", error);
            }
        };

        fetchCourses();
    }, []);
    return (
        <div className="main-wrapper">
            <div className='container'>
                <Header />
                <div className="breadcrumb-bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-12">
                                <div className="breadcrumb-list">
                                    <nav aria-label="breadcrumb" className="page-breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                            <li className="breadcrumb-item" aria-current="page">Courses</li>
                                            <li className="breadcrumb-item active" aria-current="page">All Courses</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="course-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">

                                <div className="showing-list">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <div className="view-icons">
                                                    <a href="course-grid.html" className="grid-view"><i
                                                        className="feather-grid"></i></a>
                                                    <a href="course-list.html" className="list-view active"><i
                                                        className="feather-list"></i></a>
                                                </div>
                                                <div className="show-result">
                                                    <h4>Showing 1-9 of 50 results</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="show-filter add-course-info ">
                                                <form action="#">
                                                    <div className="row gx-2 align-items-center">
                                                        <div className="col-md-6 col-item">
                                                            <div className=" search-group">
                                                                <i className="feather-search"></i>
                                                                <input type="text" className="form-control"
                                                                    placeholder="Search our courses" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-lg-6 col-item">
                                                            <div className="input-block select-form mb-0">
                                                                <select className="form-select select" name="sellist1">
                                                                    <option>Newly published </option>
                                                                   
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                   

                                    <div className="col-lg-12 col-md-12 d-flex">
                                        <div className="course-box course-design list-course d-flex flex flex-col">
                                           {
                                            courses.map((course, index) =>{
                                                return ( <div className="product" key={index}>
                                                <div className="product-img">
                                                    <a href="#">
                                                        <img className="img-fluid" alt="Img" src={course.thumbnailUrl} />
                                                    </a>
                                                    <div className="price">
                                                        <h3>$300 <span>$99.00</span></h3>
                                                    </div>
                                                </div>
                                                <div className="product-content">
                                                    <div className="head-course-title">
                                                        <h3 className="title"><a href="course-details.html">The Complete App Design
                                                            Course - UX, UI and Design Thinking</a></h3>
                                                        <div className="all-btn all-category d-flex align-items-center">
                                                            <a href="checkout.html" className="btn btn-primary">BUY NOW</a>
                                                        </div>
                                                    </div>
                                                    <div className="course-info border-bottom-0 pb-0 d-flex align-items-center">
                                                        <div className="rating-img d-flex align-items-center">
                                                            <img src="/img/icon/icon-01.svg" alt="Img" />
                                                            <p>12+ Lesson</p>
                                                        </div>
                                                        <div className="course-view d-flex align-items-center">
                                                            <img src="/img/icon/icon-02.svg" alt="Img" />
                                                            <p>9hr 30min</p>
                                                        </div>
                                                    </div>
                                                    <div className="rating">
                                                        <i className="fas fa-star filled"></i>
                                                        <i className="fas fa-star filled"></i>
                                                        <i className="fas fa-star filled"></i>
                                                        <i className="fas fa-star filled"></i>
                                                        <i className="fas fa-star"></i>
                                                        <span className="d-inline-block average-rating"><span>4.0</span> (15)</span>
                                                    </div>
                                                    <div className="course-group d-flex mb-0">
                                                        <div className="course-group-img d-flex">
                                                            <a href="instructor-profile.html"><img
                                                                src="/img/user/user6.jpg" alt="Img"
                                                                className="img-fluid"/></a>
                                                            <div className="course-name">
                                                                <h4><a href="instructor-profile.html">Lavern M.</a></h4>
                                                                <p>Instructor</p>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="course-share d-flex align-items-center justify-content-center">
                                                            <a href="#rate"><i className="fa-regular fa-heart"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>)
                                            })
                                           }
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <ul className="pagination lms-page">
                                            <li className="page-item prev">
                                                <a className="page-link" href="javascript:void(0)" tabIndex="-1">
                                                    <i className="fas fa-angle-left"></i>
                                                </a>
                                            </li>
                                            <li className="page-item first-page active">
                                                <a className="page-link" href="javascript:void(0)">
                                                    1
                                                </a>
                                            </li>
                                            {/* Add additional page links as needed */}
                                            <li className="page-item next">
                                                <a className="page-link" href="javascript:void(0)">
                                                    <i className="fas fa-angle-right"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-3 theiaStickySidebar">
                                <div className="filter-clear">
                                    <div className="clear-filter d-flex align-items-center">
                                        <h4><i className="feather-filter"></i> Filters</h4>
                                        <div className="clear-text">
                                            <p>CLEAR</p>
                                        </div>
                                    </div>

                                    <div className="card search-filter categories-filter-blk">
                                        <div className="card-body">
                                            <div className="filter-widget mb-0">
                                                <div className="categories-head d-flex align-items-center">
                                                    <h4>Course Categories</h4>
                                                    <i className="fas fa-angle-down"></i>
                                                </div>
                                                {/* Category filters */}
                                                {['Backend', 'CSS', 'Frontend', 'General', 'IT & Software', 'Photography', 'Programming Language', 'Technology'].map((category, index) => (
                                                    <div key={index}>
                                                        <label className="custom_check">
                                                            <input type="checkbox" name="select_specialist" />
                                                            <span className="checkmark"></span> {category} ({index + 2})
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card search-filter">
                                        <div className="card-body">
                                            <div className="filter-widget mb-0">
                                                <div className="categories-head d-flex align-items-center">
                                                    <h4>Instructors</h4>
                                                    <i className="fas fa-angle-down"></i>
                                                </div>
                                                {/* Instructor filters */}
                                                {['Keny White', 'Hinata Hyuga', 'John Doe', 'Nicole Brown'].map((instructor, index) => (
                                                    <div key={index}>
                                                        <label className="custom_check">
                                                            <input type="checkbox" name="select_specialist" />
                                                            <span className="checkmark"></span> {instructor} ({index + 3})
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card search-filter">
                                        <div className="card-body">
                                            <div className="filter-widget mb-0">
                                                <div className="categories-head d-flex align-items-center">
                                                    <h4>Price</h4>
                                                    <i className="fas fa-angle-down"></i>
                                                </div>
                                                {/* Price filters */}
                                                {['All', 'Free', 'Paid'].map((price, index) => (
                                                    <div key={index}>
                                                        <label className="custom_check custom_one">
                                                            <input type="radio" name="select_specialist" />
                                                            <span className="checkmark"></span> {price} ({index + 3})
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="footer">

                    <div className="footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">

                                    <div className="footer-widget footer-about">
                                        <div className="footer-logo">
                                            <img src="/img/logo.svg" alt="logo" />
                                        </div>
                                        <div className="footer-about-content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris</p>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-lg-2 col-md-6">

                                    <div className="footer-widget footer-menu">
                                        <h2 className="footer-title">For Instructor</h2>
                                        <ul>
                                            <li><a href="instructor-profile.html">Profile</a></li>
                                            <li><a href="login.html">Login</a></li>
                                            <li><a href="register.html">Register</a></li>
                                            <li><a href="instructor-list.html">Instructor</a></li>
                                            <li><a href="instructor-dashboard.html"> Dashboard</a></li>
                                        </ul>
                                    </div>

                                </div>

                                <div className="col-lg-2 col-md-6">

                                    <div className="footer-widget footer-menu">
                                        <h2 className="footer-title">For Student</h2>
                                        <ul>
                                            <li><a href="student-profile.html">Profile</a></li>
                                            <li><a href="login.html">Login</a></li>
                                            <li><a href="register.html">Register</a></li>
                                            <li><a href="students-list.html">Student</a></li>
                                            <li><a href="student-dashboard.html"> Dashboard</a></li>
                                        </ul>
                                    </div>

                                </div>

                                <div className="col-lg-4 col-md-6">

                                    <div className="footer-widget footer-contact">
                                        <h2 className="footer-title">News letter</h2>
                                        <div className="news-letter">
                                            <form>
                                                <input type="text" className="form-control" placeholder="Enter your email address"
                                                    name="email" />
                                            </form>
                                        </div>
                                        <div className="footer-contact-info">
                                            <div className="footer-address">
                                                <img src="/img/icon/icon-20.svg" alt="Img" className="img-fluid" />
                                                <p> 3556 Beech Street, San Francisco,<br /> California, CA 94108 </p>
                                            </div>
                                            <p>
                                                <img src="/img/icon/icon-19.svg" alt="Img" className="img-fluid" />
                                                <a href="https://dreamslms.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="60041205010d130c0d13200518010d100c054e030f0d">[email&#160;protected]</a>
                                            </p>
                                            <p className="mb-0">
                                                <img src="/img/icon/icon-21.svg" alt="Img" className="img-fluid" />
                                                +19 123-456-7890
                                            </p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <div className="container">

                            <div className="copyright">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="privacy-policy">
                                            <ul>
                                                <li><a href="term-condition.html">Terms</a></li>
                                                <li><a href="privacy-policy.html">Privacy</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="copyright-text">
                                            <p className="mb-0">&copy; 2024 DreamsLMS. All rights reserved.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </footer>
            </div>
        </div>
    )
}

export default Courses
