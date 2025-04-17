// src/pages/Projects.jsx
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Wine Quality Prediction',
    description:
      'Predicted wine quality using ML techniques and identified key factors affecting quality.',
    skills: 'Python, Scikit-learn, Pandas, Data Analysis',
  },
  {
    title: 'Amazon Product Reviews Sentiment Analysis',
    description:
      'Analyzed Amazon reviews using NLP to determine sentiment and customer satisfaction drivers.',
    skills: 'Python, NLTK, Scikit-learn, Text Preprocessing',
  },
  {
    title: 'HR Analytics Dashboard',
    description:
      'Created interactive Power BI dashboards to visualize employee data for HR decisions.',
    skills: 'Power BI, Dashboard Design, Data Visualization',
  },
];

const Projects = () => (
  <div className="p-6 max-w-4xl mx-auto">
    <motion.h2 className="text-3xl font-bold mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      Projects
    </motion.h2>
    <div className="space-y-6">
      {projects.map((proj, index) => (
        <motion.div
          key={index}
          className="p-4 border rounded-lg shadow hover:shadow-lg transition"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.2 }}
        >
          <h3 className="text-xl font-semibold">{proj.title}</h3>
          <p className="text-gray-700">{proj.description}</p>
          <p className="text-sm text-blue-600 mt-2">{proj.skills}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Projects;
