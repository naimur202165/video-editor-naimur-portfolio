// Projects.tsx
'use client';
import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project-card";
import { useSectionInView } from "@/lib/useInView";
import AnimatedButton from "./AnimatedButton";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.1);
  // Filter projects by category
  const reels = projectsData.filter(project => project.category === "Reel");
  const longVideos = projectsData.filter(project => project.category === "Long Video");

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>
        My Reels
      </SectionHeading>
      <div className="flex flex-row flex-wrap justify-center gap-8 mb-28">
        {reels.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            videoUrl={project.videoUrl}
            thumbnailUrl={project.thumbnailUrl}
            category={project.category} // <--- Include category here
          />
        ))}
      </div>
      <SectionHeading>
        My Long Videos
      </SectionHeading>
      <div className="flex flex-row flex-wrap justify-center gap-8 mb-16">
        {longVideos.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            videoUrl={project.videoUrl}
            thumbnailUrl={project.thumbnailUrl}
            category={project.category} // <--- Include category here
          />
        ))}
      </div>
      <div className="flex justify-center">
        <AnimatedButton link="https://drive.google.com/drive/folders/1l3emDjkvzkaajGfzAvd7Hb_3CBZJ0OXb?usp=sharing" />
      </div>
    </section>
  );
}
