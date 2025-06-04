export default function Footer() {
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
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="text-2xl font-playfair font-bold">Luxora</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transforming businesses worldwide with premium digital solutions and strategic innovation. Your success is our mission.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-bold text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white transition-colors duration-300 text-left">Home</button></li>
              <li><button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors duration-300 text-left">About Us</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors duration-300 text-left">Services</button></li>
              <li><button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-white transition-colors duration-300 text-left">Testimonials</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors duration-300 text-left">Contact</button></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair font-bold text-xl mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Strategic Consulting</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Digital Transformation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Growth Analytics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Security Solutions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">24/7 Support</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            © 2024 Luxora International. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
