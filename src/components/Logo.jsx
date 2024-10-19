import { motion } from "framer-motion";

const Logo = () => (
  <motion.div
    className="flex items-center space-x-2 mr-6 cursor-pointer"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="bg-primary text-white rounded-full p-2">
      <span className="font-bold text-xl">YC!</span>
    </div>
  </motion.div>
);

export default Logo;