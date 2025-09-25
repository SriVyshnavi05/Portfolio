import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';
import project6 from '../assets/project6.png';
import project7 from '../assets/project7.png';
import project8 from '../assets/project8.png';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects');

 const projects = [
  {
    title: 'Online Examination System',
    description: 'Secure, scalable exam platform supporting 500+ students with subject-specific quizzes and auto-grading',
    image: project1,
    link: 'https://github.com/.../ONLINE%20EXAMINATION%20SYSTEM.zip',
    tech: ['Java', 'MySQL', 'OOP', 'CRUD Operations']
  },
  {
    title: 'Car Sales Analysis Dashboard',
    description: 'Interactive dashboard with KPIs, visualizations for trend tracking and regional sales insights',
    image: project2,
    link: 'https://github.com/.../Car%20Sales.pbit',
    tech: ['Tableau', 'PowerBI', 'Data Visualization', 'KPIs']
  },
  {
    title: 'Text Classification using TensorFlow',
    description: 'Built a text classification model using TensorFlow to automatically categorize text and extract actionable insights.',
    image: project3,
    link: 'https://github.com/.../Text%20Classification.ipynb',
    tech: ['Python', 'TensorFlow']
  },
  {
    title: 'Vision Transform',
    description: 'Implemented a Vision Transformer (ViT) model using TensorFlow for advanced image classification with high accuracy.',
    image: project4,
    link: 'https://github.com/.../Vision%20Transform.ipynb',
    tech: ['Python', 'TensorFlow','Keras']
  },
  {
    title: 'Telecom Customer Churn Prediction',
    description: 'Random Forest model with 80% accuracy to predict customer churn from 7K+ records',
    image: project5,
    link: 'https://github.com/.../telecom.ipynb',
    tech: ['Python', 'Machine Learning', 'Random Forest', 'Data Analysis']
  },
  {
    title: 'Crop Classification using Image Datasets',
    description: 'CNN model with 92% accuracy to classify healthy vs. diseased leaves with 18% robustness improvement',
    image: project6,
    link: 'https://github.com/.../crop_classification.py',
    tech: ['Python', 'Prediction', 'CNN', 'Accuracy']
  },
  {
    title: 'E-Commerce store Dashboard',
    description: 'An E-Commerce Dashboard showcasing interactive visualizations of sales, customer behavior, and product performance to demonstrate data analytics and business intelligence skills.',
    image: project7,
    link: 'https://github.com/.../E-Commerce%20Store.pbix',
    tech: ['Power BI', 'KPI', 'Metrics Calculation', 'DAX Queries']
  },
  {
    title: 'JSON Converter',
    description: 'A tool that transforms raw data (CSV, Excel, or text) into structured JSON format, enabling easy integration with APIs, web applications, and databases.',
    image: project8,
    link: 'https://github.com/.../pyhton_to_json.py',
    tech: ['Python', 'pymuPDF']
  },
];

  const techStack = {
    'Programming Languages': ['Java', 'Python', 'C'],
    'Databases': ['SQL', 'MySQL', 'PostgreSQL', 'MongoDB'],
    'Web Technologies': ['HTML5', 'CSS3', 'JavaScript'],
    'Data Science & AI': ['NumPy', 'TensorFlow', 'Apache PySpark', 'CNN', 'Machine Learning', 'Artifical Intelliegence', 'Statistics'],
    'Cloud & Tools': ['Azure', 'Git', 'GitHub', 'Azure Data Factory'],
    'Visualization': ['Tableau', 'PowerBI', 'Microsoft Excel']
  };

  const certifications = [
    {
      name: 'Introduction to Data Science Specialization',
      issuer: 'IBM - Coursera',
      year: '2025',
      link: 'https://www.credly.com/badges/3a5fc8f2-5150-4b86-858c-c4fb9988acc6/public_url',
      description: 'Comprehensive data science fundamentals covering statistics, machine learning, and data analysis techniques'
    },
    {
      name: 'Google Data Analytics',
      issuer: 'Google - Coursera',
      year: '2025',
      link: 'https://drive.google.com/file/d/1snaA6sqnXlNiUs-t5yBFlSoqsX2TmBsl/view?usp=drive_link',
      description: 'Professional certificate covering data cleaning, analysis, visualization, and R programming'
    },
    {
      name: 'NPTEL Leadership and Team Effectiveness',
      issuer: 'NPTEL',
      year: '2025',
      score: '60%',
      link: 'https://drive.google.com/file/d/1UcMJtdqpkQGruWGaKlvE8qhrWRICutt5/view?usp=drive_link',
      description: 'Leadership principles and team management strategies for effective collaboration'
    },
    {
      name: '30-Days Power BI Micro Course',
      issuer: 'E-Learning by Satish Dhawale',
      year: '2025',
      link: 'https://drive.google.com/file/d/13eMRlhF0KU4loxdVpe-rQDzw8G1ckkOs/view?usp=drive_link',
      description: 'Intensive Power BI training covering DAX, data modeling, and advanced visualization techniques'
    },
    {
      name: 'Data Visualization Course',
      issuer: 'Kaggle',
      year: '2025',
      link: 'https://drive.google.com/file/d/19_0YWoNXf2QmjMng4Kuz8U5D5xPZsrEf/view?usp=drive_link',
      description: 'Learned and Implemented different visualizations present in Python'
    },
    {
      name: 'Data Analysis with Excel',
      issuer: 'IBM - edX',
      year: '2025',
      link: 'https://drive.google.com/file/d/1vV97dL6WmZkDzvcZtb28oxnFuyVgZI7p/view?usp=drive_link',
      description: 'Advanced Excel functions, pivot tables, and data analysis tools for business intelligence'
    },
    {
      name: 'Python Essentials 1 & 2',
      issuer: 'Cisco',
      year: '2025',
      link: 'https://drive.google.com/file/d/1oM63LktAacnxMLisUwu2Q16SYJ2uVS05/view?usp=drive_link',
      description: 'Comprehensive Python programming covering basics to advanced concepts and OOP'
    },
    {
      name: 'JavaScript Essentials 1 & 2',
      issuer: 'Cisco',
      year: '2025',
      link: 'https://drive.google.com/file/d/1hHRYG5VoXJcpwdh3CuekabI7EAzcVKrQ/view?usp=drive_link',
      description: 'Gained proficiency in JS fundamentals, DOM manipulation, and OOP to build interactive web applications.'
    },
    {
      name: 'NPTEL Cloud Computing',
      issuer: 'NPTEL',
      year: '2024',
      score: '70%',
      link: 'https://drive.google.com/file/d/1MrIFXuckG3LNWOj8wZ-85-_wADWBpcOR/view?usp=drive_link',
      description: 'Fundamentals of cloud computing, virtualization, and cloud service models'
    },
  ];

  const achievements = [
'    Secured top 5% ranking in national-level coding competitions on platforms like LeetCode and CodeChef, showcasing strong problem-solving and algorithmic skills.',
'Achieved 92% accuracy in a CNN-based crop disease classification model, applied in a live demo, proving real-world scalability of AI models in agriculture.',
'Designed and deployed customer churn prediction model with 80% accuracy, providing actionable insights that could reduce churn by up to 15%.',
'Created interactive dashboards in Power BI/Tableau that improved decision-making speed by 30% in academic and project-based case studies.',
'Received recognition as a finalist in the DATA QUEZT national-level data science competition, outperforming 200+ participants.',
'Completed industry-recognized certifications from IBM, Google, and NPTEL, demonstrating validated expertise in Data Science, Analytics, and Cloud Computing.',
'Consistently maintained a CGPA of 8.66/10, balancing academics with multiple technical internships, projects, and certifications.',
'Developed an Online Examination System that supported 500+ students, reducing manual evaluation workload by 90%.',
'Built an image-based defect detection system improving inspection accuracy by 35%, applied in AI internship project.'  ];

  const experience = [
    {
      company: 'CISCO',
      position: 'Cyber Security Intern',
      period: 'May 2024 – July 2024',
      location: 'Vizianagaram, AP',
      achievements: [
        'Learned and undestood the computer network threats and importance of security in IT sector'
      ]
    },
    {
      company: 'Coincent, Langify',
      position: 'AI with Python Intern',
      period: 'Apr 2024 – May 2024',
      location: 'Vizianagaram, AP',
      achievements: [
        'Developed text classification model using TensorFlow with 92% accuracy',
        'Designed image-based defect detection systems increasing accuracy by 35%'
      ]
    }
  ];

  const tabList = ['projects', 'experience', 'tech', 'certifications', 'achievements'];

  return (
    <section
      id="portfolio"
      className="min-h-screen py-20 text-white w-full overflow-hidden relative"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] -top-1/4 -right-1/4 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute w-[500px] h-[500px] -bottom-1/4 -left-1/4 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-purple-900/20 to-blue-900/30"></div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 text-transparent bg-clip-text animate-gradient-x">
                Portfolio Showcase
              </span>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-sm"></div>
            </h2>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg mt-6">
            Data Science & AI Enthusiast | Machine Learning | Data Analysis | Cloud Computing
          </p>
        </motion.div>

        {/* Enhanced Tab Buttons */}
        <div className="flex justify-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex flex-wrap justify-center rounded-2xl bg-gray-900/80 p-2 backdrop-blur-xl border border-gray-700/50 shadow-2xl"
          >
            {tabList.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 mx-1 ${
                  activeTab === tab
                    ? 'text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <motion.div
                    layoutId="tab-highlight"
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-xl border border-purple-500/50 shadow-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Content Sections */}
        <AnimatePresence mode="wait">
         {/* Projects Section */}
{activeTab === 'projects' && (
  <motion.div
    key="projects"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.6 }}
    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
  >
    {projects.map((project, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 hover:border-purple-500/70 transition-all duration-500 shadow-2xl"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Project Image */}
        <div className="relative h-48 overflow-hidden bg-gray-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Project Content */}
        <div className="relative p-8">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              {project.title}
            </h3>
            <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
              {project.tech[0]}
            </span>
          </div>

          <p className="text-gray-300 text-sm mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1.5 rounded-full bg-gray-700/50 text-gray-300 border border-gray-600/50 group-hover:border-purple-500/30 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Button */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-purple-300 hover:from-purple-500/30 hover:to-blue-500/30 hover:text-white transition-all duration-300 group/btn"
          >
            <span>View Project</span>
            <svg
              className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </motion.div>
    ))}
  </motion.div>
)}


          {activeTab === 'experience' && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 hover:border-purple-500/70 transition-all duration-500 p-8 mb-8 shadow-2xl"
                >
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
                    <div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text mb-2">
                        {exp.position}
                      </h3>
                      <p className="text-purple-300 font-semibold text-lg">{exp.company}</p>
                    </div>
                    <div className="text-right mt-4 lg:mt-0">
                      <p className="text-gray-300 font-medium">{exp.period}</p>
                      <p className="text-gray-400 text-sm">{exp.location}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                        className="text-gray-300 flex items-start group/item"
                      >
                        <span className="text-purple-400 mr-3 text-lg mt-0.5">▸</span>
                        <span className="group-hover/item:text-white transition-colors duration-300">
                          {achievement}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'tech' && (
            <motion.div
              key="tech"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {Object.entries(techStack).map(([category, technologies], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 hover:border-purple-500/70 transition-all duration-500 p-8 shadow-2xl"
                >
                  <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text mb-6">
                    {category}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ duration: 0.3, delay: categoryIndex * 0.05 + techIndex * 0.02 }}
                        className="group/tech relative text-center p-4 rounded-xl bg-gray-700/30 border border-gray-600/50 hover:border-purple-500/50 transition-all duration-300"
                      >
                        <div className="text-gray-300 group-hover/tech:text-white transition-colors duration-300 text-sm font-medium">
                          {tech}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'certifications' && (
            <motion.div
              key="certifications"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 hover:border-purple-500/70 transition-all duration-500 p-8 shadow-2xl"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text pr-4">
                      {cert.name}
                    </h3>
                    <span className="text-purple-300 text-sm bg-purple-500/20 px-3 py-1 rounded-full border border-purple-500/30 whitespace-nowrap">
                      {cert.year}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-3 font-medium">{cert.issuer}</p>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    {cert.score && (
                      <span className="text-green-400 text-sm bg-green-500/10 px-2 py-1 rounded">
                        Score: {cert.score}
                      </span>
                    )}
                    <a
                      href={cert.link}
                      className="text-purple-300 hover:text-purple-200 text-sm font-medium flex items-center gap-1 transition-colors duration-300"
                    >
                      View Certificate
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'achievements' && (
            <motion.div
              key="achievements"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 hover:border-purple-500/70 transition-all duration-500 p-8 shadow-2xl"
                  >
                    <div className="flex items-start">
                      <div className="text-3xl mr-4 text-purple-400 transform group-hover:scale-110 transition-transform duration-300">
                        🏆
                      </div>
                      <p className="text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;