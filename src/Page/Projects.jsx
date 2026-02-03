import React from 'react';

// ভিডিও ফাইলগুলো ইম্পোর্ট
import panchagarhVid from '../assets/panchagarh.mp4';
import sugarMillVid from '../assets/sugar-mill.mp4';
import saidpurVid from '../assets/saidpur.mp4';

const Projects = () => {
  return (
    <div className="py-10 bg-base-100 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-16">My Travel Highlights</h2>
      
      <div className="flex flex-wrap justify-center gap-20">
        
        {/* কার্ড ১ - পঞ্চগড় */}
        <div className="flex flex-col items-center gap-4">
          <div className="hover-3d">
            <figure className="w-60 h-80 rounded-2xl shadow-2xl overflow-hidden bg-black">
              <video 
                src={panchagarhVid} 
                autoPlay loop muted 
                onMouseOver={e => e.target.muted = false} 
                onMouseOut={e => e.target.muted = true}
                playsInline
                className="w-full h-full object-cover cursor-pointer">
              </video>
            </figure>
            <div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div>
          </div>
          <h3 className="text-xl font-semibold text-primary">Panchagarh</h3>
        </div>

        {/* কার্ড ২ - জয়পুরহাট সুগার মিল */}
        <div className="flex flex-col items-center gap-4">
          <div className="hover-3d">
            <figure className="w-60 h-80 rounded-2xl shadow-2xl overflow-hidden bg-black">
              <video 
                src={sugarMillVid} 
                autoPlay loop muted 
                onMouseOver={e => e.target.muted = false} 
                onMouseOut={e => e.target.muted = true}
                playsInline
                className="w-full h-full object-cover cursor-pointer">
              </video>
            </figure>
            <div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div>
          </div>
          <h3 className="text-xl font-semibold text-primary">Joypurhat Sugar Mill</h3>
        </div>

        {/* কার্ড ৩ - সৈয়দপুর */}
        <div className="flex flex-col items-center gap-4">
          <div className="hover-3d">
            <figure className="w-60 h-80 rounded-2xl shadow-2xl overflow-hidden bg-black">
              <video 
                src={saidpurVid} 
                autoPlay loop muted 
                onMouseOver={e => e.target.muted = false} 
                onMouseOut={e => e.target.muted = true}
                playsInline
                className="w-full h-full object-cover cursor-pointer">
              </video>
            </figure>
            <div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div>
          </div>
          <h3 className="text-xl font-semibold text-primary">Saidpur</h3>
        </div>

      </div>

      <div className="text-center mt-20">
        <p className="text-gray-500 italic text-lg">Hover to hear the sound and see the 3D magic!</p>
      </div>
    </div>
  );
};

export default Projects;