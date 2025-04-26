
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Our Projects | TechCraft Studio</title>
        <meta 
          name="description" 
          content="Explore our portfolio of successful web development projects. See how we've helped businesses achieve their digital goals through innovative solutions."
        />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        <section className="py-16 bg-white">
          <div className="container">
            <h1 className="text-4xl font-bold text-agency-blue mb-6 opacity-0 animate-fade-in">
              Our Projects
            </h1>
            <p className="text-lg text-agency-darkGray mb-12 max-w-3xl opacity-0 animate-fade-in" 
               style={{ animationDelay: '0.2s' }}>
              Discover how we've helped businesses transform their digital presence through
              custom web development solutions. Each project represents our commitment to
              excellence and innovation.
            </p>
            <Portfolio />
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Projects;
