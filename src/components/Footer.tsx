import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Md Azizul Hoq
            </span>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/azizulhoq953" className="hover:text-purple-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="linkedin.com/in/azizulhoq953" className="hover:text-purple-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:azizulhoq.ha@gmail.com" className="hover:text-purple-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Md Azizul Hoq. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;