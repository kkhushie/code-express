// import React from 'react';
// import Navbar from '../components/Navbar';

// const HomePage = () => {
//     return (
//         <div className="bg-gray-50">
// <Navbar/>
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
//             {/* Hero Section */}
//             <section className="bg-gradient-to-r from-blue-600 to-blue-300 text-white text-center py-48 relative">
//                 <h1 className="text-8xl font-bold">Welcome to CodeXpress</h1>
//                 <p className="mt-4 px-44 text-lg">Your Gateway to Quality Coding Education. Whether you're a beginner or an experienced developer,
//                     CodExpress offers a comprehensive learning platform that helps you master the skills needed to thrive in the tech industry.
//                 </p>
//                 <a href="#about" className="mt-6 inline-block bg-yellow-500 text-black px-8 py-3 rounded-full shadow-lg hover:bg-yellow-600 transition-all">Explore Courses</a>
//                 <div className="absolute top-0 right-0 -z-10">
//                     <svg className="w-48 h-48 text-yellow-300 opacity-30 animate-pulse" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" xmlSpace="preserve">
//                         <path d="M10 2l-1.5 1.5L16 8H4l7.5 4.5L10 18l-6-9 6-9z" />
//                     </svg>
//                 </div>
//             </section>

//             {/* About Section */}
//             <section id="about" className="py-32 bg-white">
//                 <div className="max-w-7xl mx-auto text-center">
//                     <h2 className="text-4xl font-semibold text-blue-800">About CodeXpress</h2>
//                     <p className="mt-4 text-lg text-gray-700">At CodeXpress, we offer hands-on coding training for students of all skill levels. Our instructors are industry experts with years of experience.</p>
//                     <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//                         {/* Feature 1 */}
//                         <div className="bg-gray-100 shadow-lg rounded-lg p-8 flex flex-col items-center">
//                             <i className="fas fa-laptop-code text-4xl text-blue-600"></i>
//                             <h3 className="mt-4 text-2xl font-semibold">Hands-On Projects</h3>
//                             <p className="mt-2 text-gray-700">Learn by building real-world projects and solve real coding challenges.</p>
//                         </div>

//                         {/* Feature 2 */}
//                         <div className="bg-gray-100 shadow-lg rounded-lg p-8 flex flex-col items-center">
//                             <i className="fas fa-chalkboard-teacher text-4xl text-blue-600"></i>
//                             <h3 className="mt-4 text-2xl font-semibold">Expert Instructors</h3>
//                             <p className="mt-2 text-gray-700">Our mentors are experienced developers who guide you throughout your learning journey.</p>
//                         </div>

//                         {/* Feature 3 */}
//                         <div className="bg-gray-100 shadow-lg rounded-lg p-8 flex flex-col items-center">
//                             <i className="fas fa-rocket text-4xl text-blue-600"></i>
//                             <h3 className="mt-4 text-2xl font-semibold">Career Growth</h3>
//                             <p className="mt-2 text-gray-700">Get personalized career support and land your dream job in tech.</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Courses Section */}
//             <section id="courses" className="py-32 bg-blue-50">
//                 <div className="max-w-7xl mx-auto text-center">
//                     <h2 className="text-4xl font-semibold text-blue-800">Our Courses</h2>
//                     <p className="mt-4 text-lg text-gray-700">Explore our diverse range of courses designed for all learning levels.</p>
//                     <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//                         {/* Frontend Development */}
//                         <div className="bg-white shadow-xl rounded-lg p-8">
//                             <img src="https://www.mitrais.com/wp-content/uploads/2023/01/SWD_Blog_Banner_-_Front-end_Web_Developer_101.jpg" alt="Frontend Development" className="w-full h-32 object-cover rounded-md" />
//                             <h3 className="mt-4 text-2xl font-semibold">Frontend Development</h3>
//                             <p className="mt-2 text-gray-700">Learn HTML, CSS, JavaScript, React, and more to build beautiful, responsive websites.</p>
//                             <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all">Learn More</button>
//                         </div>

//                         {/* Backend Development */}
//                         <div className="bg-white shadow-xl rounded-lg p-8">
//                             <img src="https://media.istockphoto.com/id/1188511715/photo/back-end-project-architecture-development-database-development-planning.jpg?s=612x612&w=0&k=20&c=KrUO9IWlFjhYiBi_qfa1VurmhritUh-bQjB0UQxbWCs=" alt="Backend Development" className="w-full h-32 object-cover rounded-md" />
//                             <h3 className="mt-4 text-2xl font-semibold">Backend Development</h3>
//                             <p className="mt-2 text-gray-700">Master backend technologies like Node.js, Express, and MongoDB for dynamic web applications.</p>
//                             <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all">Learn More</button>
//                         </div>

//                         {/* Full-Stack Development */}
//                         <div className="bg-white shadow-xl rounded-lg p-8">
//                             <img src="https://miro.medium.com/v2/resize:fit:900/1*8CM8xyu2U-fs8mS_adV0lg.jpeg" alt="Full-Stack Development" className="w-full h-32 object-cover rounded-md" />
//                             <h3 className="mt-4 text-2xl font-semibold">Full-Stack Development</h3>
//                             <p className="mt-2 text-gray-700">Learn both frontend and backend development to become a full-stack developer.</p>
//                             <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all">Learn More</button>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Map Section */}
//             <section id="map" className="py-32 bg-blue-50">
//                 <div className="max-w-7xl mx-auto text-center">
//                     <h2 className="text-4xl font-semibold text-blue-800">Visit Us</h2>
//                     <p className="mt-4 text-lg text-gray-700">We are located in the heart of the city. Check out our location on the map!</p>
//                     <div className="mt-8">
//                         {/* Google Map Embed */}
//                         <iframe className="w-full h-96" src="https://www.google.com/maps/embed?pb=...YOUR_GOOGLE_MAP_EMBED_URL..." allowFullScreen="" loading="lazy"></iframe>
//                     </div>
//                 </div>
//             </section>

//             {/* Contact Section */}
//             <section id="contact" className="py-32 bg-white">
//                 <div className="max-w-7xl mx-auto text-center">
//                     <h2 className="text-4xl font-semibold text-blue-800">Get in Touch</h2>
//                     <p className="mt-4 text-lg text-gray-700">We’d love to hear from you! If you have any questions, feel free to contact us.</p>
//                     <div className="mt-8">
//                         <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all">Contact Us</button>
//                     </div>
//                 </div>
//             </section>

//             {/* Footer */}
//             <footer className="bg-blue-600 text-white py-6">
//                 <div className="max-w-7xl mx-auto text-center">
//                     <p>&copy; 2024 CodExpress. All rights reserved.</p>
//                 </div>
//             </footer>
//         </div>
//     );
// }

// export default HomePage;

import React, { useEffect } from 'react';
const logo = "/img/logo/logo.svg";
import object from '/img/object.png'; // Ensure the correct path
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS Styles
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Home = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
   
        <div>
