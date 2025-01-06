import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="bg-blue-700 p-4 fixed w-full z-10 top-0 shadow-lg">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-white text-2xl font-semibold">CodeXpress</div>
                
                {/* Hamburger Icon for Mobile */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-white">
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
                
                {/* Navigation Links (Desktop) */}
                <div className="hidden lg:flex space-x-8">
                    <ul className="flex space-x-8">
                        <li><a href="/" className="text-white hover:text-yellow-300">Home</a></li>
                        <li><a href="#about" className="text-white hover:text-yellow-300">About</a></li>
                        <li><a href="/courses" className="text-white hover:text-yellow-300">Courses</a></li>
                        <li><a href="#contact" className="text-white hover:text-yellow-300">Contact</a></li>
                        <li><a href="/register" className="bg-yellow-500 text-black rounded-full shadow-lg hover:bg-yellow-600 transition-all px-4 py-3">Sign Up</a></li>
                    </ul>
                </div>

                {/* Mobile Navigation Links */}
                <div className={`lg:hidden absolute top-0 right-0 bg-blue-700 w-full h-screen transition-all ${isMenuOpen ? "block" : "hidden"}`}>
                    <ul className="flex flex-col items-center justify-center space-y-6 pt-16">
                        <li><a href="/" onClick={closeMenu} className="text-white hover:text-yellow-300">Home</a></li>
                        <li><a href="#about" onClick={closeMenu} className="text-white hover:text-yellow-300">About</a></li>
                        <li><a href="/courses" onClick={closeMenu} className="text-white hover:text-yellow-300">Courses</a></li>
                        <li><a href="#contact" onClick={closeMenu} className="text-white hover:text-yellow-300">Contact</a></li>
                        <li><a href="/register" onClick={closeMenu} className="bg-yellow-500 text-black rounded-full shadow-lg hover:bg-yellow-600 transition-all px-6 py-3">Sign Up</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
