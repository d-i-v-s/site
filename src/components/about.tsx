import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { fadeInLeft, staggerContainer } from "@/lib/animations";
import Head from "next/head";

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <>
      <Head>
        <meta name="description" content="about wiktor ramian" />
        <title>about me.</title>
      </Head>
      <motion.div
        variants={fadeInLeft}
        initial="hidden"
        animate="enter"
        exit="exit"
        className="flex flex-col items-center justify-center p-4 w-full md:w-2/3 lg:w-1/4 h-full"
      >
        <title>about me.</title>
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
            <p>full stack dev based in vienna, austria.</p>
            <Separator className="my-4" />
            <h2 className="text-lg font-bold">skills</h2>
            <p>
              typescript, javascript, python, c#, java, django, spring boot,
              react, .net, html, css
            </p>
            <Separator className="my-4" />
            <h2 className="text-lg font-bold">experience</h2>
            <p className="font-bold">apr 2024 - present:</p>
            <p>full stack dev at ANANTARA GmbH</p>
            <Separator className="my-4" />
            <motion.button
              variants={fadeInLeft}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate("home")}
              className="mt-2"
            >
              back home
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
