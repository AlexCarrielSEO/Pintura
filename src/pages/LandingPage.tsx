import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import BrazilStatesMap from "../components/BrazilStatesMap";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Separator } from "../components/ui/separator";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <Hero />
      {/* Services Section */}
      <ServicesSection />
      {/* About Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80"
                alt="Sobre a Pintura Personalizados"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">
                Sobre a Pintura Personalizados
              </h2>
              <p className="text-gray-600 mb-4">
                Há mais de 15 anos no mercado, a Pintura Personalizados se
                destaca pela excelência em serviços de pintura personalizada
                para residências e empresas em todo o Brasil.
              </p>
              <p className="text-gray-600 mb-6">
                Nossa equipe de profissionais altamente qualificados trabalha
                com as melhores técnicas e materiais do mercado, garantindo
                acabamentos perfeitos e duradouros para cada projeto.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Conheça Nossa História
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Clients and Partners Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-800">
            Clientes e Parceiros
          </h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Empresas que confiam em nosso trabalho
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center"
              >
                <img
                  src={`https://api.dicebear.com/7.x/initials/svg?seed=Partner${item}`}
                  alt={`Partner ${item}`}
                  className="w-24 h-24 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-800">
            Depoimentos
          </h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            O que nossos clientes dizem sobre nós
          </p>
          <TestimonialsSection />
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="container mx-auto">
          <FAQSection />
        </div>
      </section>
      {/* Team Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-800">
            Nossa Equipe
          </h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Conheça os profissionais por trás dos nossos serviços
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Carlos Silva",
                role: "Diretor Executivo",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
              },
              {
                name: "Ana Oliveira",
                role: "Gerente de Projetos",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
              },
              {
                name: "Roberto Santos",
                role: "Especialista em Pintura",
                image:
                  "https://api.dicebear.com/7.x/avataaars/svg?seed=Roberto",
              },
              {
                name: "Juliana Costa",
                role: "Designer de Interiores",
                image:
                  "https://api.dicebear.com/7.x/avataaars/svg?seed=Juliana",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-800">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Brazil Map Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="container mx-auto max-w-none">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-800">
            Áreas de Atendimento
          </h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Conheça as regiões onde oferecemos nossos serviços
          </p>
          <div className="w-full flex justify-center items-center relative">
            <BrazilStatesMap />
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center"></div>
        </div>
      </section>
      {/* Newsletter Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fique por dentro das novidades
            </h2>
            <p className="text-lg mb-8">
              Assine nossa newsletter e receba dicas, tendências e promoções
              exclusivas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                className="bg-white text-gray-800 border-none"
              />
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Pintura Personalizados</h3>
              <p className="mb-4">
                Transformando espaços com cores e qualidade há mais de 15 anos.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-300">
                  <Facebook size={20} />
                </a>
                <a href="#" className="hover:text-blue-300">
                  <Instagram size={20} />
                </a>
                <a href="#" className="hover:text-blue-300">
                  <Twitter size={20} />
                </a>
                <a href="#" className="hover:text-blue-300">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="hover:text-blue-300">
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Empresa
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Av. Paulista, 1000 - São Paulo, SP</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>(11) 99999-9999</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>contato@pinturapersonalizados.com.br</span>
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-xl font-bold mb-4">Fale Conosco</h3>
              <form className="space-y-4">
                <Input
                  type="text"
                  placeholder="Nome"
                  className="bg-blue-800 border-blue-700 text-white placeholder:text-blue-300"
                />
                <Input
                  type="email"
                  placeholder="E-mail"
                  className="bg-blue-800 border-blue-700 text-white placeholder:text-blue-300"
                />
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>

          <Separator className="bg-blue-800 my-8" />

          <div className="text-center text-blue-300 text-sm">
            <p>
              © {new Date().getFullYear()} Pintura Personalizados. Todos os
              direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
