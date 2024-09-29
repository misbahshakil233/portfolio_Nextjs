import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const FooterEND = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-3">About Me</h3>
            <p className="text-gray-400">
              I’m a passionate web developer specializing in building high-quality web applications.
              I love to learn new technologies and apply them in real-world projects.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Contact</h3>
            <p className="text-gray-400">Email: misbahshakil193@gmail.com</p>
            <p className="text-gray-400">Phone: +92 33-43096036</p>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-bold text-white mb-3">Follow Me</h3>
            <div className="flex justify-center md:justify-end space-x-6">
              <a href="https://github.com/misbahshakil233" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/misbah-shakil-2a339b28a/" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:misbahshakil193@gmail.com" className="text-gray-400 hover:text-blue-900">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-600" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
          <p>Designed & Developed by Misbah Shakil</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterEND;
