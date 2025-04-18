import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed w-full z-50 transition-all duration-300 bg-white shadow-md py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-blue-700">
            Pintura Personalizados
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#home"
            className="text-gray-800 hover:text-blue-600 font-medium"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-gray-800 hover:text-blue-600 font-medium"
          >
            Serviços
          </a>
          <a
            href="#portfolio"
            className="text-gray-800 hover:text-blue-600 font-medium"
          >
            Portfólio
          </a>
          <a
            href="#testimonials"
            className="text-gray-800 hover:text-blue-600 font-medium"
          >
            Depoimentos
          </a>
          <a
            href="#team"
            className="text-gray-800 hover:text-blue-600 font-medium"
          >
            Equipe
          </a>
          <a
            href="#faq"
            className="text-gray-800 hover:text-blue-600 font-medium"
          >
            FAQ
          </a>
          <a
            href="#contact"
            className="text-gray-800 hover:text-blue-600 font-medium"
          >
            Contato
          </a>
        </nav>

        {/* Quote Button */}
        <div className="hidden md:block">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-all">
            Solicitar Orçamento
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#home"
              className="text-gray-800 hover:text-blue-600 font-medium py-2 border-b border-gray-100"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-800 hover:text-blue-600 font-medium py-2 border-b border-gray-100"
            >
              Serviços
            </a>
            <a
              href="#portfolio"
              className="text-gray-800 hover:text-blue-600 font-medium py-2 border-b border-gray-100"
            >
              Portfólio
            </a>
            <a
              href="#testimonials"
              className="text-gray-800 hover:text-blue-600 font-medium py-2 border-b border-gray-100"
            >
              Depoimentos
            </a>
            <a
              href="#team"
              className="text-gray-800 hover:text-blue-600 font-medium py-2 border-b border-gray-100"
            >
              Equipe
            </a>
            <a
              href="#faq"
              className="text-gray-800 hover:text-blue-600 font-medium py-2 border-b border-gray-100"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="text-gray-800 hover:text-blue-600 font-medium py-2 border-b border-gray-100"
            >
              Contato
            </a>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all animate-pulse hover:animate-none flex items-center justify-center">
              <Phone size={18} className="mr-2" />
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
