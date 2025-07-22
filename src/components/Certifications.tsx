import { Award } from 'lucide-react';

const certifications = [
  {
    title: "DevOps Certification",
    organization: "Bangladesh Copyright Office & Master Academy",
    date: "2021",
    credentialId: "DEVOPS-123456"
  },
  {
    title: "Software Development Life Cycle (SDLC)",
    organization: "Simplilearn Institute",
    date: "2024",
    credentialId: "SDLC-789012"
  },
  {
    title: "Advanced SQL Certification",
    organization: "Great Learning",
    date: "2024",
    credentialId: "SQL-345678"
  },
  {
    title: "Data Structures and Algorithms",
    organization: "Simplilearn Institute",
    date: "2023",
    credentialId: "DSA-901234"
  },
  {
    title: "Golang Programming Certification",
    organization: "Bangladesh Copyright Office & Master Academy",
    date: "2021",
    credentialId: "Golang-601238"
  }
];

const Certifications = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-purple-600 dark:text-purple-400 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold dark:text-white">{cert.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{cert.organization}</p>
                </div>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <p>Issued: {cert.date}</p>
                <p>Credential ID: {cert.credentialId}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;