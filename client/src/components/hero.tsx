export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 parallax-bg opacity-15" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&h=1200')"
        }}
      ></div>
      
      <div className="relative z-10 text-center px-6 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-gray-900 mb-6 animate-slide-up">
            Elevate Your
            <span className="gradient-text block">Digital Presence</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
            Transform your business with premium international solutions designed for the modern world. Experience excellence in every detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '0.4s'}}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105">
              Discover Solutions
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl">
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-br from-blue-600/20 to-emerald-600/20 rounded-full animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-gradient-to-br from-emerald-600/20 to-blue-600/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
    </section>
  );
}
