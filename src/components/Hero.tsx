import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-purple-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Md Azizul Hoq</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            I am a passionate software engineer with a focus on web development and cloud technologies. I love building scalable applications and exploring new technologies.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors">
              View Projects
            </button>
  <a 
  href="/Azizul-Hoq-Resume.pdf" 
  download
  className="flex items-center space-x-2 border-2 border-purple-600 text-purple-600 dark:text-purple-400 px-6 py-1 rounded-full hover:bg-purple-600 hover:text-white transition-colors"
>
  <Download size={20} />
  <span>Download Resume</span>
</a>

          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-purple-600 dark:text-purple-400" size={32} />
      </div>
    </section>
  );
};

export default Hero;