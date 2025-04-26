
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-primary-dark via-primary to-secondary-light">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-white">
            <h1 className="animate-slide-down text-4xl sm:text-5xl md:text-6xl font-bold">
              We Craft <span className="text-accent-light">Digital Excellence</span>
            </h1>
            <p className="animate-slide-up delay-100 text-lg md:text-xl text-white/90 max-w-lg">
              Transform your digital presence with cutting-edge web solutions. 
              We bring your vision to life with modern technology and creative design.
            </p>
            <div className="animate-slide-up delay-200 flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn bg-accent hover:bg-accent-dark text-white transition-colors">
                Start Your Project
              </a>
              <a href="#portfolio" className="btn bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 transition-colors">
                View Our Work
              </a>
            </div>
          </div>
          
          <div className="animate-scale-up relative flex justify-center items-center">
            <div className="absolute w-64 h-64 bg-secondary/30 rounded-full filter blur-3xl"></div>
            <div className="relative">
              <div className="w-full max-w-md aspect-square bg-white/10 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden p-4 border border-white/20">
                <div className="w-full h-3 flex gap-1.5 mb-4">
                  <div className="w-3 h-3 rounded-full bg-accent-light"></div>
                  <div className="w-3 h-3 rounded-full bg-secondary-light"></div>
                  <div className="w-3 h-3 rounded-full bg-primary-light"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-6 w-3/4 bg-white/20 rounded-md animate-pulse"></div>
                  <div className="h-6 w-full bg-white/20 rounded-md animate-pulse"></div>
                  <div className="h-6 w-2/3 bg-white/20 rounded-md animate-pulse"></div>
                  <div className="h-24 w-full bg-gradient-to-r from-primary-light/20 to-secondary-light/20 rounded-md"></div>
                  <div className="h-6 w-full bg-white/20 rounded-md animate-pulse"></div>
                  <div className="h-6 w-5/6 bg-white/20 rounded-md animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
