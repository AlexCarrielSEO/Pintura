import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
}

const ServiceCard = ({
  title,
  description,
  imageUrl,
  buttonText = "Saiba Mais",
}: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col bg-white overflow-hidden">
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-xl text-blue-700">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="text-gray-600">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            {buttonText}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const ServicesSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const services: ServiceCardProps[] = [
    {
      title: "Pintura Residencial",
      description:
        "Transforme sua casa com nossos serviços de pintura residencial. Oferecemos acabamento de alta qualidade para interiores e exteriores, com atenção aos detalhes e materiais premium.",
      imageUrl:
        "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80",
      buttonText: "Ver Detalhes",
    },
    {
      title: "Pintura Comercial",
      description:
        "Soluções profissionais de pintura para empresas, escritórios e estabelecimentos comerciais. Trabalhamos com eficiência para minimizar interrupções no seu negócio.",
      imageUrl:
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80",
      buttonText: "Ver Detalhes",
    },
    {
      title: "Pintura Decorativa",
      description:
        "Técnicas especiais de pintura para criar efeitos únicos e personalizados. Texturas, degradês, efeitos metálicos e muito mais para dar personalidade aos seus ambientes.",
      imageUrl:
        "https://images.unsplash.com/photo-1615529162924-f8605388461d?w=800&q=80",
      buttonText: "Ver Detalhes",
    },
    {
      title: "Restauração",
      description:
        "Serviços especializados de restauração de pinturas antigas, recuperação de fachadas históricas e renovação de superfícies danificadas com técnicas avançadas.",
      imageUrl:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      buttonText: "Ver Detalhes",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50" id="services">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas de pintura personalizada para
            transformar qualquer ambiente com qualidade e profissionalismo.
          </p>
        </div>

        {isMobile ? (
          <Carousel className="w-full">
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 pl-4 pr-4"
                >
                  <ServiceCard {...service} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-4">
              <CarouselPrevious className="relative static transform-none mx-2" />
              <CarouselNext className="relative static transform-none mx-2" />
            </div>
          </Carousel>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
