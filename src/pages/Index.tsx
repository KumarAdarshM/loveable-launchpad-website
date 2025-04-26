
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const Index = () => {
  // Smooth scrolling for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for navbar
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>TechCraft Studio | Modern Web Development Agency</title>
        <meta 
          name="description" 
          content="TechCraft Studio - Your partner for modern web development, e-commerce solutions, and digital transformation. We craft beautiful, high-performance websites and applications." 
        />
        <meta 
          name="keywords" 
          content="web development, react development, e-commerce, web applications, digital transformation, TechCraft Studio" 
        />
        <meta property="og:title" content="TechCraft Studio | Modern Web Development Agency" />
        <meta 
          property="og:description" 
          content="Your partner for modern web development and digital transformation." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://techcraft.studio/" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="TechCraft Studio" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://techcraft.studio/" />
      </Helmet>
      
      <div className="animate-slide-down">
        <Navbar />
      </div>
      
      <main className="overflow-hidden">
        <section className="animate-slide-up">
          <Hero />
        </section>
        
        <section className="animate-slide-up delay-100">
          <Services />
        </section>
        
        <section className="animate-slide-up delay-200">
          <Portfolio />
        </section>
        
        <section className="animate-slide-up delay-300">
          <Contact />
        </section>
      </main>
      
      <div className="animate-slide-up delay-400">
        <Footer />
      </div>
    </>
  );
};

export default Index;
