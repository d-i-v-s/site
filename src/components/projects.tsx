import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { fadeInDown, staggerContainer } from "@/lib/animations";
import ProjectCard from "./projectcard";

interface ProjectsProps {
  onNavigate: (page: string) => void;
}

const projects = [
  {
    title: "treydit",
    description: "school project. online trading platform. concept & frontend.",
    link: "https://github.com/d-i-v-s/treydit",
    disabled: false,
  },

  {
    title: "tidify",
    description: "school project. team management tool. design & frontend.",
    link: "https://github.com/PikaYuhno/tidify",
    disabled: false,
  },
  {
    title: "MGT",
    description: "school project. graphing tool. frontend & backend.",
    link: "https://github.com/PikaYuhno/tidify",
    disabled: true,
  },

];

export default function About({ onNavigate }: ProjectsProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="enter"
      exit="exit"
      className="flex flex-col items-center justify-center p-4 w-full h-full w-full"
    >
      <title>projects.</title>
      <motion.div
        variants={staggerContainer}
        className="w-full h-full flex flex-col items-center justify-center"
      >
        <motion.div variants={fadeInDown} className="text-3xl font-bold">
          <h1>projects.</h1>
        </motion.div>
        <motion.div variants={fadeInDown} className="md:w-2/3 lg:w-1/4">

          <Separator className="my-4" />
        </motion.div>

        <motion.div
          variants={fadeInDown}
          className="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {projects.map((project, index) => (
            <motion.div
              variants={fadeInDown}
              whileHover={{ scale: 1.05 }}
              key={index}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                link={project.link}
                disabled={project.disabled}
              />
            </motion.div>
          ))}
          </motion.div>
          
          <motion.div variants={fadeInDown} className="flex flex-col justify-center md:w-2/3 lg:w-1/4">
          <Separator className="my-4" />
          </motion.div>
            <motion.button
              variants={fadeInDown}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate("home")}
              className="mt-2"

            >
              back home
            </motion.button>
          
        </motion.div>
      </motion.div>
  );
}
