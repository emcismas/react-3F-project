import { motion } from "framer-motion";

const Hint = () => {
  return (
    <motion.div
      className="fixed bottom-4  transform -translate-x-1/2 bg-transparent text-white px-4 py-2 rounded-xl shadow-lg text-sm"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 10 }}
    >
       ← Drag to the left 
    </motion.div>
  );
};

export default Hint;