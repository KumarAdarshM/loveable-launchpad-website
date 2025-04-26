
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
        <title>TechCraft Studio | Modern Web Development Solutions</title>
        <meta 
          name="description" 
          content="TechCraft Studio delivers cutting-edge web development solutions. Expert team crafting beautiful, responsive websites and powerful web applications."
        />
        <meta 
          name="keywords" 
          content="web development, custom websites, react development, web applications, responsive design, modern web solutions"
        />
        <meta property="og:title" content="TechCraft Studio | Modern Web Development Solutions" />
        <meta property="og:description" content="Expert team crafting beautiful, responsive websites and powerful web applications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://techcraft.studio/" />
      </Helmet>
      
      <div className="animate-fade-in">
        <Navbar />
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
