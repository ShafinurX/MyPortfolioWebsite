import React from 'react';

const About = () => {
  return (
    <div className="py-10 px-5 lg:px-20 min-h-screen bg-base-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-primary">About Me</h2>

        {/* summary Section */}
        <div className="bg-base-200 p-8 rounded-2xl mb-10 shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Professional Summary</h3>
          <p className="text-lg leading-relaxed">
            I am a Software Engineering student at the University of Frontier Technology. 
            Beyond my technical studies in C, C++, and Java, I am an experienced portrait 
            photographer and a video editing trainee. I bridge the gap between technology 
            and creativity through my work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education & Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-5 border-b-2 border-primary w-fit">Education</h3>
            <div className="mb-6">
              <p className="font-bold">B.Sc. in Software Engineering</p>
              <p>University of Frontier Technology (2024 - Running)</p>
            </div>
            <div className="mb-10">
              <p className="font-bold">HSC (Science)</p>
              <p>Government Science College, Tejgaon (2022-23)</p>
            </div>

            <h3 className="text-2xl font-bold mb-5 border-b-2 border-primary w-fit">Experience</h3>
            <ul className="list-disc ml-5 space-y-2">
              <li><strong>Portrait Photographer:</strong> Freelance (2019 - Present)</li>
              <li><strong>Member:</strong> College Photography Club</li>
              <li><strong>Video Editing Trainee:</strong> Dropoutskool (Ongoing)</li>
            </ul>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-bold mb-5 border-b-2 border-primary w-fit">Technical Skills</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {['C', 'C++', 'Java', 'Python (Beginner)', 'React', 'Tailwind CSS'].map(skill => (
                <div key={skill} className="badge badge-primary badge-outline p-4">{skill}</div>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-5 border-b-2 border-primary w-fit">Creative Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['Portrait Photography', 'Photo Editing', 'Video Editing'].map(skill => (
                <div key={skill} className="badge badge-secondary badge-outline p-4">{skill}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;