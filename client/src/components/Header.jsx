import { useEffect } from 'react';
import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('.header');
            if (window.scrollY > 0) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (<header className="header header-style">
        <div className="header-fixed">
            <nav className="navbar navbar-expand-lg header-nav scroll-sticky">
                <div className="container">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand logo">
                            <h3 className="text-2xl font-semibold">&lt;CodeExpress/&gt;</h3>
                        </Link>
                    </div>
                    <div className="main-menu-wrapper">
                        <div className="menu-header"></div>
                        <ul className="main-nav">
                            <li className="has-submenu active">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="has-submenu">
                                <Link to="#">Instructor <i className="fas fa-chevron-down" /></Link>
                                <ul className="submenu">
                                    <li><Link to="/instructor-list">Instructor List</Link></li>
                                    <li><Link to="/instructor-dashboard">Instructor Dashboard</Link></li>
                                    <li><Link to="/instructor-profile">My Profile</Link></li>
                                    <li><Link to="/instructor-courses">My Courses</Link></li>
                                    <li><Link to="/instructor-wishlist">Wishlist</Link></li>
                                    <li><Link to="/instructor-reviews">Reviews</Link></li>
                                    <li><Link to="/instructor-quiz">Quiz Attempts</Link></li>
                                    <li><Link to="/instructor-orders">Orders</Link></li>
                                    <li><Link to="/instructor-qa">Q&A</Link></li>
                                    <li><Link to="/instructor-referrals">Referrals</Link></li>
                                    <li><Link to="/instructor-messages">Messages</Link></li>
                                    <li><Link to="/instructor-tickets">Support Tickets</Link></li>
                                    <li><Link to="/instructor-notifications">Notifications</Link></li>
                                    <li><Link to="/instructor-settings">Settings</Link></li>
                                </ul>
                            </li>
                            <li className="has-submenu">
                                <Link to="#">Student <i className="fas fa-chevron-down" /></Link>
                                <ul className="submenu first-submenu">
                                    <li><Link to="/student-dashboard">Student Dashboard</Link></li>
                                    <li><Link to="/student-profile">My Profile</Link></li>
                                    <li><Link to="/student-courses">Enrolled Courses</Link></li>
                                    <li><Link to="/student-wishlist">Wishlist</Link></li>
                                    <li><Link to="/student-reviews">Reviews</Link></li>
                                    <li><Link to="/student-quiz">Quiz Attempts</Link></li>
                                    <li><Link to="/student-orders">Orders</Link></li>
                                    <li><Link to="/student-qa">Q&A</Link></li>
                                    <li><Link to="/student-referrals">Referrals</Link></li>
                                    <li><Link to="/student-messages">Messages</Link></li>
                                    <li><Link to="/student-tickets">Support Tickets</Link></li>
                                    <li><Link to="/student-settings">Settings</Link></li>
                                </ul>
                            </li>
                            <li className="has-submenu">
                                <Link to="#">Pages <i className="fas fa-chevron-down" /></Link>
                                <ul className="submenu">
                                    <li><Link to="/notifications">Notifications</Link></li>
                                    <li><Link to="/pricing-plan">Pricing Plan</Link></li>
                                    <li><Link to="/wishlist">Wishlist</Link></li>
                                    <li><Link to="/course-list">Courses</Link></li>
                                    <li><Link to="/faq">FAQ</Link></li>
                                    <li><Link to="/support">Support</Link></li>
                                    <li><Link to="/cart">Cart</Link></li>
                                    <li><Link to="/checkout">Checkout</Link></li>
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/register">Register</Link></li>
                                    <li><Link to="/forgot-password">Forgot Password</Link></li>
                                </ul>
                            </li>
                            <li className="has-submenu">
                                <Link to="#">Blog <i className="fas fa-chevron-down" /></Link>
                                <ul className="submenu">
                                    <li><Link to="/blog-list">Blog List</Link></li>
                                    <li><Link to="/blog-details">Blog Details</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <ul className="nav header-navbar-rht">
                        <li className="nav-item">
                            <div>
                                <Link to="javascript:void(0);" id="dark-mode-toggle" className="dark-mode-toggle">
                                    <i className="fa-solid fa-moon" />
                                </Link>
                                <Link to="javascript:void(0);" id="light-mode-toggle" className="dark-mode-toggle">
                                    <i className="fa-solid fa-sun" />
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link header-sign">Signin</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/register" className="nav-link header-login">Signup</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>

    )
}

export default Header


