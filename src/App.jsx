import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Hobbies from "./components/Hobbies";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div id="top">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Projects />
        <Resume />
        <Hobbies />
      </main>
      <Footer />
    </div>
  );
}
