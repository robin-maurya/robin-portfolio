import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import Certifications from "@/components/Certifications/Certifications";
import Footer from "@/components/Footer/Footer";



const Home = () => {
    return (
      <main>
        < Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    );
}

export default Home;