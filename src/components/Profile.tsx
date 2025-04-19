import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import { ImageWithFallback } from './ImageWithFallback';

export function Profile() {
  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
      <div>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80"
          alt="Profile"
          className="rounded-lg shadow-xl max-h-[300px] md:max-h-none w-full object-cover"
          width={600}
          height={400}
        />
      </div>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-[#f4f9ff]">About Me</h1>
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-base md:text-lg text-[#f4f9ff] mb-4 md:mb-6"
        >
          I'm a passionate software engineer and I really enjoy crafting efficient, scalable solutions and am quite keen on writing clean, maintainable code. Whether I'm starting a new project, designing intuitive user experiences, or geeking out over the latest generative AI application, I love to bring ideas to life with precision and creativity.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-[#f4f9ff] mb-4 md:mb-6"
        >
          Fueled by coffee (lots of it), inspired by the beautiful game of soccer (fútbol), and guided by the Force, I thrive on solving complex problems and having great conversations along the way. When I'm not coding, you'll probably find me watching the best Star Wars shows & movies, chasing the perfect espresso shot, or playing soccer whenever I can get a chance.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base md:text-lg text-[#f4f9ff] mb-4 md:mb-6"
        >
          Stop dreaming and start creating - let's build something awesome together! 🚀⚡☕⚽
        </motion.p>
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