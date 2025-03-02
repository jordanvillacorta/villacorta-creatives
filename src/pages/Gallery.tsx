import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Clock } from 'lucide-react';

const projects = [
  {
    title: 'Power Giving Leader',
    description:
      'A dynamic platform for leadership development and community empowerment',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
    tags: ['Typescript', 'Tailwind CSS', 'React'],
    liveUrl: 'https://powergivingleader.net/',
    githubUrl: 'https://github.com/jordanvillacorta/power-giving-leader',
  },
  {
    title: "Pedro's Barbershop",
    description:
      'Modern barbershop website with online booking and service showcase',
    image:
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80',
    tags: ['React', 'Tailwind CSS', 'Booksy Integrated'],
    liveUrl: 'https://pedros-barbershop.netlify.app/',
    githubUrl: 'https://github.com/jordanvillacorta/pedros-barbershop',
  },
  {
    title: 'Brewstronomy',
    description: 'Discover and explore local craft coffee shops around you',
    image:
      'https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&q=80',
    tags: ['React', 'Tailwind CSS', 'API Integration'],
    liveUrl: 'https://brewstronomy.netlify.app',
    githubUrl: 'https://github.com/jordanvillacorta/starbrew-crew-web',
    status: 'In Progress',
  },
];

function Gallery() {
  return (
    <div className="relative min-h-screen py-12 md:py-20">
      <div className="fixed inset-0 bg-gradient-to-br from-[#284c66] via-[#2F6A87] to-[#3B88AE]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0)_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0)_70%)]"></div>
      </div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-[#f4f9ff] mb-4">
              Project Gallery
            </h1>
            <p className="text-lg md:text-xl text-[#f4f9ff]/80">
              A showcase of my professional work and side projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#f4f9ff]/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#f4f9ff]/80 backdrop-blur-sm rounded-full hover:bg-primary-100/20 transition-colors"
                    >
                      <ExternalLink className="h-6 w-6 text-primary-500" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#f4f9ff]/80 backdrop-blur-sm rounded-full hover:bg-primary-100/20 transition-colors"
                    >
                      <Github className="h-6 w-6 text-primary-500" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold text-primary-500">
                      {project.title}
                    </h3>
                    {project.status && (
                      <div className="flex items-center text-primary-400">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="text-sm font-medium">
                          {project.status}
                        </span>
                      </div>
                    )}
                  </div>
                  <p className="text-primary-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-primary-100/20 text-primary-400 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;