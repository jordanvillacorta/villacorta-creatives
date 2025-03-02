import React from 'react';
import { skills } from '../data/skills';

export function Profile() {
  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
      <div>
        <img
          src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80"
          alt="Profile"
          className="rounded-lg shadow-xl max-h-[300px] md:max-h-none w-full object-cover"
        />
      </div>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-[#f4f9ff]">About Me</h1>
        <p className="text-base md:text-lg text-[#f4f9ff] mb-4 md:mb-6">
          I'm a passionate software engineer with a keen eye for detail and a drive for creating
          efficient, scalable solutions. With expertise in modern web technologies and software
          architecture, I bring ideas to life through clean, maintainable code.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="flex items-center space-x-2 md:space-x-3 p-3 md:p-4 bg-[#f4f9ff]/80 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <div className="text-primary-300">
                  <Icon className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <span className="font-medium text-sm md:text-base text-primary-400">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}