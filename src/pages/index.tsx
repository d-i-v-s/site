import { useState } from "react";
import Landing from "@/components/landing";
import About from "@/components/about";
import Contact from "@/components/contact";
import Projects from "@/components/projects";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-8 lg:px-16">
        <AnimatePresence mode="wait">
          {currentPage === "home" && <Landing onNavigate={setCurrentPage} />}
          {currentPage === "about" && <About onNavigate={setCurrentPage} />}
          {currentPage === "projects" && (
            <Projects onNavigate={setCurrentPage} />
          )}
          {currentPage === "contact" && <Contact onNavigate={setCurrentPage} />}
        </AnimatePresence>
      </div>
    </>
  );
}
