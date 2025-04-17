// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => (
  <motion.nav
    className="bg-indigo-600 text-white px-6 py-3 flex justify-center gap-6 shadow-md sticky top-0 z-50"
    initial={{ y: -80 }}
    animate={{ y: 0 }}
    transition={{ type: 'spring', stiffness: 100 }}
  >
    {['/', '/About', '/Experience', '/Skills', '/Projects'].map((path, index) => {
      const labels = ['Home', 'About', 'Experience', 'Skills', 'Projects'];
      return (
        <NavLink
          key={index}
          to={path}
          className={({ isActive }) =>
            isActive ? 'underline font-semibold' : 'hover:underline'
          }
        >
          {labels[index]}
        </NavLink>
      );
    })}
  </motion.nav>
);

export default Navbar;
