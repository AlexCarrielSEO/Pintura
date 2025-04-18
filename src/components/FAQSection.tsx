import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs?: FAQItem[];
  imageSrc?: string;
}

const FAQSection = ({
  title = "Perguntas Frequentes",
  subtitle = "Tire suas dúvidas sobre nossos serviços de pintura personalizada",
  faqs = [
    {
      question: "Quais tipos de superfícies vocês pintam?",
      answer:
        "Trabalhamos com diversos tipos de superfícies, incluindo paredes internas e externas, madeira, metal, concreto, gesso e muito mais. Nossa equipe é especializada em adaptar as técnicas e materiais para cada tipo de superfície.",
    },
    {
      question: "Quais tipos de texturas vocês pintam?",
      answer:
        "Trabalhamos com diversos tipos de texturas, incluindo paredes internas e externas, madeira, metal, concreto, gesso e muito mais. Nossa equipe é especializada em adaptar as técnicas e materiais para cada tipo de superfície.",
    },
    {
      question: "Quanto tempo leva para concluir um projeto de pintura?",
      answer:
        "O tempo de conclusão varia de acordo com o tamanho e complexidade do projeto. Projetos residenciais menores podem levar de 2 a 5 dias, enquanto projetos comerciais ou residenciais maiores podem levar de 1 a 3 semanas. Fornecemos um cronograma detalhado antes de iniciar o trabalho.",
    },
    {
      question: "Vocês oferecem garantia para os serviços de pintura?",
      answer:
        "Sim, oferecemos garantia de 2 anos para nossos serviços de pintura. Isso cobre problemas como descascamento, bolhas ou desbotamento prematuro. Nossa garantia reflete a confiança que temos na qualidade do nosso trabalho e dos materiais que utilizamos.",
    },
    {
      question: "Quais marcas de tinta vocês utilizam?",
      answer:
        "Trabalhamos com as melhores marcas do mercado, incluindo Suvinil, Coral, Sherwin-Williams e Eucatex. Podemos recomendar a melhor opção para seu projeto específico ou trabalhar com uma marca de sua preferência.",
    },
    {
      question: "Vocês fazem orçamentos gratuitos?",
      answer:
        "Sim, oferecemos orçamentos detalhados e gratuitos para todos os projetos. Nossa equipe fará uma visita ao local para avaliar as necessidades específicas e fornecer um orçamento preciso, sem compromisso.",
    },
  ],
  imageSrc = "https://images.pexels.com/photos/5428829/pexels-photo-5428829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
}: FAQSectionProps) => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <Card className="p-6 shadow-lg rounded-xl bg-white">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium text-blue-700 hover:text-blue-500">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </div>

          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="rounded-xl overflow-hidden shadow-lg h-full">
              <img
                src={imageSrc}
                alt="Serviços de pintura personalizada"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
