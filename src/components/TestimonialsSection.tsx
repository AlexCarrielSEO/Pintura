import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TestimonialProps {
  name: string;
  location: string;
  testimonial: string;
  rating: number;
  image: string;
}

const TestimonialsSection = ({
  testimonials = defaultTestimonials,
}: {
  testimonials?: TestimonialProps[];
}) => {
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

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-blue-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            O que nossos clientes dizem
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Veja os depoimentos de clientes satisfeitos com nossos serviços de
            pintura personalizada
          </motion.p>
        </div>

        {isMobile ? (
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <TestimonialCard testimonial={testimonial} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: TestimonialProps;
  index: number;
}) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center mb-4">
        <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-lg text-blue-900">
            {testimonial.name}
          </h4>
          <p className="text-gray-500 text-sm">{testimonial.location}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
          />
        ))}
      </div>
      <p className="text-gray-700 italic flex-grow">
        "{testimonial.testimonial}"
      </p>
    </motion.div>
  );
};

const defaultTestimonials: TestimonialProps[] = [
  {
    name: "Carlos Silva",
    location: "São Paulo, SP",
    testimonial:
      "Contratei a Pintura Personalizados para renovar minha casa e o resultado superou todas as expectativas. Profissionalismo e qualidade impecáveis!",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
  },
  {
    name: "Ana Oliveira",
    location: "Rio de Janeiro, RJ",
    testimonial:
      "Equipe extremamente pontual e cuidadosa. Transformaram meu apartamento com um acabamento perfeito e sem sujeira.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
  },
  {
    name: "Marcos Santos",
    location: "Belo Horizonte, MG",
    testimonial:
      "Já é a segunda vez que contrato seus serviços. A qualidade das tintas e o profissionalismo da equipe são incomparáveis.",
    rating: 4,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcos",
  },
  {
    name: "Juliana Costa",
    location: "Curitiba, PR",
    testimonial:
      "Minha empresa precisava de uma renovação urgente e eles entregaram no prazo com um resultado excepcional. Recomendo fortemente!",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Juliana",
  },
];

export default TestimonialsSection;
