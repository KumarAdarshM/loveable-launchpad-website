import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-agency-gray">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-agency-blue opacity-0 animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              Crafting Digital <span className="text-agency-purple">Excellence</span>
            </h1>
            <p 
              className="text-lg md:text-xl text-agency-darkGray max-w-lg opacity-0 animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              We transform your vision into powerful digital experiences. Our expert team
              builds modern, scalable web solutions that drive results.
            </p>
            <div 
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              <a 
                href="#contact" 
                className="btn btn-primary transition-transform hover:scale-105"
              >
                Start Your Project
              </a>
              <a 
                href="#portfolio" 
                className="btn btn-secondary transition-transform hover:scale-105"
              >
                View Our Work
              </a>
            </div>
          </div>
          <div 
            className={cn(
              "relative flex justify-center items-center opacity-0",
              "animate-fade-in"
            )}
            style={{ animationDelay: '0.8s' }}
          >
            <div className="absolute w-64 h-64 bg-agency-purple/20 rounded-full filter blur-3xl"></div>
            <div className="relative">
              <div className="w-full max-w-md aspect-square bg-white rounded-2xl shadow-xl overflow-hidden p-4 border border-gray-200">
                <div className="w-full h-3 flex gap-1.5 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-6 w-3/4 bg-gray-200 rounded-md"></div>
                  <div className="h-6 w-full bg-gray-200 rounded-md"></div>
                  <div className="h-6 w-2/3 bg-gray-200 rounded-md"></div>
                  <div className="h-24 w-full bg-agency-purple/20 rounded-md"></div>
                  <div className="h-6 w-full bg-gray-200 rounded-md"></div>
                  <div className="h-6 w-5/6 bg-gray-200 rounded-md"></div>
                  <div className="h-12 w-1/3 bg-agency-purple rounded-md"></div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-agency-purple/30 rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-agency-purple/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
