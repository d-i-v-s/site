import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import {
  pageTransitionsUp,
  staggerContainer,
  fadeInUp,
} from "@/lib/animations";

interface LandingProps {
  onNavigate: (page: string) => void;
}

export default function Landing({ onNavigate }: LandingProps) {
  return (
    <motion.div
      variants={pageTransitionsUp}
      initial="hidden"
      animate="enter"
      exit="exit"
      className="flex flex-col items-center justify-center p-4 w-full md:w-2/3 lg:w-1/4 h-32"
    >
      <title>wiktor ramian.</title>
      <motion.div
        variants={staggerContainer}
        className="w-full h-full flex flex-col items-center justify-center"

      >
        <motion.div
          variants={fadeInUp}
          className="text-2xl md:text-3xl font-bold"
        >
          <h1>wiktor ramian.</h1>
        </motion.div>
        <motion.div variants={fadeInUp} className="w-full">
          <Separator className="my-4" />
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6 items-center justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button onClick={() => onNavigate("about")}>about</button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button onClick={() => onNavigate("projects")}>projects</button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button onClick={() => onNavigate("contact")}>contact</button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
