
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Our Projects | Loveable Dev</title>
        <meta 
          name="description" 
          content="Explore our portfolio of web development projects and success stories."
        />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        <section className="py-16 bg-white">
          <div className="container">
            <h1 className="text-4xl font-bold text-agency-blue mb-6">Our Projects</h1>
            <p className="text-lg text-agency-darkGray mb-12 max-w-3xl">
              Explore our portfolio of successful projects where we've helped businesses 
              achieve their digital goals through custom web development solutions.
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
