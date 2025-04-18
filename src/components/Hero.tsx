import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="relative h-[500px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/221027/pexels-photo-221027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-blue-600/40 z-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            className="max-w-xl text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              Transformamos Espaços com Cores
            </h1>
            <p className="text-lg md:text-xl mb-6 text-blue-100">
              Serviços de pintura personalizados para residências e empresas em
              todo o Brasil. Qualidade, profissionalismo e satisfação garantida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-full text-lg font-medium">
                Solicitar Orçamento
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-[450px] h-[280px] bg-black/10 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full h-full flex items-center justify-center bg-blue-900/20 backdrop-blur-sm">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-white/80"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-white/90 text-sm absolute bottom-4">
                Vídeo de apresentação
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
