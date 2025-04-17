import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center px-6 py-20"
    >
      <h1 className="text-5xl font-bold text-gray-800 dark:text-white">Hi, I'm Swati 👋</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Data Analyst skilled in Python, Power BI, SQL & Data Visualization
      </p>
    </motion.section>
  );
}

export default Home;