import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Project = () => {
  return (
    <div className="flex flex-col items-center justify-center my-[20px]">
      <h1
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r
          from-purple-500 to-cyan-500 py-[40px]"
      >
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="A modern and responsive portfolio website built with Next.js, showcasing projects, skills, and contact information. Features include server-side rendering, dynamic routing, and a sleek UI design."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="A collection of interactive and animated cards for websites, built using React and Framer Motion. Perfect for showcasing services, features, or team members in an engaging way."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="A visually stunning space-themed website with parallax scrolling effects and interactive elements. Built using HTML, CSS, and JavaScript for a captivating user experience."
        />
      </div>
    </div>
  );
};

export default Project;
