import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
    tags: ['Next.js', 'MongoDB',],
    github: 'https://github.com/azizulhoq953/food-delivery-CI-CD',
    live: 'https://nfoods.netlify.app/'
  },
  {
    title: 'Story Telling App',
    description: 'A storytelling platform for sharing and discovering stories',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000',
    tags: ['React', 'MongoDB', 'Node.js', 'Redux'],
    github: 'https://github.com/azizulhoq953/storyTelling',
    live: 'https://storytelling-client.vercel.app/'

  },
  {
    title: 'E-Commerce Backend',
    description: 'A backend service for an e-commerce ',
    image: 'https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg?t=st=1744367981~exp=1744371581~hmac=5bfa862b01cf04b5fef1381d6f4dee32b987b2bf92c2fff8c35de5fd3126ef3f&w=996',
    tags: ['Go' ,'PostgreSQL'],
    github: 'https://github.com/azizulhoq953/golang/tree/main/Tl_Ecommerce',
    live: ''
  },
  {
    title: 'Employee Management System',
    description: 'A web application for managing employee records and performance',
    image: 'https://img.freepik.com/free-photo/management-coaching-business-dealing-mentor-concept_53876-133858.jpg?t=st=1744367855~exp=1744371455~hmac=0dc1d6388d3c47a4349f7c3a6b945761122b008fb6fc49338972c78049fc2642&w=900',
    tags: ['Python','Django' ,'MongoDB'],
    github: 'https://github.com/azizulhoq953/golang/tree/main/Tl_Ecommerce',
    live: ''
  },
  {
    title: 'Backend Women Health Care',
    description: 'A Mobile Application Base Backend Service For Women Health Care',
    image: 'https://img.freepik.com/free-photo/athlete-playing-sport-with-hand-drawn-doodles_23-2150036341.jpg?t=st=1744367704~exp=1744371304~hmac=6f5cff4caa33501bb8d670224bfc75385236eda48e7289a06f34c873903a1ce9&w=900',
    tags: ['Node.js','TypeScript' ,'MongoDB'],
    github: 'https://github.com/azizulhoq953/Backend-woman-app',
    live: ''
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;