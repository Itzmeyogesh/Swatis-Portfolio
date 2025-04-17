// src/pages/Experience.jsx
import { motion } from 'framer-motion';

const Experience = () => (
  <div className="p-6 max-w-4xl mx-auto">
    <motion.h2 className="text-3xl font-bold mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      Work Experience
    </motion.h2>
    <motion.div className="space-y-2" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
      <h3 className="text-xl font-semibold">Data Analyst Intern</h3>
      <p className="text-sm text-gray-600">Code Spyder Technology, Pune — Jan 2023 to Jun 2023</p>
      <ul className="list-disc list-inside text-gray-800 mt-2">
        <li>Gathered and integrated historical house price data from platforms like Zillow or Kaggle.</li>
        <li>Cleaned and preprocessed data, managing missing values and performing feature engineering.</li>
        <li>Built and evaluated linear regression models to predict house prices with high accuracy.</li>
        <li>Optimized model performance and deployed applications for real-world predictions.</li>
      </ul>
    </motion.div>
  </div>
);

export default Experience;
