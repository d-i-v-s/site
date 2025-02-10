import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { fadeInRight, staggerContainer } from "@/lib/animations";

interface ContactProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: ContactProps) {
  return (
    <motion.div
      variants={fadeInRight}
      initial="hidden"
      animate="enter"
      exit="exit"
      className="flex flex-col items-center justify-center p-4 w-full md:w-2/3 lg:w-1/4 h-full"
    >
      <motion.div
        variants={staggerContainer}
        className="w-full h-full flex flex-col items-center justify-center"
      >
        <motion.div variants={fadeInRight} className="text-3xl font-bold">
          <h1>contact me.</h1>
        </motion.div>
        <motion.div variants={fadeInRight} className="w-full">
          <Separator className="my-4" />
        </motion.div>

        <motion.div variants={fadeInRight} className="text-center">
          <p>todo</p>

          <motion.button
            variants={fadeInRight}
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
