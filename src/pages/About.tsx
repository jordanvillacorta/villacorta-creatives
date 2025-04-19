import React from 'react';
import { Profile } from '../components/Profile';
import { Timeline } from '../components/Timeline';

function About() {
  return (
    <div className="relative min-h-screen py-12 md:py-20">
      <div className="fixed inset-0 bg-gradient-to-br from-[#284c66] via-[#2F6A87] to-[#3B88AE]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0)_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0)_70%)]"></div>
      </div>
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-lora">
            <Profile />
          </div>
          <Timeline />
        </div>
      </div>
    </div>
  );
}

export default About;