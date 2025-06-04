export default function CTA() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of companies worldwide who trust Luxora for their digital transformation journey. Start your success story today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105"
            >
              Start Your Journey
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
