// src/pages/About.jsx
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <motion.h1 className="text-3xl font-bold mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Swati Gadekar
      </motion.h1>
      <p>Pune, Maharashtra</p>
      <p className="text-sm text-gray-600">📧 gadekarswati502@gmail.com | 📞 +91 7499650281</p>
      <p className="text-sm text-blue-600">
        <a href="https://linkedin.com/in/swatigadekar09" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{' '}
        <a href="https://github.com/SWATIG01" target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>

      <motion.div className="mt-6" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
        <h2 className="text-2xl font-semibold mb-2">Summary</h2>
        <p className="text-justify">
          Driven Data Analyst with internship experience at Code Spyder Technologies. Proficient in Python,
          SQL, and data visualization tools like Power BI and Matplotlib. Specialized in transforming complex
          datasets into actionable insights using feature engineering and predictive modeling. Successfully
          deployed real-world applications including house price prediction and sentiment analysis. Passionate
          about leveraging data for impactful decisions.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
