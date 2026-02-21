import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Component/Navbar.jsx';
import myImage from '../assets/Shafinur.png';
import myCV from '../assets/Shafinur_Rahman_CV.pdf';
const Home = () => {
  const location = useLocation();

  return (
    <div className="bg-base-100 text-base-content min-h-screen">
      <Navbar />
      
      {/* শুধুমাত্র হোম পেজে এই Hero সেকশনটি দেখাবে */}
      {location.pathname === '/' && (
        <div className="hero min-h-[80vh] px-4 lg:px-20">
          <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:gap-20">
            {/* আপনার ছবি */}
            <img src={myImage}  
              className="max-w-xs lg:max-w-sm rounded-3xl shadow-2xl border-4 border-primary" 
              alt="Shafinur Rahman"
              
            />
            
            {/* আপনার তথ্য */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">I'm <span className="text-primary">Shafinur Rahman</span></h1>
              {/* text-accent নাইট থিমে বেশি ফুটে ওঠে */}
              <h2 className="text-2xl font-semibold mt-3 text-accent">Software Engineer</h2>
              <p className="py-6 text-lg leading-relaxed max-w-xl opacity-80">
                A motivated Software Engineering student with a strong foundation in 
                programming and a passion for practical software development. 
                I bridge technology and creativity through my skills in C, C++, Java, and Video Editing.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button className="btn btn-primary text-white px-8">Hire Me</button>

               <a href={myCV} download="Shafinur_Rahman_CV.pdf"
                  className="btn btn-outline btn-primary text-white px-8"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* অন্যান্য পেজের কন্টেন্ট এখানে লোড হবে */}
      <div className="container mx-auto p-4 min-h-[60vh]">
        <Outlet />
      </div>

      {/* ফুটার - bg-neutral ডার্ক থিমের জন্য পারফেক্ট */}
      <footer className="footer footer-center p-8 bg-neutral text-neutral-content mt-10">
        <aside>
          <p className="font-medium text-lg">
            Copyright © 2026 - All right reserved by <span className="text-primary font-bold">Shafinur Rahman</span>
          </p>
          <p className="opacity-70">Software Engineering Student | Photographer | Developer</p>
        </aside>
      </footer>
    </div>
  );
};

export default Home;