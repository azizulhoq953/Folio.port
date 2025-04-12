import React from 'react';
import { Trophy, Briefcase } from 'lucide-react';

const achievements = [
  {
    title: "ICPC Regionalist",
    description: "Participated and qualified for the ICPC Regional Contest",
    type: "competition"
  },
  {
    title: "UGV-Intra Contest 2022",
    description: "2nd Runner Up in the university-wide programming competition",
    type: "competition"
  }
];

const experiences = [
  {
    title: "Jr. Backend Developer",
    company: "Spark Tech Agency",
    period: "Present",
    description: "Developing and maintaining backend services using Node.js and Golang"
  },
  {
    title: "Python Trainer",
    company: "Bangladesh Ministry of ICT",
    period: "2024",
    description: "Conducted training sessions on Python programming for government initiatives"
  }
];

const Achievements = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <Trophy className="w-8 h-8 text-purple-600 dark:text-purple-400 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold dark:text-white">{achievement.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start">
                  <Briefcase className="w-8 h-8 text-purple-600 dark:text-purple-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold dark:text-white">{experience.title}</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">{experience.company}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{experience.period}</p>
                    <p className="text-gray-600 dark:text-gray-300">{experience.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;