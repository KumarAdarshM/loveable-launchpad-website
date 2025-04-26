
import { cn } from "@/lib/utils";

const services = [
  {
    id: 1,
    title: "Custom Web Development",
    description: 
      "Tailor-made websites built from the ground up using modern technologies to deliver exactly what your business needs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "E-Commerce Solutions",
    description: 
      "Feature-rich online stores with secure payment gateways, inventory management, and optimized checkout experiences.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "API Development",
    description: 
      "Connect your website to third-party services or build custom APIs to enable powerful functionality and data interchange.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Progressive Web Apps",
    description: 
      "Create fast, reliable, and engaging web applications that work offline and provide a native app-like experience.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    )
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-white py-24">
      <div className="container">
        <div 
          className="text-center space-y-4 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-agency-blue">Our Services</h2>
          <p className="text-lg text-agency-darkGray">
            Comprehensive web development solutions to take your business to the next level
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={cn(
                "bg-white p-8 rounded-lg shadow-lg",
                "transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl",
                "opacity-0"
              )}
              style={{ 
                animationName: 'fade-in, slide-up',
                animationDuration: '0.5s',
                animationDelay: `${index * 0.1 + 0.4}s`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="text-agency-purple mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-agency-blue">
                {service.title}
              </h3>
              <p className="text-agency-darkGray">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
