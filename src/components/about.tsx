"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { Fade } from "react-awesome-reveal";
import { useSectionInView } from "@/lib/useInView";

export default function About() {
  const { ref } = useSectionInView("#about");

  return (
    <motion.section
      className="max-w-[45rem] text-center mt-32 leading-8 mb-28 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      ref={ref}
      id="about"
    >
      <div className="container mx-auto px-4">
        <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
          <SectionHeading>About Me</SectionHeading>
        </Fade>

        <div className="grid gap-8 xl:grid-cols-2 lg:text-start">
          <div className="flex-1">
            {/* Content */}
            <div className="text-lg mt-12 xl:mt-3">
              <div className="flex justify-start flex-col">
              <Fade direction="up" delay={1200} cascade damping={1e-1} triggerOnce={true}>
                  <h3 className="font-bold mt-6">E X P E R I E N C E</h3>
                </Fade>
                <Fade direction="up" delay={1400} cascade damping={1e-1} triggerOnce={true}>
                  <p className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
                    I have been working since 2020, accumulating nearly half a decade of experience. You can rely on me for your projects. I excel in various editing styles, delivering high-value content that is cost-effective. Let's schedule a meeting and begin working together.
                  </p>
                </Fade>
                <Fade direction="up" delay={1600} cascade damping={1e-1} triggerOnce={true}>
                  <p className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
                    <strong>
                      I am currently working in collaboration with{" "}
                      <a href="https://www.logicadz.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                        Logicadz  </a>,
                        <a href="https://www.braelproductions.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                        Braelproductions  </a>!
                    </strong>
                  </p>
                  <p className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
  <strong>Key responsibilities :</strong>
</p>

<div className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
  <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
    <li>Video Editing</li>
    <li>Script writting</li>
    <li>Supervised Editing Team</li>
    <li>Manage Daily Content Creation</li>
    <li>I provided my clients with creative ideas for
generating new content</li>
  </ul>
</div>

                  
                </Fade>
                <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
                  <h3 className="font-bold mt-6">A C H I E V E M E N T S</h3>
                </Fade>
                <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce={true}>
                  <p className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
                  Grew three YouTube channels associated with my
clients to over 2M, 300K, and 700K subscribers.
Expanded several Instagram pages while working
alongside my clients. Throughout this process, I
learned a lot.
                  </p>
                </Fade>
               
                
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Fade direction="right" delay={600} cascade damping={1e-1} triggerOnce={true}>
              <Image
                src="/about.png"
                width="600"
                height="600"
                alt="portrait"
                quality="100"
                priority={true}
                className="rounded-full mt-8 object-cover"
              />
            </Fade>
          </div>
        </div>
      </div>
    </motion.section>
  );
}