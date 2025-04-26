
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Loveable Dev</title>
        <meta 
          name="description" 
          content="Learn about our web development team and our passion for creating amazing digital experiences."
        />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        <section className="py-16 bg-white">
          <div className="container">
            <h1 className="text-4xl font-bold text-agency-blue mb-6">About Us</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-lg text-agency-darkGray">
                  We are a passionate team of web developers dedicated to creating beautiful
                  and functional digital experiences. Our mission is to help businesses thrive
                  in the digital world through innovative web solutions.
                </p>
                <p className="text-lg text-agency-darkGray">
                  With years of experience in web development, we've helped numerous clients
                  achieve their online goals through custom websites, e-commerce solutions,
                  and web applications.
                </p>
              </div>
              <div className="bg-agency-gray rounded-lg p-8">
                <h2 className="text-2xl font-bold text-agency-blue mb-4">Our Values</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-agency-purple">•</span>
                    <span>Excellence in every project we undertake</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-agency-purple">•</span>
                    <span>Innovation in our technical solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-agency-purple">•</span>
                    <span>Transparency in our client relationships</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default About;
