import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md px-4 lg:px-10">
      <div className="flex-1">
        {/* লোগো বা আপনার নাম */}
        <Link to="/" className="text-2xl font-bold text-primary">MyPortfolio</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 font-semibold">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          {/* এখন এটি সরাসরি লিঙ্ক হিসেবে কাজ করবে */}
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;