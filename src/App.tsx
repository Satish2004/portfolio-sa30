import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import FloatingControls from "./components/FloatingControls";

function App() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <FloatingControls />
      <main className="bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-white min-h-screen transition-colors duration-500 ease-in-out">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </SmoothScroll>
  );
}

export default App;
