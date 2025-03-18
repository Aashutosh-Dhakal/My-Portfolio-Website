import Hero from "./components/Home";
import Navbar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

export default function Home() {
  return (
      <div className="bg-gray-100">
          <Navbar />
          <section id="home">
              <Hero/>
          </section>
          <section id="about">
              <About/>
          </section>
          <section id="projects">
              <Projects/>
          </section>
          <section id="contact">
              <Contact/>
          </section>
          {/* <Footer/> */}
      </div>
  );
}
