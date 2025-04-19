import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageWithFallback } from './components/ImageWithFallback';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-primary-100/10">
        {/* Navigation */}
        <nav className="bg-[#f4f9ff]/80 backdrop-blur-sm shadow-lg fixed w-full z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-2">
                  <ImageWithFallback
                    src="https://github.com/jordanvillacorta/villacorta-creatives/blob/master/images/VC_Design.png?raw=true"
                    alt="Villacorta Creatives"
                    className="h-16 w-auto object-contain py-2"
                    width={64}
                    height={64}
                  />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-primary-400 hover:text-primary-300 transition-colors">
                  Home
                </Link>
                <Link to="/about" className="text-primary-400 hover:text-primary-300 transition-colors">
                  About Me
                </Link>
                <Link to="/gallery" className="text-primary-400 hover:text-primary-300 transition-colors">
                  Project Gallery
                </Link>
                <div className="flex items-center space-x-4">
                  <a href="https://github.com/jordanvillacorta" target="_blank" rel="noopener noreferrer" 
                     className="text-primary-400 hover:text-primary-300 transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/jordan-villacorta/" target="_blank" rel="noopener noreferrer"
                     className="text-primary-400 hover:text-primary-300 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="mailto:villacortacreatives@gmail.com"
                     className="text-primary-400 hover:text-primary-300 transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center space-x-2">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-primary-400 hover:text-primary-300 focus:outline-none"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-[#f4f9ff]/80 backdrop-blur-sm overflow-hidden"
              >
                <motion.div 
                  className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-primary-100/20"
                >
                  {[
                    { to: "/", label: "Home" },
                    { to: "/about", label: "About Me" },
                    { to: "/gallery", label: "Project Gallery" }
                  ].map((link, index) => (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={link.to}
                        className="block px-3 py-2 text-primary-400 hover:text-primary-300 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex space-x-4 px-3 py-2"
                  >
                    <a href="https://github.com/jordanvillacorta" target="_blank" rel="noopener noreferrer" 
                       className="text-primary-400 hover:text-primary-300 transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/jordan-villacorta/" target="_blank" rel="noopener noreferrer"
                       className="text-primary-400 hover:text-primary-300 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="mailto:jordan.villacorta@gmail.com"
                       className="text-primary-400 hover:text-primary-300 transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Main Content */}
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;