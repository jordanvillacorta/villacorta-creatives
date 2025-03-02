import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { timeline } from '../data/timeline';

export function Timeline() {
  const [selectedMilestone, setSelectedMilestone] = useState<number | null>(null);
  const [hoveredMilestone, setHoveredMilestone] = useState<number | null>(null);

  const handleMilestoneInteraction = (id: number | null) => {
    setSelectedMilestone(id);
    setHoveredMilestone(id);
  };

  return (
    <div className="mt-12 md:mt-20">
      <h2 className="text-3xl font-bold mb-12 text-center text-[#f4f9ff]">Professional Journey</h2>
      <div className="relative">
        {/* Timeline line - vertical on mobile, horizontal on desktop */}
        <div className="absolute md:top-1/2 md:left-0 md:w-full md:h-1 left-[28px] top-0 w-1 h-full bg-primary-200/30 transform md:-translate-y-1/2"></div>
        
        <div className="relative flex flex-col md:flex-row md:justify-between md:items-center space-y-12 md:space-y-0">
          {timeline.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative group flex-1 px-2 md:px-4"
              >
                <div 
                  className={`absolute md:left-1/2 left-0 md:top-0 top-1/2 transform md:-translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center z-10 transition-colors duration-300 ${
                    selectedMilestone === milestone.id || hoveredMilestone === milestone.id
                      ? 'bg-primary-300'
                      : 'bg-primary-400'
                  }`}
                >
                  <div className="text-white">
                    <Icon className="h-8 w-8" />
                  </div>
                </div>

                <motion.div 
                  className="pl-20 md:pl-0 md:mt-12 md:mx-4"
                  whileHover={{ y: -5 }}
                  onHoverStart={() => handleMilestoneInteraction(milestone.id)}
                  onHoverEnd={() => handleMilestoneInteraction(null)}
                >
                  <motion.div 
                    className={`bg-[#f4f9ff]/80 backdrop-blur-sm p-4 md:p-6 rounded-lg shadow-lg transition-all duration-300 min-h-[240px] md:min-h-[280px] flex flex-col items-center text-center ${
                      selectedMilestone === milestone.id || hoveredMilestone === milestone.id
                        ? 'shadow-2xl ring-2 ring-primary-300'
                        : ''
                    }`}
                  >
                    <motion.div 
                     className="text-primary-300 font-bold mb-4 mt-2"
                      animate={{
                        scale: selectedMilestone === milestone.id || hoveredMilestone === milestone.id ? 1.1 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-lg text-primary-400 mb-2">{milestone.year}</p>
                      <h3 className="text-lg md:text-xl font-semibold text-primary-500 mb-2 max-w-sm">{milestone.title}</h3>
                      <p className="text-sm md:text-base text-primary-400 mb-4 max-w-sm">{milestone.description}</p>
                      
                      <div className="hidden md:block relative h-48 overflow-hidden rounded-lg w-full">
                        <AnimatePresence>
                          {(selectedMilestone === milestone.id || hoveredMilestone === milestone.id) && (
                            <div className="relative">
                              <motion.img
                                src={milestone.image}
                                alt={milestone.title}
                                className="w-full h-full object-cover"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.3 }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent"></div>
                            </div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}