<div className="main-wrapper">
    {/* Header */}
   <Header/>
    {/* /Header */}
    {/* Home Banner */}
    <section className="home-slide d-flex align-items-center px-10">
      <div className="container ">
        <div className="row ">
          <div className="col-md-7">
            <div className="home-slide-face aos" data-aos="fade-up">
              <div className="home-slide-text ">
                <h5>The Leader in Online Learning</h5>
                <h1>Engaging &amp; Accessible Online Courses For All</h1>
                <p>Own your future learning new skills online</p>
              </div>
              <div className="banner-content">
                {/* <form className="form" action="https://dreamslms.dreamstechnologies.com/html/course-list.html"> */}
                  <div className="form-inner">
                    <div className="input-group">
                      <i className="fa-solid fa-magnifying-glass search-icon" />
                      <input type="email" className="form-control" placeholder="Search School, Online eductional centers, etc" />
                      <span className="drop-detail">
                        <select className="form-select select">
                          <option>Category</option>
                          <option>Angular</option>
                          <option>Node Js</option>
                          <option>React</option>
                          <option>Python</option>
                        </select>
                      </span>
                      <button className="btn btn-primary sub-btn" type="submit"><i className="fas fa-arrow-right" /></button>
                    </div>
                  </div>
                {/* </form> */}
              </div>
              <div className="trust-user">
                <p>Trusted by over 15K Users <br />worldwide since 2024</p>
                <div className="trust-rating d-flex align-items-center">
                  <div className="rate-head">
                    <h2><span>1000</span>+</h2>
                  </div>
                  <div className="rating d-flex align-items-center">
                    <h2 className="d-inline-block average-rating">4.4</h2>
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 d-flex align-items-center">
            <div className="girl-slide-img aos" data-aos="fade-up">
              <img src={object} alt="Img" />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /Home Banner */}
    <section className="section student-course">
      <div className="container">
        <div className="course-widget">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="course-full-width">
                <div className="blur-border course-radius align-items-center aos" data-aos="fade-up">
                  <div className="online-course d-flex align-items-center">
                    <div className="course-img">
                      <img src="/img/pencil-icon.svg" alt="Img" />
                    </div>
                    <div className="course-inner-content">
                      <h4><span>10</span>K</h4>
                      <p>Online Courses</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="course-full-width">
                <div className="blur-border course-radius aos" data-aos="fade-up">
                  <div className="online-course d-flex align-items-center">
                    <div className="course-img">
                      <img src="/img/cources-icon.svg" alt="Img" />
                    </div>
                    <div className="course-inner-content">
                      <h4><span>200</span>+</h4>
                      <p>Expert Tutors</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="course-full-width">
                <div className="blur-border course-radius aos" data-aos="fade-up">
                  <div className="online-course d-flex align-items-center">
                    <div className="course-img">
                      <img src="/img/certificate-icon.svg" alt="Img" />
                    </div>
                    <div className="course-inner-content">
                      <h4><span>6</span>K+</h4>
                      <p>Ceritified Courses</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="course-full-width">
                <div className="blur-border course-radius aos" data-aos="fade-up">
                  <div className="online-course d-flex align-items-center">
                    <div className="course-img">
                      <img src="/img/gratuate-icon.svg" alt="Img" />
                    </div>
                    <div className="course-inner-content">
                      <h4><span>60</span>K +</h4>
                      <p>Online Students</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Home Banner */}
    {/* Top Categories */}
    <section className="section how-it-works">
      <div className="container">
        <div className="section-header aos" data-aos="fade-up">
          <div className="section-sub-head">
            <span>Favourite Course</span>
            <h2>Top Category</h2>
          </div>
          <div className="all-btn all-category d-flex align-items-center">
            <a href="job-category.html" className="btn btn-primary">All Categories</a>
          </div>
        </div>
        <div className="section-text aos" data-aos="fade-up">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida
            maecenas augue elementum et neque. Suspendisse imperdiet.</p>
        </div>
        <div className="owl-carousel mentoring-course owl-theme aos" data-aos="fade-up">
          <div className="feature-box text-center ">
            <div className="feature-bg">
              <div className="feature-header">
                <div className="feature-icon">
                  <img src="/img/categories-icon.png" alt="Img" />
                </div>
                <div className="feature-cont">
                  <div className="feature-text">Angular Development</div>
                </div>
              </div>
              <p>40 Instructors</p>
            </div>
          </div>
          <div className="feature-box text-center ">
            <div className="feature-bg">
              <div className="feature-header">
                <div className="feature-icon">
                  <img src="/img/categories-icon-01.png" alt="Img" />
                </div>
                <div className="feature-cont">
                  <div className="feature-text">Docker Development</div>
                </div>
              </div>
              <p>45 Instructors</p>
            </div>
          </div>
          <div className="feature-box text-center ">
            <div className="feature-bg">
              <div className="feature-header">
                <div className="feature-icon">
                  <img src="/img/categories-icon-02.png" alt="Img" />
                </div>
                <div className="feature-cont">
                  <div className="feature-text">Node JS Frontend</div>
                </div>
              </div>
              <p>40 Instructors</p>
            </div>
          </div>
          <div className="feature-box text-center ">
            <div className="feature-bg">
              <div className="feature-header">
                <div className="feature-icon">
                  <img src="/img/categories-icon-03.png" alt="Img" />
                </div>
                <div className="feature-cont">
                  <div className="feature-text">Swift Development</div>
                </div>
              </div>
              <p>23 Instructors</p>
            </div>
          </div>
          <div className="feature-box text-center ">
            <div className="feature-bg">
              <div className="feature-header">
                <div className="feature-icon">
                  <img src="/img/categories-icon-04.png" alt="Img" />
                </div>
                <div className="feature-cont">
                  <div className="feature-text">Python Development</div>
                </div>
              </div>
              <p>30 Instructors</p>
            </div>
          </div>
          <div className="feature-box text-center ">
            <div className="feature-bg">
              <div className="feature-header">
                <div className="feature-icon">
                  <img src="/img/categories-icon-05.png" alt="Img" />
                </div>
                <div className="feature-cont">
                  <div className="feature-text">React<br /> Native</div>
                </div>
              </div>
              <p>80 Instructors</p>
            </div>
          </div>
          <div className="feature-box text-center ">
            <div className="feature-bg">
              <div className="feature-header">
                <div className="feature-icon">
                  <img src="/img/categories-icon-04.png" alt="Img" />
                </div>
                <div className="feature-cont">
                  <div className="feature-text">Angular Development</div>
                </div>
              </div>
              <p>40 Instructors</p>
            </div>
          </div>
          <div className="feature-box text-center ">
            <div className="feature-bg">
              <div className="feature-header">
                <div className="feature-icon">
                  <img src="/img/categories-icon-01.png" alt="Img" />
                </div>
                <div className="feature-cont">
                  <div className="feature-text">Docker Development</div>
                </div>
              </div>
              <p>45 Instructors</p>
            </div>
          </div>
          <div className="feature-box text-center ">
            <div className="feature-bg">
              <div className="feature-header">
                <div className="feature-icon">
                  <img src="/img/categories-icon-02.png" alt="Img" />
                </div>
                <div className="feature-cont">
                  <div className="feature-text">Node JS Frontend</div>
                </div>
              </div>
              <p>40 Instructors</p>
            </div>
          </div>
          <div className="feature-box text-center ">
            <div className="feature-bg">
              <div className="feature-header">
                <div className="feature-icon">
                  <img src="/img/categories-icon-03.png" alt="Img" />
                </div>
                <div className="feature-cont">
                  <div className="feature-text">Swift Development</div>
                </div>
              </div>
              <p>23 Instructors</p>
            </div>
          </div>
          <div className="feature-box text-center ">
            <div className="feature-bg">
              <div className="feature-header">
                <div className="feature-icon">
                  <img src="/img/categories-icon-04.png" alt="Img" />
                </div>
                <div className="feature-cont">
                  <div className="feature-text">Python Development</div>
                </div>
              </div>
              <p>30 Instructors</p>
            </div>
          </div>
          <div className="feature-box text-center ">
            <div className="feature-bg">
              <div className="feature-header">
                <div className="feature-icon">
                  <img src="/img/categories-icon-01.png" alt="Img" />
                </div>
                <div className="feature-cont">
                  <div className="feature-text">Docker Development</div>
                </div>
              </div>
              <p>45 Instructors</p>
            </div>
          </div>
          <div className="feature-box text-center ">
            <div className="feature-bg">
              <div className="feature-header">
                <div className="feature-icon">
                  <img src="/img/categories-icon-02.png" alt="Img" />
                </div>
                <div className="feature-cont">
                  <div className="feature-text">Node JS Frontend</div>
                </div>
              </div>
              <p>40 Instructors</p>
            </div>
          </div>
          <div className="feature-box text-center ">
            <div className="feature-bg">
              <div className="feature-header">
                <div className="feature-icon">
                  <img src="/img/categories-icon-03.png" alt="Img" />
                </div>
                <div className="feature-cont">
                  <div className="feature-text">Swift Development</div>
                </div>
              </div>
              <p>23 Instructors</p>
            </div>
          </div>
          <div className="feature-box text-center ">
            <div className="feature-bg">
              <div className="feature-header">
                <div className="feature-icon">
                  <img src="/img/categories-icon-04.png" alt="Img" />
                </div>
                <div className="feature-cont">
                  <div className="feature-text">Python Development</div>
                </div>
              </div>
              <p>30 Instructors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /Top Categories */}
    {/* Feature Course */}
    <section className="section new-course">
      <div className="container">
        <div className="section-header aos" data-aos="fade-up">
          <div className="section-sub-head">
            <span>What’s New</span>
            <h2>Featured Courses</h2>
          </div>
          <div className="all-btn all-category d-flex align-items-center">
            <a href="course-list.html" className="btn btn-primary">All Courses</a>
          </div>
        </div>
        <div className="section-text aos" data-aos="fade-up">
          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan
            bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.</p>
        </div>
        <div className="course-feature">
          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="course-box d-flex aos" data-aos="fade-up">
                <div className="product">
                  <div className="product-img">
                    <a href="course-details.html">
                      <img className="img-fluid" alt="Img" src="/img/course/course-01.jpg" />
                    </a>
                    <div className="price">
                      <h3>$300 <span>$99.00</span></h3>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="course-group d-flex">
                      <div className="course-group-img d-flex">
                        <a href="instructor-profile.html"><img src="/img/user/user1.jpg" alt="Img" className="img-fluid" /></a>
                        <div className="course-name">
                          <h4><a href="instructor-profile.html">Nicole Brown</a></h4>
                          <p>Instructor</p>
                        </div>
                      </div>
                      <div className="course-share d-flex align-items-center justify-content-center">
                        <a href="#"><i className="fa-regular fa-heart" /></a>
                      </div>
                    </div>
                    <h3 className="title instructor-text"><a href="course-details.html">Information
                        About UI/UX Design Degree</a></h3>
                    <div className="course-info d-flex align-items-center">
                      <div className="rating-img d-flex align-items-center">
                        <img src="/img/icon/icon-01.svg" alt="Img" />
                        <p>12+ Lesson</p>
                      </div>
                      <div className="course-view d-flex align-items-center">
                        <img src="/img/icon/icon-02.svg" alt="Img" />
                        <p>9hr 30min</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="rating m-0">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating"><span>4.0</span> (15)</span>
                      </div>
                      <div className="all-btn all-category d-flex align-items-center">
                        <a href="checkout.html" className="btn btn-primary">BUY NOW</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="course-box d-flex aos" data-aos="fade-up">
                <div className="product">
                  <div className="product-img">
                    <a href="course-details.html">
                      <img className="img-fluid" alt="Img" src="/img/course/course-02.jpg" />
                    </a>
                    <div className="price">
                      <h3>$400 <span>$99.00</span></h3>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="course-group d-flex">
                      <div className="course-group-img d-flex">
                        <a href="instructor-profile.html"><img src="/img/user/user2.jpg" alt="Img" className="img-fluid" /></a>
                        <div className="course-name">
                          <h4><a href="instructor-profile.html">Jenis R.</a></h4>
                          <p>Instructor</p>
                        </div>
                      </div>
                      <div className="course-share d-flex align-items-center justify-content-center">
                        <a href="#"><i className="fa-regular fa-heart" /></a>
                      </div>
                    </div>
                    <h3 className="title instructor-text"><a href="course-details.html">Wordpress for
                        Beginners - Master Wordpress Quickly</a></h3>
                    <div className="course-info d-flex align-items-center">
                      <div className="rating-img d-flex align-items-center">
                        <img src="/img/icon/icon-01.svg" alt="Img" />
                        <p>11+ Lesson</p>
                      </div>
                      <div className="course-view d-flex align-items-center">
                        <img src="/img/icon/icon-02.svg" alt="Img" />
                        <p>6hr 30min</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="rating m-0">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating"><span>4.3</span> (15)</span>
                      </div>
                      <div className="all-btn all-category d-flex align-items-center">
                        <a href="checkout.html" className="btn btn-primary">BUY NOW</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="course-box d-flex aos" data-aos="fade-up">
                <div className="product">
                  <div className="product-img">
                    <a href="course-details.html">
                      <img className="img-fluid" alt="Img" src="/img/course/course-03.jpg" />
                    </a>
                    <div className="price combo">
                      <h3>FREE</h3>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="course-group d-flex">
                      <div className="course-group-img d-flex">
                        <a href="instructor-profile.html"><img src="/img/user/user5.jpg" alt="Img" className="img-fluid" /></a>
                        <div className="course-name">
                          <h4><a href="instructor-profile.html">Jesse Stevens</a></h4>
                          <p>Instructor</p>
                        </div>
                      </div>
                      <div className="course-share d-flex align-items-center justify-content-center">
                        <a href="#"><i className="fa-regular fa-heart" /></a>
                      </div>
                    </div>
                    <h3 className="title instructor-text"><a href="course-details.html">Sketch from A to
                        Z (2024): Become an app designer</a></h3>
                    <div className="course-info d-flex align-items-center">
                      <div className="rating-img d-flex align-items-center">
                        <img src="/img/icon/icon-01.svg" alt="Img" />
                        <p>16+ Lesson</p>
                      </div>
                      <div className="course-view d-flex align-items-center">
                        <img src="/img/icon/icon-02.svg" alt="Img" />
                        <p>12hr 30min</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="rating m-0">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating"><span>4.5</span> (15)</span>
                      </div>
                      <div className="all-btn all-category d-flex align-items-center">
                        <a href="checkout.html" className="btn btn-primary">BUY NOW</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="course-box d-flex aos" data-aos="fade-up">
                <div className="product">
                  <div className="product-img">
                    <a href="course-details.html">
                      <img className="img-fluid" alt="Img" src="/img/course/course-04.jpg" />
                    </a>
                    <div className="price">
                      <h3>$500 <span>$99.00</span></h3>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="course-group d-flex">
                      <div className="course-group-img d-flex">
                        <a href="instructor-profile.html"><img src="/img/user/user4.jpg" alt="Img" className="img-fluid" /></a>
                        <div className="course-name">
                          <h4><a href="instructor-profile.html">Nicole Brown</a></h4>
                          <p>Instructor</p>
                        </div>
                      </div>
                      <div className="course-share d-flex align-items-center justify-content-center">
                        <a href="#"><i className="fa-regular fa-heart" /></a>
                      </div>
                    </div>
                    <h3 className="title instructor-text"><a href="course-details.html">Learn Angular
                        Fundamentals From beginning to advance lavel</a></h3>
                    <div className="course-info d-flex align-items-center">
                      <div className="rating-img d-flex align-items-center">
                        <img src="/img/icon/icon-01.svg" alt="Img" />
                        <p>10+ Lesson</p>
                      </div>
                      <div className="course-view d-flex align-items-center">
                        <img src="/img/icon/icon-02.svg" alt="Img" />
                        <p>8hr 30min</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="rating m-0">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating"><span>4.2</span> (15)</span>
                      </div>
                      <div className="all-btn all-category d-flex align-items-center">
                        <a href="checkout.html" className="btn btn-primary">BUY NOW</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="course-box d-flex aos" data-aos="fade-up">
                <div className="product">
                  <div className="product-img">
                    <a href="course-details.html">
                      <img className="img-fluid" alt="Img" src="/img/course/course-05.jpg" />
                    </a>
                    <div className="price">
                      <h3>$300 <span>$99.00</span></h3>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="course-group d-flex">
                      <div className="course-group-img d-flex">
                        <a href="instructor-profile.html"><img src="/img/user/user3.jpg" alt="Img" className="img-fluid" /></a>
                        <div className="course-name">
                          <h4><a href="instructor-profile.html">John Smith</a></h4>
                          <p>Instructor</p>
                        </div>
                      </div>
                      <div className="course-share d-flex align-items-center justify-content-center">
                        <a href="#"><i className="fa-regular fa-heart" /></a>
                      </div>
                    </div>
                    <h3 className="title instructor-text"><a href="course-details.html">Build Responsive
                        Real World Websites with HTML5 and CSS3</a></h3>
                    <div className="course-info d-flex align-items-center">
                      <div className="rating-img d-flex align-items-center">
                        <img src="/img/icon/icon-01.svg" alt="Img" />
                        <p>13+ Lesson</p>
                      </div>
                      <div className="course-view d-flex align-items-center">
                        <img src="/img/icon/icon-02.svg" alt="Img" />
                        <p>10hr 30min</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="rating m-0">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating"><span>4.0</span> (15)</span>
                      </div>
                      <div className="all-btn all-category d-flex align-items-center">
                        <a href="checkout.html" className="btn btn-primary">BUY NOW</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="course-box d-flex aos" data-aos="fade-up">
                <div className="product">
                  <div className="product-img">
                    <a href="course-details.html">
                      <img className="img-fluid" alt="Img" src="/img/course/course-06.jpg" />
                    </a>
                    <div className="price combo">
                      <h3>FREE</h3>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="course-group d-flex">
                      <div className="course-group-img d-flex">
                        <a href="instructor-profile.html"><img src="/img/user/user6.jpg" alt="Img" className="img-fluid" /></a>
                        <div className="course-name">
                          <h4><a href="instructor-profile.html">Stella Johnson</a></h4>
                          <p>Instructor</p>
                        </div>
                      </div>
                      <div className="course-share d-flex align-items-center justify-content-center">
                        <a href="#"><i className="fa-regular fa-heart" /></a>
                      </div>
                    </div>
                    <h3 className="title instructor-text"><a href="course-details.html">C# Developers
                        Double Your Coding Speed with Visual Studio</a></h3>
                    <div className="course-info d-flex align-items-center">
                      <div className="rating-img d-flex align-items-center">
                        <img src="/img/icon/icon-01.svg" alt="Img" />
                        <p>7+ Lesson</p>
                      </div>
                      <div className="course-view d-flex align-items-center">
                        <img src="/img/icon/icon-02.svg" alt="Img" />
                        <p>7hr 30min</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="rating m-0">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating"><span>4.6</span> (15)</span>
                      </div>
                      <div className="all-btn all-category d-flex align-items-center">
                        <a href="checkout.html" className="btn btn-primary">BUY NOW</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /Feature Course */}
    {/* Master Skill */}
    <section className="section master-skill">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-12">
            <div className="section-header aos" data-aos="fade-up">
              <div className="section-sub-head">
                <span>What’s New</span>
                <h2>Master the skills to drive your career</h2>
              </div>
            </div>
            <div className="section-text aos" data-aos="fade-up">
              <p>Get certified, master modern tech skills, and level up your career — whether you’re
                starting out or a seasoned pro. 95% of eLearning learners report our hands-on content
                directly helped their careers.</p>
            </div>
            <div className="career-group aos" data-aos="fade-up">
              <div className="row">
                <div className="col-lg-6 col-md-6 d-flex">
                  <div className="certified-group blur-border d-flex">
                    <div className="get-certified d-flex align-items-center">
                      <div className="blur-box">
                        <div className="certified-img ">
                          <img src="/img/icon/icon-1.svg" alt="Img" className="img-fluid" />
                        </div>
                      </div>
                      <p>Stay motivated with engaging instructors</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex">
                  <div className="certified-group blur-border d-flex">
                    <div className="get-certified d-flex align-items-center">
                      <div className="blur-box">
                        <div className="certified-img ">
                          <img src="/img/icon/icon-2.svg" alt="Img" className="img-fluid" />
                        </div>
                      </div>
                      <p>Keep up with in the latest in cloud</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex">
                  <div className="certified-group blur-border d-flex">
                    <div className="get-certified d-flex align-items-center">
                      <div className="blur-box">
                        <div className="certified-img ">
                          <img src="/img/icon/icon-3.svg" alt="Img" className="img-fluid" />
                        </div>
                      </div>
                      <p>Get certified with 100+ certification courses</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex">
                  <div className="certified-group blur-border d-flex">
                    <div className="get-certified d-flex align-items-center">
                      <div className="blur-box">
                        <div className="certified-img ">
                          <img src="/img/icon/icon-4.svg" alt="Img" className="img-fluid" />
                        </div>
                      </div>
                      <p>Build skills your way, from labs to courses</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 d-flex align-items-end">
            <div className="career-img aos" data-aos="fade-up">
              <img src="/img/join.png" alt="Img" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /Master Skill */}
    {/* Trending Course */}
    <section className="section trend-course">
      <div className="container">
        <div className="section-header aos" data-aos="fade-up">
          <div className="section-sub-head">
            <span>What’s New</span>
            <h2>TRENDING COURSES</h2>
          </div>
          <div className="all-btn all-category d-flex align-items-center">
            <a href="course-list.html" className="btn btn-primary">All Courses</a>
          </div>
        </div>
        <div className="section-text aos" data-aos="fade-up">
          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan
            bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.</p>
        </div>
        <div className="owl-carousel trending-course owl-theme aos" data-aos="fade-up">
          <div className="course-box trend-box">
            <div className="product trend-product">
              <div className="product-img">
                <a href="course-details.html">
                  <img className="img-fluid" alt="Img" src="/img/course/course-07.jpg" />
                </a>
                <div className="price">
                  <h3>$200 <span>$99.00</span></h3>
                </div>
              </div>
              <div className="product-content">
                <div className="course-group d-flex">
                  <div className="course-group-img d-flex">
                    <a href="instructor-profile.html"><img src="/img/user/user.jpg" alt="Img" className="img-fluid" /></a>
                    <div className="course-name">
                      <h4><a href="instructor-profile.html">John Michael</a></h4>
                      <p>Instructor</p>
                    </div>
                  </div>
                  <div className="course-share d-flex align-items-center justify-content-center">
                    <a href="#"><i className="fa-regular fa-heart" /></a>
                  </div>
                </div>
                <h3 className="title"><a href="course-details.html">Learn JavaScript and Express to become a
                    professional JavaScript</a></h3>
                <div className="course-info d-flex align-items-center">
                  <div className="rating-img d-flex align-items-center">
                    <img src="/img/icon/icon-01.svg" alt="Img" className="img-fluid" />
                    <p>13+ Lesson</p>
                  </div>
                  <div className="course-view d-flex align-items-center">
                    <img src="/img/icon/icon-02.svg" alt="Img" className="img-fluid" />
                    <p>10hr 30min</p>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="rating m-0">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span className="d-inline-block average-rating"><span>4.0</span> (15)</span>
                  </div>
                  <div className="all-btn all-category d-flex align-items-center">
                    <a href="checkout.html" className="btn btn-primary">BUY NOW</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="course-box trend-box">
            <div className="product trend-product">
              <div className="product-img">
                <a href="course-details.html">
                  <img className="img-fluid" alt="Img" src="/img/course/course-08.jpg" />
                </a>
                <div className="price">
                  <h3>$300 <span>$99.00</span></h3>
                </div>
              </div>
              <div className="product-content">
                <div className="course-group d-flex">
                  <div className="course-group-img d-flex">
                    <a href="instructor-profile.html"><img src="/img/user/user2.jpg" alt="Img" className="img-fluid" /></a>
                    <div className="course-name">
                      <h4><a href="instructor-profile.html">John Smith</a></h4>
                      <p>Instructor</p>
                    </div>
                  </div>
                  <div className="course-share d-flex align-items-center justify-content-center">
                    <a href="#"><i className="fa-regular fa-heart" /></a>
                  </div>
                </div>
                <h3 className="title"><a href="course-details.html">Responsive Web Design Essentials HTML5
                    CSS3 and Bootstrap</a></h3>
                <div className="course-info d-flex align-items-center">
                  <div className="rating-img d-flex align-items-center">
                    <img src="/img/icon/icon-01.svg" alt="Img" className="img-fluid" />
                    <p>10+ Lesson</p>
                  </div>
                  <div className="course-view d-flex align-items-center">
                    <img src="/img/icon/icon-02.svg" alt="Img" className="img-fluid" />
                    <p>11hr 30min</p>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="rating m-0">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span className="d-inline-block average-rating"><span>4.2</span> (15)</span>
                  </div>
                  <div className="all-btn all-category d-flex align-items-center">
                    <a href="checkout.html" className="btn btn-primary">BUY NOW</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="course-box trend-box">
            <div className="product trend-product">
              <div className="product-img">
                <a href="course-details.html">
                  <img className="img-fluid" alt="Img" src="/img/course/course-05.jpg" />
                </a>
                <div className="price">
                  <h3>$100 <span>$99.00</span></h3>
                </div>
              </div>
              <div className="product-content">
                <div className="course-group d-flex">
                  <div className="course-group-img d-flex">
                    <a href="instructor-profile.html"><img src="/img/user/user3.jpg" alt="Img" className="img-fluid" /></a>
                    <div className="course-name">
                      <h4><a href="instructor-profile.html">Lavern M.</a></h4>
                      <p>Instructor</p>
                    </div>
                  </div>
                  <div className="course-share d-flex align-items-center justify-content-center">
                    <a href="#"><i className="fa-regular fa-heart" /></a>
                  </div>
                </div>
                <h3 className="title"><a href="course-details.html">The Complete App Design Course - UX, UI
                    and Design Thinking</a></h3>
                <div className="course-info d-flex align-items-center">
                  <div className="rating-img d-flex align-items-center">
                    <img src="/img/icon/icon-01.svg" alt="Img" className="img-fluid" />
                    <p>8+ Lesson</p>
                  </div>
                  <div className="course-view d-flex align-items-center">
                    <img src="/img/icon/icon-02.svg" alt="Img" className="img-fluid" />
                    <p>8hr 30min</p>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="rating m-0">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span className="d-inline-block average-rating"><span>4.3</span> (15)</span>
                  </div>
                  <div className="all-btn all-category d-flex align-items-center">
                    <a href="checkout.html" className="btn btn-primary">BUY NOW</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="course-box trend-box">
            <div className="product trend-product">
              <div className="product-img">
                <a href="course-details.html">
                  <img className="img-fluid" alt="Img" src="/img/course/course-08.jpg" />
                </a>
                <div className="price">
                  <h3>$200 <span>$99.00</span></h3>
                </div>
              </div>
              <div className="product-content">
                <div className="course-group d-flex">
                  <div className="course-group-img d-flex">
                    <a href="instructor-profile.html"><img src="/img/user/user5.jpg" alt="Img" className="img-fluid" /></a>
                    <div className="course-name">
                      <h4><a href="instructor-profile.html">John Smith</a></h4>
                      <p>Instructor</p>
                    </div>
                  </div>
                  <div className="course-share d-flex align-items-center justify-content-center">
                    <a href="#"><i className="fa-regular fa-heart" /></a>
                  </div>
                </div>
                <h3 className="title"><a href="course-details.html">Build Responsive Real World Websites
                    with HTML5 and CSS3</a></h3>
                <div className="course-info d-flex align-items-center">
                  <div className="rating-img d-flex align-items-center">
                    <img src="/img/icon/icon-01.svg" alt="Img" className="img-fluid" />
                    <p>13+ Lesson</p>
                  </div>
                  <div className="course-view d-flex align-items-center">
                    <img src="/img/icon/icon-02.svg" alt="Img" className="img-fluid" />
                    <p>10hr 30min</p>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="rating m-0">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span className="d-inline-block average-rating"><span>4.0</span> (15)</span>
                  </div>
                  <div className="all-btn all-category d-flex align-items-center">
                    <a href="checkout.html" className="btn btn-primary">BUY NOW</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="course-box trend-box">
            <div className="product trend-product">
              <div className="product-img">
                <a href="course-details.html">
                  <img className="img-fluid" alt="Img" src="/img/course/course-07.jpg" />
                </a>
                <div className="price">
                  <h3>$300 <span>$99.00</span></h3>
                </div>
              </div>
              <div className="product-content">
                <div className="course-group d-flex">
                  <div className="course-group-img d-flex">
                    <a href="instructor-profile.html"><img src="/img/user/user2.jpg" alt="Img" className="img-fluid" /></a>
                    <div className="course-name">
                      <h4><a href="instructor-profile.html">John Smith</a></h4>
                      <p>Instructor</p>
                    </div>
                  </div>
                  <div className="course-share d-flex align-items-center justify-content-center">
                    <a href="#"><i className="fa-regular fa-heart" /></a>
                  </div>
                </div>
                <h3 className="title"><a href="course-details.html">Responsive Web Design Essentials HTML5
                    CSS3 and Bootstrap</a></h3>
                <div className="course-info d-flex align-items-center">
                  <div className="rating-img d-flex align-items-center">
                    <img src="/img/icon/icon-01.svg" alt="Img" className="img-fluid" />
                    <p>10+ Lesson</p>
                  </div>
                  <div className="course-view d-flex align-items-center">
                    <img src="/img/icon/icon-02.svg" alt="Img" className="img-fluid" />
                    <p>11hr 30min</p>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="rating m-0">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span className="d-inline-block average-rating"><span>4.5</span> (15)</span>
                  </div>
                  <div className="all-btn all-category d-flex align-items-center">
                    <a href="checkout.html" className="btn btn-primary">BUY NOW</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="course-box trend-box">
            <div className="product trend-product">
              <div className="product-img">
                <a href="course-details.html">
                  <img className="img-fluid" alt="Img" src="/img/course/course-09.jpg" />
                </a>
                <div className="price">
                  <h3>$100 <span>$99.00</span></h3>
                </div>
              </div>
              <div className="product-content">
                <div className="course-group d-flex">
                  <div className="course-group-img d-flex">
                    <a href="instructor-profile.html"><img src="/img/user/user4.jpg" alt="Img" className="img-fluid" /></a>
                    <div className="course-name">
                      <h4><a href="instructor-profile.html">Lavern M.</a></h4>
                      <p>Instructor</p>
                    </div>
                  </div>
                  <div className="course-share d-flex align-items-center justify-content-center">
                    <a href="#"><i className="fa-regular fa-heart" /></a>
                  </div>
                </div>
                <h3 className="title"><a href="course-details.html">The Complete App Design Course - UX, UI
                    and Design Thinking</a></h3>
                <div className="course-info d-flex align-items-center">
                  <div className="rating-img d-flex align-items-center">
                    <img src="/img/icon/icon-01.svg" alt="Img" className="img-fluid" />
                    <p>8+ Lesson</p>
                  </div>
                  <div className="course-view d-flex align-items-center">
                    <img src="/img/icon/icon-02.svg" alt="Img" className="img-fluid" />
                    <p>8hr 30min</p>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="rating m-0">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span className="d-inline-block average-rating"><span>4.0</span> (15)</span>
                  </div>
                  <div className="all-btn all-category d-flex align-items-center">
                    <a href="checkout.html" className="btn btn-primary">BUY NOW</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="course-box trend-box">
            <div className="product trend-product">
              <div className="product-img">
                <a href="course-details.html">
                  <img className="img-fluid" alt="Img" src="/img/course/course-08.jpg" />
                </a>
                <div className="price">
                  <h3>$200 <span>$99.00</span></h3>
                </div>
              </div>
              <div className="product-content">
                <div className="course-group d-flex">
                  <div className="course-group-img d-flex">
                    <a href="instructor-profile.html"><img src="/img/user/user1.jpg" alt="Img" className="img-fluid" /></a>
                    <div className="course-name">
                      <h4><a href="instructor-profile.html">John Michael</a></h4>
                      <p>Instructor</p>
                    </div>
                  </div>
                  <div className="course-share d-flex align-items-center justify-content-center">
                    <a href="#"><i className="fa-regular fa-heart" /></a>
                  </div>
                </div>
                <h3 className="title"><a href="course-details.html">Learn JavaScript and Express to become a
                    professional JavaScript</a></h3>
                <div className="course-info d-flex align-items-center">
                  <div className="rating-img d-flex align-items-center">
                    <img src="/img/icon/icon-01.svg" alt="Img" className="img-fluid" />
                    <p>13+ Lesson</p>
                  </div>
                  <div className="course-view d-flex align-items-center">
                    <img src="/img/icon/icon-02.svg" alt="Img" className="img-fluid" />
                    <p>10hr 30min</p>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="rating m-0">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span className="d-inline-block average-rating"><span>4.0</span> (15)</span>
                  </div>
                  <div className="all-btn all-category d-flex align-items-center">
                    <a href="checkout.html" className="btn btn-primary">BUY NOW</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="course-box trend-box">
            <div className="product trend-product">
              <div className="product-img">
                <a href="course-details.html">
                  <img className="img-fluid" alt="Img" src="/img/course/course-09.jpg" />
                </a>
                <div className="price">
                  <h3>$300 <span>$99.00</span></h3>
                </div>
              </div>
              <div className="product-content">
                <div className="course-group d-flex">
                  <div className="course-group-img d-flex">
                    <a href="instructor-profile.html"><img src="/img/user/user3.jpg" alt="Img" className="img-fluid" /></a>
                    <div className="course-name">
                      <h4><a href="instructor-profile.html">John Smith</a></h4>
                      <p>Instructor</p>
                    </div>
                  </div>
                  <div className="course-share d-flex align-items-center justify-content-center">
                    <a href="#"><i className="fa-regular fa-heart" /></a>
                  </div>
                </div>
                <h3 className="title"><a href="course-details.html">Responsive Web Design Essentials HTML5
                    CSS3 and Bootstrap</a></h3>
                <div className="course-info d-flex align-items-center">
                  <div className="rating-img d-flex align-items-center">
                    <img src="/img/icon/icon-01.svg" alt="Img" className="img-fluid" />
                    <p>10+ Lesson</p>
                  </div>
                  <div className="course-view d-flex align-items-center">
                    <img src="/img/icon/icon-02.svg" alt="Img" className="img-fluid" />
                    <p>11hr 30min</p>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="rating m-0">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span className="d-inline-block average-rating"><span>4.0</span> (15)</span>
                  </div>
                  <div className="all-btn all-category d-flex align-items-center">
                    <a href="checkout.html" className="btn btn-primary">BUY NOW</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Feature Instructors */}
        <div className="feature-instructors">
          <div className="section-header aos" data-aos="fade-up">
            <div className="section-sub-head feature-head text-center">
              <h2>Featured Instructor</h2>
              <div className="section-text aos" data-aos="fade-up">
                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
                  accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.
                </p>
              </div>
            </div>
          </div>
          <div className="owl-carousel instructors-course owl-theme aos" data-aos="fade-up">
            <div className="instructors-widget">
              <div className="instructors-img ">
                <a href="instructor-list.html">
                  <img className="img-fluid" alt="Img" src="/img/user/user7.jpg" />
                </a>
              </div>
              <div className="instructors-content text-center">
                <h5><a href="instructor-profile.html">David Lee</a></h5>
                <p>Web Developer</p>
                <div className="student-count d-flex justify-content-center">
                  <i className="fa-solid fa-user-group" />
                  <span>50 Students</span>
                </div>
              </div>
            </div>
            <div className="instructors-widget">
              <div className="instructors-img">
                <a href="instructor-list.html">
                  <img className="img-fluid" alt="Img" src="/img/user/user8.jpg" />
                </a>
              </div>
              <div className="instructors-content text-center">
                <h5><a href="instructor-profile.html">Daziy Millar</a></h5>
                <p>PHP Expert</p>
                <div className="student-count d-flex justify-content-center">
                  <i className="fa-solid fa-user-group yellow" />
                  <span>50 Students</span>
                </div>
              </div>
            </div>
            <div className="instructors-widget">
              <div className="instructors-img">
                <a href="instructor-list.html">
                  <img className="img-fluid" alt="Img" src="/img/user/user9.jpg" />
                </a>
              </div>
              <div className="instructors-content text-center">
                <h5><a href="instructor-profile.html">Patricia Mendoza</a></h5>
                <p>Web Developer</p>
                <div className="student-count d-flex justify-content-center">
                  <i className="fa-solid fa-user-group violet" />
                  <span>50 Students</span>
                </div>
              </div>
            </div>
            <div className="instructors-widget">
              <div className="instructors-img">
                <a href="instructor-list.html">
                  <img className="img-fluid" alt="Img" src="/img/user/user10.jpg" />
                </a>
              </div>
              <div className="instructors-content text-center">
                <h5><a href="instructor-profile.html">Skyler Whites</a></h5>
                <p>UI Designer</p>
                <div className="student-count d-flex justify-content-center">
                  <i className="fa-solid fa-user-group orange" />
                  <span>50 Students</span>
                </div>
              </div>
            </div>
            <div className="instructors-widget">
              <div className="instructors-img ">
                <a href="instructor-list.html">
                  <img className="img-fluid" alt="Img" src="/img/user/user7.jpg" />
                </a>
              </div>
              <div className="instructors-content text-center">
                <h5><a href="instructor-profile.html">Patricia Mendoza</a></h5>
                <p>Java Developer</p>
                <div className="student-count d-flex justify-content-center">
                  <i className="fa-solid fa-user-group" />
                  <span>40 Students</span>
                </div>
              </div>
            </div>
            <div className="instructors-widget">
              <div className="instructors-img">
                <a href="instructor-list.html">
                  <img className="img-fluid" alt="Img" src="/img/user/user8.jpg" />
                </a>
              </div>
              <div className="instructors-content text-center">
                <h5><a href="instructor-profile.html">David Lee</a></h5>
                <p>Web Developer</p>
                <div className="student-count d-flex justify-content-center">
                  <i className="fa-solid fa-user-group" />
                  <span>50 Students</span>
                </div>
              </div>
            </div>
            <div className="instructors-widget">
              <div className="instructors-img ">
                <a href="instructor-list.html">
                  <img className="img-fluid" alt="Img" src="/img/user/user9.jpg" />
                </a>
              </div>
              <div className="instructors-content text-center">
                <h5><a href="instructor-profile.html">Daziy Millar</a></h5>
                <p>PHP Expert</p>
                <div className="student-count d-flex justify-content-center">
                  <i className="fa-solid fa-user-group" />
                  <span>40 Students</span>
                </div>
              </div>
            </div>
            <div className="instructors-widget">
              <div className="instructors-img ">
                <a href="instructor-list.html">
                  <img className="img-fluid" alt="Img" src="/img/user/user10.jpg" />
                </a>
              </div>
              <div className="instructors-content text-center">
                <h5><a href="instructor-profile.html">Patricia Mendoza</a></h5>
                <p>Web Developer</p>
                <div className="student-count d-flex justify-content-center">
                  <i className="fa-solid fa-user-group" />
                  <span>20 Students</span>
                </div>
              </div>
            </div>
            <div className="instructors-widget">
              <div className="instructors-img ">
                <a href="instructor-list.html">
                  <img className="img-fluid" alt="Img" src="/img/user/user7.jpg" />
                </a>
              </div>
              <div className="instructors-content text-center">
                <h5><a href="instructor-profile.html">Skyler Whites</a></h5>
                <p>UI Designer</p>
                <div className="student-count d-flex justify-content-center">
                  <i className="fa-solid fa-user-group" />
                  <span>30 Students</span>
                </div>
              </div>
            </div>
            <div className="instructors-widget">
              <div className="instructors-img">
                <a href="instructor-list.html">
                  <img className="img-fluid" alt="Img" src="/img/user/user8.jpg" />
                </a>
              </div>
              <div className="instructors-content text-center">
                <h5><a href="instructor-profile.html">Patricia Mendoza</a></h5>
                <p>Java Developer</p>
                <div className="student-count d-flex justify-content-center">
                  <i className="fa-solid fa-user-group" />
                  <span>40 Students</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Feature Instructors */}
      </div>
    </section>
    {/* /Trending Course */}
    {/* Leading Companies */}
    <section className="section lead-companies">
      <div className="container">
        <div className="section-header aos" data-aos="fade-up">
          <div className="section-sub-head feature-head text-center">
            <span>Trusted By</span>
            <h2>500+ Leading Universities And Companies</h2>
          </div>
        </div>
        <div className="lead-group aos" data-aos="fade-up">
          <div className="lead-group-slider owl-carousel owl-theme">
            <div className="item">
              <div className="lead-img">
                <img className="img-fluid" alt="Img" src="/img/lead-01.png" />
              </div>
            </div>
            <div className="item">
              <div className="lead-img">
                <img className="img-fluid" alt="Img" src="/img/lead-02.png" />
              </div>
            </div>
            <div className="item">
              <div className="lead-img">
                <img className="img-fluid" alt="Img" src="/img/lead-03.png" />
              </div>
            </div>
            <div className="item">
              <div className="lead-img">
                <img className="img-fluid" alt="Img" src="/img/lead-04.png" />
              </div>
            </div>
            <div className="item">
              <div className="lead-img">
                <img className="img-fluid" alt="Img" src="/img/lead-05.png" />
              </div>
            </div>
            <div className="item">
              <div className="lead-img">
                <img className="img-fluid" alt="Img" src="/img/lead-06.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /Leading Companies */}
    {/* Share Knowledge */}
    <section className="section share-knowledge">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="knowledge-img aos" data-aos="fade-up">
              <img src="/img/share.png" alt="Img" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="join-mentor aos" data-aos="fade-up">
              <h2>Want to share your knowledge? Join us a Mentor</h2>
              <p>High-definition video is video of higher resolution and quality than standard-definition.
                While there is no standardized meaning for high-definition, generally any video.</p>
              <ul className="course-list">
                <li><i className="fa-solid fa-circle-check" />Best Courses</li>
                <li><i className="fa-solid fa-circle-check" />Top rated Instructors</li>
              </ul>
              <div className="all-btn all-category d-flex align-items-center">
                <a href="instructor-list.html" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /Share Knowledge */}
    {/* Users Love */}
    <section className="section user-love">
      <div className="container">
        <div className="section-header white-header aos" data-aos="fade-up">
          <div className="section-sub-head feature-head text-center">
            <span>Check out these real reviews</span>
            <h2>Users-love-us Don't take it from us.</h2>
          </div>
        </div>
      </div>
    </section>
    {/* /Users Love */}
    {/* Say testimonial Four */}
    <section className="testimonial-four">
      <div className="review">
        <div className="container">
          <div className="testi-quotes">
            <img src="/img/qute.png" alt="Img" />
          </div>
          <div className="mentor-testimonial lazy slider aos" data-aos="fade-up" data-sizes="50vw ">
            <div className="d-flex justify-content-center">
              <div className="testimonial-all d-flex justify-content-center">
                <div className="testimonial-two-head text-center align-items-center d-flex">
                  <div className="testimonial-four-saying ">
                    <div className="testi-right">
                      <img src="/img/qute-01.png" alt="Img" />
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the
                      1500s, when an unknown printer took a galley of type and scrambled it to
                      make a type specimen book.</p>
                    <div className="four-testimonial-founder">
                      <div className="fount-about-img">
                        <a href="instructor-profile.html"><img src="/img/user/user1.jpg" alt="Img" className="img-fluid" /></a>
                      </div>
                      <h3><a href="instructor-profile.html">Daziy Millar</a></h3>
                      <span>Founder of Awesomeux Technology</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="testimonial-all d-flex justify-content-center">
                <div className="testimonial-two-head text-center align-items-center d-flex">
                  <div className="testimonial-four-saying ">
                    <div className="testi-right">
                      <img src="/img/qute-01.png" alt="Img" />
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the
                      1500s, when an unknown printer took a galley of type and scrambled it to
                      make a type specimen book.</p>
                    <div className="four-testimonial-founder">
                      <div className="fount-about-img">
                        <a href="instructor-profile.html"><img src="/img/user/user3.jpg" alt="Img" className="img-fluid" /></a>
                      </div>
                      <h3><a href="instructor-profile.html">john smith</a></h3>
                      <span>Founder of Awesomeux Technology</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="testimonial-all d-flex justify-content-center">
                <div className="testimonial-two-head text-center align-items-center d-flex">
                  <div className="testimonial-four-saying ">
                    <div className="testi-right">
                      <img src="/img/qute-01.png" alt="Img" />
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the
                      1500s, when an unknown printer took a galley of type and scrambled it to
                      make a type specimen book.</p>
                    <div className="four-testimonial-founder">
                      <div className="fount-about-img">
                        <a href="instructor-profile.html"><img src="/img/user/user2.jpg" alt="Img" className="img-fluid" /></a>
                      </div>
                      <h3><a href="instructor-profile.html">David Lee</a></h3>
                      <span>Founder of Awesomeux Technology</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /Say testimonial Four */}
    {/* Become An Instructor */}
    <section className="section become-instructors aos" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 d-flex">
            <div className="student-mentor cube-instuctor ">
              <h4>Become An Instructor</h4>
              <div className="row">
                <div className="col-lg-7 col-md-12">
                  <div className="top-instructors">
                    <p>Top instructors from around the world teach millions of students on
                      Mentoring.</p>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12">
                  <div className="mentor-img">
                    <img className="img-fluid" alt="Img" src="/img/icon/become-02.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 d-flex">
            <div className="student-mentor yellow-mentor">
              <h4>Transform Access To Education</h4>
              <div className="row">
                <div className="col-lg-8 col-md-12">
                  <div className="top-instructors">
                    <p>Create an account to receive our newsletter, course recommendations and
                      promotions.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="mentor-img">
                    <img className="img-fluid" alt="Img" src="/img/icon/become-01.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /Become An Instructor */}
    {/* Latest Blog */}
    <section className="section latest-blog">
      <div className="container">
        <div className="section-header aos" data-aos="fade-up">
          <div className="section-sub-head feature-head text-center mb-0">
            <h2>Latest Blogs</h2>
            <div className="section-text aos" data-aos="fade-up">
              <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
                accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.</p>
            </div>
          </div>
        </div>
        <div className="owl-carousel blogs-slide owl-theme aos" data-aos="fade-up">
          <div className="instructors-widget blog-widget">
            <div className="instructors-img">
              <a href="blog-list.html">
                <img className="img-fluid" alt="Img" src="/img/blog/blog-01.jpg" />
              </a>
            </div>
            <div className="instructors-content text-center">
              <h5><a href="blog-list.html">Attract More Attention Sales And Profits</a></h5>
              <p>Marketing</p>
              <div className="student-count d-flex justify-content-center">
                <i className="fa-solid fa-calendar-days" />
                <span>Jun 15, 2024</span>
              </div>
            </div>
          </div>
          <div className="instructors-widget blog-widget">
            <div className="instructors-img">
              <a href="blog-list.html">
                <img className="img-fluid" alt="Img" src="/img/blog/blog-02.jpg" />
              </a>
            </div>
            <div className="instructors-content text-center">
              <h5><a href="blog-list.html">11 Tips to Help You Get New Clients</a></h5>
              <p>Sales Order</p>
              <div className="student-count d-flex justify-content-center">
                <i className="fa-solid fa-calendar-days" />
                <span>May 20, 2024</span>
              </div>
            </div>
          </div>
          <div className="instructors-widget blog-widget">
            <div className="instructors-img">
              <a href="blog-list.html">
                <img className="img-fluid" alt="Img" src="/img/blog/blog-03.jpg" />
              </a>
            </div>
            <div className="instructors-content text-center">
              <h5><a href="blog-list.html">An Overworked Newspaper Editor</a></h5>
              <p>Design</p>
              <div className="student-count d-flex justify-content-center">
                <i className="fa-solid fa-calendar-days" />
                <span>May 25, 2024</span>
              </div>
            </div>
          </div>
          <div className="instructors-widget blog-widget">
            <div className="instructors-img">
              <a href="blog-list.html">
                <img className="img-fluid" alt="Img" src="/img/blog/blog-04.jpg" />
              </a>
            </div>
            <div className="instructors-content text-center">
              <h5><a href="blog-list.html">A Solution Built for Teachers</a></h5>
              <p>Seo</p>
              <div className="student-count d-flex justify-content-center">
                <i className="fa-solid fa-calendar-days" />
                <span>Jul 15, 2024</span>
              </div>
            </div>
          </div>
          <div className="instructors-widget blog-widget">
            <div className="instructors-img">
              <a href="blog-list.html">
                <img className="img-fluid" alt="Img" src="/img/blog/blog-02.jpg" />
              </a>
            </div>
            <div className="instructors-content text-center">
              <h5><a href="blog-list.html">Attract More Attention Sales And Profits</a></h5>
              <p>Marketing</p>
              <div className="student-count d-flex justify-content-center">
                <i className="fa-solid fa-calendar-days" />
                <span>Sep 25, 2024</span>
              </div>
            </div>
          </div>
          <div className="instructors-widget blog-widget">
            <div className="instructors-img">
              <a href="blog-list.html">
                <img className="img-fluid" alt="Img" src="/img/blog/blog-03.jpg" />
              </a>
            </div>
            <div className="instructors-content text-center">
              <h5><a href="blog-list.html">An Overworked Newspaper Editor</a></h5>
              <p>Marketing</p>
              <div className="student-count d-flex justify-content-center">
                <i className="fa-solid fa-calendar-days" />
                <span>May 25, 2024</span>
              </div>
            </div>
          </div>
          <div className="instructors-widget blog-widget">
            <div className="instructors-img">
              <a href="blog-list.html">
                <img className="img-fluid" alt="Img" src="/img/blog/blog-04.jpg" />
              </a>
            </div>
            <div className="instructors-content text-center">
              <h5><a href="blog-list.html">A Solution Built for Teachers</a></h5>
              <p>Analysis</p>
              <div className="student-count d-flex justify-content-center">
                <i className="fa-solid fa-calendar-days" />
                <span>May 15, 2024</span>
              </div>
            </div>
          </div>
          <div className="instructors-widget blog-widget">
            <div className="instructors-img">
              <a href="blog-list.html">
                <img className="img-fluid" alt="Img" src="/img/blog/blog-02.jpg" />
              </a>
            </div>
            <div className="instructors-content text-center">
              <h5><a href="blog-list.html">11 Tips to Help You Get New Clients</a></h5>
              <p>Development</p>
              <div className="student-count d-flex justify-content-center">
                <i className="fa-solid fa-calendar-days" />
                <span>Jun 20, 2024</span>
              </div>
            </div>
          </div>
          <div className="instructors-widget blog-widget">
            <div className="instructors-img">
              <a href="blog-list.html">
                <img className="img-fluid" alt="Img" src="/img/blog/blog-03.jpg" />
              </a>
            </div>
            <div className="instructors-content text-center">
              <h5><a href="blog-list.html">An Overworked Newspaper Editor</a></h5>
              <p>Sales</p>
              <div className="student-count d-flex justify-content-center">
                <i className="fa-solid fa-calendar-days" />
                <span>May 25, 2024</span>
              </div>
            </div>
          </div>
          <div className="instructors-widget blog-widget">
            <div className="instructors-img">
              <a href="blog-list.html">
                <img className="img-fluid" alt="Img" src="/img/blog/blog-04.jpg" />
              </a>
            </div>
            <div className="instructors-content text-center">
              <h5><a href="blog-list.html">A Solution Built for Teachers</a></h5>
              <p>Marketing</p>
              <div className="student-count d-flex justify-content-center">
                <i className="fa-solid fa-calendar-days" />
                <span>April 15, 2024</span>
              </div>
            </div>
          </div>
        </div>
        <div className="enroll-group aos" data-aos="fade-up">
          <div className="row ">
            <div className="col-lg-4 col-md-6">
              <div className="total-course d-flex align-items-center">
                <div className="blur-border">
                  <div className="enroll-img ">
                    <img src="/img/icon/icon-07.svg" alt="Img" className="img-fluid" />
                  </div>
                </div>
                <div className="course-count">
                  <h3><span className="counterUp">253,085</span></h3>
                  <p>STUDENTS ENROLLED</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="total-course d-flex align-items-center">
                <div className="blur-border">
                  <div className="enroll-img ">
                    <img src="/img/icon/icon-08.svg" alt="Img" className="img-fluid" />
                  </div>
                </div>
                <div className="course-count">
                  <h3><span className="counterUp">1,205</span></h3>
                  <p>TOTAL COURSES</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="total-course d-flex align-items-center">
                <div className="blur-border">
                  <div className="enroll-img ">
                    <img src="/img/icon/icon-09.svg" alt="Img" className="img-fluid" />
                  </div>
                </div>
                <div className="course-count">
                  <h3><span className="counterUp">127</span></h3>
                  <p>COUNTRIES</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lab-course">
          <div className="section-header aos" data-aos="fade-up">
            <div className="section-sub-head feature-head text-center">
              <h2>Unlimited access to 360+ courses <br />and 1,600+ hands-on labs</h2>
            </div>
          </div>
          <div className="icon-group aos" data-aos="fade-up">
            <div className="offset-lg-1 col-lg-12">
              <div className="row">
                <div className="col-lg-1 col-3">
                  <div className="total-course d-flex align-items-center">
                    <div className="blur-border">
                      <div className="enroll-img ">
                        <img src="/img/icon/icon-09.svg" alt="Img" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1 col-3">
                  <div className="total-course d-flex align-items-center">
                    <div className="blur-border">
                      <div className="enroll-img ">
                        <img src="/img/icon/icon-10.svg" alt="Img" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1 col-3">
                  <div className="total-course d-flex align-items-center">
                    <div className="blur-border">
                      <div className="enroll-img ">
                        <img src="/img/icon/icon-16.svg" alt="Img" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1 col-3">
                  <div className="total-course d-flex align-items-center">
                    <div className="blur-border">
                      <div className="enroll-img ">
                        <img src="/img/icon/icon-12.svg" alt="Img" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1 col-3">
                  <div className="total-course d-flex align-items-center">
                    <div className="blur-border">
                      <div className="enroll-img ">
                        <img src="/img/icon/icon-13.svg" alt="Img" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1 col-3">
                  <div className="total-course d-flex align-items-center">
                    <div className="blur-border">
                      <div className="enroll-img ">
                        <img src="/img/icon/icon-14.svg" alt="Img" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1 col-3">
                  <div className="total-course d-flex align-items-center">
                    <div className="blur-border">
                      <div className="enroll-img ">
                        <img src="/img/icon/icon-15.svg" alt="Img" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1 col-3">
                  <div className="total-course d-flex align-items-center">
                    <div className="blur-border">
                      <div className="enroll-img ">
                        <img src="/img/icon/icon-16.svg" alt="Img" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1 col-3">
                  <div className="total-course d-flex align-items-center">
                    <div className="blur-border">
                      <div className="enroll-img ">
                        <img src="/img/icon/icon-17.svg" alt="Img" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1 col-3">
                  <div className="total-course d-flex align-items-center">
                    <div className="blur-border">
                      <div className="enroll-img ">
                        <img src="/img/icon/icon-18.svg" alt="Img" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /Latest Blog */}
    {/* Footer */}
    <footer className="footer">
      {/* Footer Top */}
      <div className="footer-top aos" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              {/* Footer Widget */}
              <div className="footer-widget footer-about">
                <div className="footer-logo">
                  <img src="/img/logo.svg" alt="logo" />
                </div>
                <div className="footer-about-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris</p>
                </div>
              </div>
              {/* /Footer Widget */}
            </div>
            <div className="col-lg-2 col-md-6">
              {/* Footer Widget */}
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
              {/* /Footer Widget */}
            </div>
            <div className="col-lg-2 col-md-6">
              {/* Footer Widget */}
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
              {/* /Footer Widget */}
            </div>
            <div className="col-lg-4 col-md-6">
              {/* Footer Widget */}
              <div className="footer-widget footer-contact">
                <h2 className="footer-title">News letter</h2>
                <div className="news-letter">
                  <form>
                    <input type="text" className="form-control" placeholder="Enter your email address" name="email" />
                  </form>
                </div>
                <div className="footer-contact-info">
                  <div className="footer-address">
                    <img src="/img/icon/icon-20.svg" alt="Img" className="img-fluid" />
                    <p> 3556 Beech Street, San Francisco,<br /> California, CA 94108 </p>
                  </div>
                  <p>
                    <img src="/img/icon/icon-19.svg" alt="Img" className="img-fluid" />
                    <a href="https://dreamslms.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="2b4f594e4a46584746586b4e534a465b474e05484446">[email&nbsp;protected]</a>
                  </p>
                  <p className="mb-0">
                    <img src="/img/icon/icon-21.svg" alt="Img" className="img-fluid" />
                    +19 123-456-7890
                  </p>
                </div>
              </div>
              {/* /Footer Widget */}
            </div>
          </div>
        </div>
      </div>
      {/* /Footer Top */}
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          {/* Copyright */}
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
                  <p className="mb-0">© 2024 DreamsLMS. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
          {/* /Copyright */}
        </div>
      </div>
      {/* /Footer Bottom */}
    </footer>
    {/* /Footer */}
  </div>
  {/* /Main Wrapper */}
  {/* jQuery */}
  {/* Bootstrap Core JS */}
  {/* counterup JS */}
  {/* Select2 JS */}
  {/* Owl Carousel */}
  {/* Slick Slider */}
  {/* Aos */}
  {/* Custom JS */}
  {/* Mirrored from dreamslms.dreamstechnologies.com/html/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 27 Dec 2024 03:28:28 GMT */}
</div>
  )
}

export default Home