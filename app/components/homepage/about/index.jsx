"use client";

// @flow strict

import { personalData } from "@/utils/data/personal-data";
import ProfileCard from "@/profile/ProfileCard/ProfileCard";
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <p className="font-bold mb-5 text-[#16f2b3] text-xl uppercase tracking-wider">
            Who I am?
          </p>
          <div className="text-gray-200 text-sm lg:text-lg leading-relaxed font-medium tracking-wide">
            <p className="mb-3 first-letter:text-4xl first-letter:font-extrabold first-letter:text-pink-500 first-letter:mr-1 first-letter:float-left first-letter:leading-none">
              {personalData.description.split('.')[0]}.
            </p>
            <p className="mb-3">
              {personalData.description.split('.').slice(1, 4).join('.')}.
            </p>
            <p className="text-gradient bg-gradient-to-r from-[#16f2b3] via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold">
              {personalData.description.split('.').slice(4).join('.')}.
            </p>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center order-1 lg:order-2"
        >
          <ProfileCard
            avatarUrl={personalData.profile}
            name={personalData.name}
            title={personalData.designation}
            handle={personalData.github.split('/').pop()}
            status="Available for hire"
            contactText="Contact Me"
            onContactClick={() => {
              if (typeof window !== 'undefined') {
                const contactSection = document.getElementById('contact');
                if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;