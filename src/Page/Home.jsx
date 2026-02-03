import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Component/Navbar.jsx';

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
            <img
              src="https://scontent.fdac177-1.fna.fbcdn.net/v/t39.30808-6/561777478_2143122209514759_2719105854578216340_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeE3tPGNqy_Ba2KREmW2D8qpFY_plc595pcVj-mVzn3ml0sj2ZWWx-ZLdS-ObCGa7A4CYda7ZLtsZyBOrdaNoL_6&_nc_ohc=rcDouXGdQD0Q7kNvwE-esE6&_nc_oc=Adl3pgbPWZOCYzSvBRcQDZlFZ9EtU86Qt8cX2tXJQtGV5IHga7oLizCaRiurkV6VnZU&_nc_zt=23&_nc_ht=scontent.fdac177-1.fna&_nc_gid=uQYc8O5yJT7fGpMfzvezAQ&oh=00_Afv5W6G50MRPLoKHiCPRWwg6nTqfMDOe814ROCG4M1wceA&oe=6987714B"
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

                <a 
                  href="/Shafinur_Rahman_CV.pdf" 
                  download="Shafinur_Rahman_CV.pdf" 
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