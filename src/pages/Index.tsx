
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
        <title>Loveable Dev | Web Development Agency</title>
        <meta name="description" content="Professional web development services tailored to your business needs. We build modern, responsive websites and web applications." />
        <meta name="keywords" content="web development, website design, custom websites, e-commerce development, API integration" />
        <meta property="og:title" content="Loveable Dev | Web Development Agency" />
        <meta property="og:description" content="Professional web development services tailored to your business needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://loveable.dev/" />
      </Helmet>
      
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
