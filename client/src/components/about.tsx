export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-left">
            <span className="text-blue-600 font-semibold text-lg tracking-wide uppercase">About Luxora</span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mt-4 mb-6">
              Crafting Excellence Since 2010
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are a premier international consultancy specializing in delivering bespoke digital solutions that transform businesses across the globe. Our commitment to excellence and innovation has made us the trusted partner for Fortune 500 companies.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-gray-600">Global Support</div>
              </div>
            </div>
          </div>
          <div className="animate-slide-in-right">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional Team Collaboration" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
