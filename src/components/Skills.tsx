import { Database, Layout, Server, Cloud, Cog } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Layout className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux']
  },
  {
    title: 'Backend Development',
    icon: <Server className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
    skills: ['Node.js', 'Express', 'Python', 'JavaScript', 'Golang', 'REST APIs']
  },
  {
    title: 'Database',
    icon: <Database className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite', 'Redis']
  },
  {
    title: 'DevOps & Cloud',
    icon: <Cloud className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
    skills: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD']
  },
  {
    title: 'Other Technologies',
    icon: <Cog className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
    skills: ['Git', 'Linux', 'Nginx', 'Testing', 'Microservices']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mb-6">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 dark:text-white">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;