import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Info } from "lucide-react";

interface StateData {
  id: string;
  name: string;
  available: boolean;
  details?: string;
}

interface BrazilStatesMapProps {
  states?: StateData[];
  onStateClick?: (stateId: string) => void;
}

const defaultStates: StateData[] = [
  { id: "AC", name: "Acre", available: false },
  {
    id: "AL",
    name: "Alagoas",
    available: true,
    details: "Serviços completos disponíveis",
  },
  { id: "AP", name: "Amapá", available: false },
  { id: "AM", name: "Amazonas", available: false },
  {
    id: "BA",
    name: "Bahia",
    available: true,
    details: "Serviços completos disponíveis",
  },
  {
    id: "CE",
    name: "Ceará",
    available: true,
    details: "Serviços completos disponíveis",
  },
  {
    id: "DF",
    name: "Distrito Federal",
    available: true,
    details: "Sede principal - todos os serviços",
  },
  {
    id: "ES",
    name: "Espírito Santo",
    available: true,
    details: "Serviços completos disponíveis",
  },
  {
    id: "GO",
    name: "Goiás",
    available: true,
    details: "Serviços completos disponíveis",
  },
  { id: "MA", name: "Maranhão", available: false },
  { id: "MT", name: "Mato Grosso", available: false },
  {
    id: "MS",
    name: "Mato Grosso do Sul",
    available: true,
    details: "Serviços limitados",
  },
  {
    id: "MG",
    name: "Minas Gerais",
    available: true,
    details: "Serviços completos disponíveis",
  },
  { id: "PA", name: "Pará", available: false },
  { id: "PB", name: "Paraíba", available: false },
  {
    id: "PR",
    name: "Paraná",
    available: true,
    details: "Serviços completos disponíveis",
  },
  {
    id: "PE",
    name: "Pernambuco",
    available: true,
    details: "Serviços completos disponíveis",
  },
  { id: "PI", name: "Piauí", available: false },
  {
    id: "RJ",
    name: "Rio de Janeiro",
    available: true,
    details: "Serviços completos disponíveis",
  },
  { id: "RN", name: "Rio Grande do Norte", available: false },
  {
    id: "RS",
    name: "Rio Grande do Sul",
    available: true,
    details: "Serviços completos disponíveis",
  },
  { id: "RO", name: "Rondônia", available: false },
  { id: "RR", name: "Roraima", available: false },
  {
    id: "SC",
    name: "Santa Catarina",
    available: true,
    details: "Serviços completos disponíveis",
  },
  {
    id: "SP",
    name: "São Paulo",
    available: true,
    details: "Serviços completos disponíveis",
  },
  { id: "SE", name: "Sergipe", available: false },
  { id: "TO", name: "Tocantins", available: false },
];

const BrazilStatesMap = ({
  states = defaultStates,
  onStateClick,
}: BrazilStatesMapProps) => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [showNationalInfo, setShowNationalInfo] = useState(false);

  const handleStateClick = (stateId: string) => {
    if (onStateClick) {
      onStateClick(stateId);
    }
    setSelectedState(stateId === selectedState ? null : stateId);
  };

  const getSelectedStateInfo = () => {
    if (!selectedState) return null;
    return states.find((s) => s.id === selectedState);
  };

  const selectedStateInfo = getSelectedStateInfo();
  const availableStates = states.filter((state) => state.available);

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="md:p-8 flex items-start flex-col justify-start static py-[8] px-[8] py-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
          Áreas de Atendimento
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column - Map visualization */}
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Legenda</h3>
              </div>
              <div className="flex items-center mb-3">
                <div className="w-4 h-4 bg-blue-500 mr-2 rounded"></div>
                <span className="text-sm">Estados com serviço disponível</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gray-300 mr-2 rounded"></div>
                <span className="text-sm">Estados sem serviço disponível</span>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-4">
                Estados Disponíveis
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {availableStates.map((state) => (
                  <motion.div
                    key={state.id}
                    className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => handleStateClick(state.id)}
                  >
                    <div className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full mr-2">
                      <span className="text-xs font-bold">{state.id}</span>
                    </div>
                    <span className="text-sm">{state.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - National coverage info */}
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 -mt-10 -mr-10 bg-blue-100 rounded-full opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 -mb-8 -ml-8 bg-blue-100 rounded-full opacity-50"></div>

              <h3 className="text-xl font-bold mb-4 text-blue-800 relative z-10">
                Atendimento Nacional
              </h3>

              <p className="text-blue-700 mb-4 relative z-10">
                A Pintura Personalizados atende em todo o território nacional,
                com equipes especializadas nas principais capitais e regiões
                metropolitanas do Brasil.
              </p>

              <p className="text-blue-700 mb-6 relative z-10">
                Para projetos em regiões mais remotas, entre em contato conosco
                para verificar a disponibilidade e condições especiais de
                atendimento.
              </p>

              <motion.button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium relative z-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Verificar Disponibilidade
              </motion.button>
            </div>

            {selectedStateInfo && (
              <motion.div
                className="bg-white border-2 border-blue-500 p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full mr-3">
                    <span className="font-bold">{selectedStateInfo.id}</span>
                  </div>
                  <h3 className="text-xl font-bold">
                    {selectedStateInfo.name}
                  </h3>
                </div>

                <div className="flex items-center mb-4">
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-medium ${selectedStateInfo.available ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                  >
                    {selectedStateInfo.available
                      ? "Disponível"
                      : "Indisponível"}
                  </div>
                </div>

                {selectedStateInfo.details && (
                  <div className="flex items-start">
                    <Info className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                    <p className="text-gray-700">{selectedStateInfo.details}</p>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrazilStatesMap;
