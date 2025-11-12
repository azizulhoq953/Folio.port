import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'Health-Care',
    description: 'A real-time health care application currently serving users in Europe. It enables video consultations between patients and doctors using WebSockets, allows doctors to issue digital prescriptions, and supports purchasing prescribed medicine through secure payments. The backend integrates Stripe for both local and international transactions, user roles (doctor/pharmacy/patient/admin) ensuring fast and secure payment processing.',
    image: 'https://i.ibb.co/RGWqq5WG/doctor-home01.png?auto=format&fit=crop&q=80&w=1000',
    tags: ['Express.js', 'MongoDB', 'WebSockets', 'MVC'],
    github: 'null',
    live: 'https://dokterforyou.com/',
  },
  {
    title: 'Location-Based Features for Fitness App',
    description: 'I implemented map integration in a weight loss and walking app, enabling users to track their walking routes, explore new locations, and join local fitness groups. By integrating real-time maps and geolocation services, I created a seamless experience that allows users to engage with their surroundings and connect with others in specific areas, fostering a community-driven approach to fitness and health. This project highlights my expertise in map APIs, geolocation data handling, and building scalable location-based features',
    image: 'https://i.postimg.cc/Dw3LC0V1/hicking-map.jpg',
    tags: ['Node.js', 'mongodb', 'stripe', "map", 'JWT', 'REST API'],
    github: 'https://github.com/azizulhoq953/Map-Backend',
    live: 'https://github.com/azizulhoq953/Map-Backend',
  },
  {
    title: 'ERP-Desktop Cross-Platform Application',
    description: 'using Golang with the Fyne.io framework. The system manages business operations such as inventory, sales, accounting, and employee records in a single interface. It provides a clean, responsive UI designed for desktop users across Windows, macOS, and Linux.',
    image: 'https://i.ibb.co.com/pvWCLg6q/dashboard.png',
    tags: ['Golang', 'sqlite', 'fyne.io', 'Stripe', 'Video Consultation', 'JWT', 'REST API'],
    github: 'null',
    live: 'https://github.com/azizulhoq953/fyne_project.git',
  },
  {
    title: 'Parcel Delivery Application',
    description: 'A backend system for a Parcel Delivery Application designed to manage end-to-end parcel logistics. it supports push notification and real-time parcel tracking using WebSockets and integrated map services for visual location updates. The system allows users to create delivery requests, track parcels live, and manage delivery statuses. Admins and delivery personnel have role-based access for managing assignments, routes, and parcel history. The backend ensures secure authentication, efficient data handling, and a smooth, real-time delivery experience.',
    image: 'https://i.ibb.co/LDNNGYw9/Parcel.png?auto=format&fit=crop&q=80&w=1000',
    tags: ['Express.js/Node.js', 'MongoDB', 'Stripe', 'tracking', 'JWT'],
    github: 'null',
    live: ' ',
  },
  {
    title: 'Service Provider Application',
    description: 'A full-featured backend system supporting Admin, Service Provider, and Customer roles. Built with Express.js and MongoDB, it enables service listings, bookings, role-based access control, reviews, and secure authentication.',
    image: 'https://i.ibb.co/tpJ7Hv8X/Untitled-design.png?auto=format&fit=crop&q=200&w=1000',
    tags: ['Express.js', 'MongoDB', 'JWT', 'RBAC', 'REST API'],
    github: 'null',
    live: 'https://play.google.com/store/apps/details?id=com.cordarry.flexbook'
  },

  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
    tags: ['Next.js', 'MongoDB', 'Stripe', 'tracking', 'JWT', 'REST API'],
    github: 'https://github.com/azizulhoq953/food-delivery-CI-CD',
    live: 'https://nfoods.netlify.app/',
  },

  {
    title: 'Story Telling App',
    description: 'A storytelling platform for sharing and discovering stories',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000',
    tags: ['React', 'MongoDB', 'Node.js', 'Redux'],
    github: 'https://github.com/azizulhoq953/storyTelling',
    live: 'https://storytelling-client.vercel.app/',
  },
  {
    title: 'E-Commerce Backend',
    description: 'A backend service for an e-commerce',
    image: 'https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg?t=st=1744367981~exp=1744371581~hmac=5bfa862b01cf04b5fef1381d6f4dee32b987b2bf92c2fff8c35de5fd3126ef3f&w=996',
    tags: ['Go', 'PostgreSQL'],
    github: 'https://github.com/azizulhoq953/golang/tree/main/Tl_Ecommerce',
    live: '',
  },
  {
    title: 'System Management web Application',
    description: 'A comprehensive web application designed to manage employees, students, and financial records in one centralized system. The platform supports employee onboarding, performance tracking, student enrollment, academic performance monitoring, and financial operations such as budgeting, expense tracking, and fee collection. Role-based access ensures secure data handling for admins, staff, and students, while dashboards provide real-time analytics and reporting features.',
    image: 'https://i.ibb.co/39cmBsHT/fitness.png?t=st=1744367855~exp=1744371455~hmac=0dc1d6388d3c47a4349f7c3a6b945761122b008fb6fc49338972c78049fc2642&w=900',
    tags: ['Express.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/sparktechagency/gem88Eye-Fitness',
    live: '',
  },
  {
    title: 'Backend Women Health Care',
    description: 'A Mobile Application Base Backend Service For Women Health Care',
    image: 'https://img.freepik.com/free-photo/athlete-playing-sport-with-hand-drawn-doodles_23-2150036341.jpg?t=st=1744367704~exp=1744371304~hmac=6f5cff4caa33501bb8d670224bfc75385236eda48e7289a06f34c873903a1ce9&w=900',
    tags: ['Node.js', 'TypeScript', 'MongoDB'],
    github: 'https://github.com/azizulhoq953/Backend-woman-app',
    live: '',
  },
];

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handlePrivateRepoClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert('This repository is private. Please contact for access.');
  };

  const truncateDescription = (text: string, wordLimit: number) => {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
  };

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

                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {expandedIndex === index
                    ? project.description
                    : truncateDescription(project.description, 15)}
                </p>

                {project.description.split(' ').length > 15 && (
                  <button
                    className="text-sm text-purple-600 dark:text-purple-400 hover:underline mb-4"
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? null : index)
                    }
                  >
                    {expandedIndex === index ? 'See Less' : 'See More'}
                  </button>
                )}

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
                  {project.github === 'null' ? (
                    <button
                      onClick={handlePrivateRepoClick}
                      className="flex items-center text-gray-500 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-300 transition-colors"
                    >
                      <Github size={20} className="mr-2" />
                      Private Repo
                    </button>
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      <Github size={20} className="mr-2" />
                      Code
                    </a>
                  )}

                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      <ExternalLink size={20} className="mr-2" />
                      Live Demo
                    </a>
                  ) : (
                    <span className="text-gray-400 italic">No live demo</span>
                  )}
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

