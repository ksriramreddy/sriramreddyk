import React from "react";
import { motion } from "framer-motion";
import { frameMotion } from "../utils/frameMotion";

function Experience() {
  const experience = {
    company: "DataSpeaks",
    logo: "https://res.cloudinary.com/dqnmzdsoy/image/upload/v1762268064/vs9bcgi6ircqbslzppvo.png",
    role: "Fullstack Developer Intern",
    location: "Remote",
    startDate: "Oct 2024",
    endDate: "Feb 2025",
    details: [
      "Contributed 70% frontend (React.js) and 20% backend (Node.js, Express.js) development, improving performance by 30%.",
      "Built and integrated RESTful APIs, implemented JWT authentication, and optimized MongoDB queries.",
      "Collaborated in Agile sprints, ensuring scalable, responsive, and secure web app delivery."
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Agile", "Tailwind","HTML5","CSS"],
  };

  return (
    <div
      id="experience"
      className="flex items-center flex-col min-h-full mt-32 p-4 justify-center overflow-hidden"
    >
      <div className=' text-4xl mb-5'>
            <h1 className=' text-center  mx-auto'>Work <span className='border-b-4 border border-l-transparent border-t-transparent border-r-transparent border-b-green-500'>Experience</span></h1>
        </div>
      <motion.div
        variants={frameMotion(0, 0, -200, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="w-full lg:w-5/6 bg-gray-900 rounded-3xl shadow-xl p-6 md:p-10 transition-all duration-700 hover:-translate-y-3"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* LEFT: Company Logo */}
          <div className="flex-shrink-0 w-full md:w-1/3 flex items-center justify-center">
            <div className="bg-gray-800 rounded-2xl shadow-lg w-64 h-52 md:w-72 md:h-60 flex items-center justify-center">
              <img
                src={experience.logo}
                alt={`${experience.company} logo`}
                className="object-contain w-48 md:w-72 h-auto"
              />
            </div>
          </div>

          {/* RIGHT: Experience Details */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {experience.role}
            </h2>
            <h3 className="text-green-400 text-xl mt-2 font-semibold">
              {experience.company} – [{experience.location}]
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              {experience.startDate} – {experience.endDate}
            </p>

            {/* Description Bullet Points */}
            <ul className="list-disc mt-5 text-gray-300 text-lg leading-8 pl-5 space-y-2">
              {experience.details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            {/* Skills */}
            <div className="flex flex-wrap mt-6">
              {experience.skills.map((skill, i) => (
                <span
                  key={i}
                  className="textshadow m-1 text-xs text-green-500 p-1 pl-2 pr-2 rounded-lg bg-gray-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Experience;
