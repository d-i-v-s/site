import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { fadeInLeft, staggerContainer } from "@/lib/animations";

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <motion.div
      variants={fadeInLeft}
      initial="hidden"
      animate="enter"
      exit="exit"
      className="flex flex-col items-center justify-center p-4 w-full md:w-2/3 lg:w-1/4 h-full"
    >
      <motion.div
        variants={staggerContainer}
        className="w-full h-full flex flex-col items-center justify-center"
      >
        <motion.div variants={fadeInLeft} className="text-3xl font-bold">
          <h1>about me.</h1>
        </motion.div>
        <motion.div variants={fadeInLeft} className="w-full">
          <Separator className="my-4" />
        </motion.div>
        <motion.div variants={fadeInLeft} className="text-center">
          <p>todo</p>

          <motion.button
            variants={fadeInLeft}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate("home")}
            className="mt-4"
          >
            back home
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
