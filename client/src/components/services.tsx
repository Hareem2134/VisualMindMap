export default function Services() {
  const services = [
    {
      icon: "fas fa-rocket",
      title: "Strategic Consulting",
      description: "Transform your business strategy with our expert guidance and data-driven insights tailored to your industry.",
      gradient: "from-blue-600 to-blue-700"
    },
    {
      icon: "fas fa-cogs",
      title: "Digital Transformation",
      description: "Modernize your operations with cutting-edge technology solutions designed for scalability and efficiency.",
      gradient: "from-emerald-600 to-emerald-700"
    },
    {
      icon: "fas fa-chart-line",
      title: "Growth Analytics",
      description: "Unlock your potential with advanced analytics and business intelligence solutions that drive growth.",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: "fas fa-shield-alt",
      title: "Security Solutions",
      description: "Protect your digital assets with enterprise-grade security solutions and compliance frameworks.",
      gradient: "from-orange-600 to-red-600"
    },
    {
      icon: "fas fa-users",
      title: "Team Training",
      description: "Empower your workforce with comprehensive training programs and skill development initiatives.",
      gradient: "from-teal-600 to-cyan-600"
    },
    {
      icon: "fas fa-headset",
      title: "24/7 Support",
      description: "Round-the-clock expert support to ensure your operations run smoothly across all time zones.",
      gradient: "from-indigo-600 to-purple-700"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-blue-600 font-semibold text-lg tracking-wide uppercase">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mt-4 mb-6">
            Premium Solutions Tailored for You
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From strategic consulting to cutting-edge implementation, we provide comprehensive solutions that drive measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-200 hover-scale">
              <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${service.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 inline-flex items-center">
                Learn More <i className="fas fa-arrow-right ml-2 text-sm"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
