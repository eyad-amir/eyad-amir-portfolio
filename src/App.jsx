import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import {
  About,
  Skills,
  Experience,
  Projects,
  Education,
  Contact,
  Footer,
} from "./sections/Content";
export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
