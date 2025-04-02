
import { useState } from "react";
import resumeData from "../data/resumeData";

// A component for each technical skill using a continuous progress bar effect.
function TechnicalSkillCard({ skill }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="group bg-gray-800 p-4 rounded-lg shadow-md transition transform duration-300 hover:scale-105"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="mb-2">
        <span className="text-white font-medium">{skill.name}</span>
      </div>
      <div className="relative w-full bg-gray-700 rounded-full h-4 overflow-hidden">
        <div
          className="h-4 rounded-full transition-all duration-700 ease-out"
          style={{
            width: hovered ? `${skill.proficiency}%` : "0%",
            background: "linear-gradient(90deg, #C9B037, #FFD700)",
            backgroundSize: "200% 100%",
            animation: hovered ? "gradientMove 2s linear infinite" : "none",
          }}
        ></div>
      </div>
    </div>
  );
}

export default function Resume() {
  return (
    <section className="container mx-auto px-4 py-8 bg-black">
      {/* Header */}
      <h2 className="text-3xl font-bold mb-6 text-white">Resume</h2>

      {/* Professional Summary - Minimalistic Modern Style */}
<div className="mb-8">
  <h3 className="text-2xl font-semibold text-[#C9B037] mb-4">
    Professional Summary
  </h3>
  <div className="relative bg-gray-800 bg-opacity-75 p-6 rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:scale-105">
    {/* Subtle background overlay for a newschool look */}
    <div className="absolute inset-0 bg-black opacity-20"></div>
    <div className="relative z-10">
      <p className="text-white text-lg leading-relaxed">
        {resumeData.professionalSummary}
      </p>
    </div>
    {/* Animated underline effect on hover */}
    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#005F3C] to-[#C9B037] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
  </div>
</div>


      {/* Core Competencies - Modern, Creative Grid */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-[#C9B037] mb-4">
          Core Competencies
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {resumeData.coreCompetencies.map((comp, idx) => (
            <div
              key={idx}
              className="bg-[#0A0A0A] p-4 rounded-lg shadow-md flex items-center justify-center transition transform duration-300 hover:scale-105 hover:bg-[#005F3C]"
            >
              <span className="text-center text-gray-300 text-sm font-medium">
                {comp}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Experience */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-[#C9B037]">
          Professional Experience
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          {resumeData.professionalExperience.map((exp, idx) => (
            <div
              key={idx}
              className="bg-[#0A0A0A] p-6 rounded-lg shadow-lg transition transform duration-300 hover:scale-105 hover:bg-[#005F3C]"
            >
              <h4 className="text-xl font-bold text-white">
                {exp.title} - {exp.company}
              </h4>
              <span className="text-sm text-gray-400">
                {exp.location} | {exp.period}
              </span>
              <ul className="list-disc list-inside mt-2 text-gray-300">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education - Vertical Timeline */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-[#C9B037] mb-4">
          Education
        </h3>
        <div className="relative border-l-4 border-[#C9B037] pl-6">
          {resumeData.education.map((edu, idx) => (
            <div
              key={idx}
              className="mb-8 transition duration-300 transform hover:scale-105"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-3 top-0 w-6 h-6 bg-[#005F3C] rounded-full border-4 border-black"></div>
              <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                <p className="text-gray-400">{edu.institution}</p>
                <p className="text-gray-400">{edu.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-[#C9B037]">
          Certifications
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4">
          {resumeData.certifications.map((cert, idx) => (
            <a
              key={idx}
              href={cert.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#0A0A0A] rounded-lg shadow-lg overflow-hidden transition transform duration-300 hover:scale-105 hover:bg-[#005F3C]"
            >
              <div className="relative">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-600 flex items-center justify-center">
                    <span className="text-gray-300">No Image</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 flex items-center justify-center">
                  <span className="text-white text-lg opacity-0 group-hover:opacity-100 transition duration-300">
                    {cert.title}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-white font-bold">{cert.title}</p>
                <p className="text-gray-400">{cert.issuer}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Technical Skills - Continuous Progress Bar (Pipe Effect) */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-[#C9B037] mb-4">
          Technical Skills
        </h3>
        <div className="grid grid-cols-1 gap-6">
          {resumeData.technicalSkills.map((skill, idx) => (
            <TechnicalSkillCard key={idx} skill={skill} />
          ))}
        </div>
      </div>

      {/* Languages - Modern Creative Chips */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-white mb-4">Languages</h3>
        <div className="flex flex-wrap gap-4">
          {resumeData.languages.map((lang, idx) => (
            <div
              key={idx}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-[#005F3C] to-[#C9B037] text-white font-bold transition transform duration-300 hover:scale-110"
            >
              {lang}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}