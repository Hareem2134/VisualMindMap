export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      text: "Luxora transformed our entire digital infrastructure. Their strategic approach and attention to detail exceeded our expectations. The ROI has been remarkable.",
      name: "Sarah Johnson",
      title: "CEO, TechCorp Inc.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    },
    {
      rating: 5,
      text: "Working with Luxora has been a game-changer. Their team's expertise and dedication to our success is unmatched in the industry.",
      name: "Michael Chen",
      title: "CTO, Global Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    },
    {
      rating: 5,
      text: "The level of professionalism and innovation Luxora brings is exceptional. They've helped us scale globally with confidence.",
      name: "Emily Rodriguez",
      title: "VP Operations, InnovateCo",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b194?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    }
  ];

  const partners = ["Microsoft", "Amazon", "Google", "Apple", "Tesla"];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-blue-600 font-semibold text-lg tracking-wide uppercase">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mt-4 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by industry leaders worldwide for delivering exceptional results and unparalleled service quality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover-scale">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partner Logos */}
        <div className="text-center">
          <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-8">Trusted by Industry Leaders</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {partners.map((partner, index) => (
              <div key={index} className="bg-gray-200 h-12 w-32 rounded flex items-center justify-center">
                <span className="text-gray-500 font-semibold">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
