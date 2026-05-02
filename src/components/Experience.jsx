import React from "react";
import { motion } from "framer-motion";
import { frameMotion } from "../utils/frameMotion";
import { FaLink } from "react-icons/fa";
import { experiences } from "../assets/data/data";

function Experience() {
  return (
    <div
      id="experience"
      className="flex items-center flex-col min-h-full mt-32 p-4 justify-center overflow-hidden"
    >
      <div className="text-4xl mb-10">
        <h1 className="text-center mx-auto">
          Work{" "}
          <span className="border-b-4 border border-l-transparent border-t-transparent border-r-transparent border-b-green-500">
            Experience
          </span>
        </h1>
      </div>

      <div className="flex flex-col gap-8 w-full lg:w-5/6">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            variants={frameMotion(0, 0, -200, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="w-full bg-gray-900 rounded-3xl shadow-xl p-6 md:p-10 transition-all duration-700 hover:-translate-y-3"
          >
            <div className="flex flex-col gap-5">
              {/* Header: Logo + Role + Badge */}
              <div className="flex items-center gap-4">
                <img
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  className="w-14 h-14 object-contain rounded-xl bg-gray-800 p-1 shrink-0"
                />
                <div className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      {experience.role}
                    </h2>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-500 text-black whitespace-nowrap shrink-0">
                      {experience.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-green-400 text-lg font-semibold">
                    {experience.company}
                    <span className="text-gray-400 font-normal text-sm">· {experience.location}</span>
                    <a href={experience.link} target="_blank" rel="noreferrer" className="text-sm text-gray-400 hover:text-green-400">
                      <FaLink />
                    </a>
                  </div>
                  <p className="text-gray-400 text-sm">
                    {experience.startDate} – {experience.endDate}
                  </p>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="list-disc text-gray-300 text-base leading-8 pl-5 space-y-1">
                {experience.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* Skills */}
              <motion.div className="flex flex-wrap gap-1" initial="hidden" whileInView="show" viewport={{ once: false }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}>
                {experience.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    variants={{ hidden: { opacity: 0, scale: 0.5 }, show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 15 } } }}
                    className="textshadow text-xs text-green-500 p-1 px-2 rounded-lg bg-gray-800"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
