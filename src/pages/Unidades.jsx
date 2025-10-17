import React from 'react'
import { motion } from 'framer-motion'
import { Map, Phone, Clock, Building, Users, Gavel } from 'lucide-react'

export default function Unidades() {
  const unidades = [
    {
      id: 'cangucu',
      nome: "Canguçu - Matriz",
      endereco: "Rua General Osório, nº 245 – Centro",
      telefone: "(53) 3352-0155",
      horario: "Segunda a Sexta, das 9h às 18h",
      especialidades: ["Direito do Trabalho", "Direito Previdenciário", "Direito Público"],
      descricao: "Nossa unidade matriz, estrategicamente localizada no centro de Canguçu, oferece atendimento completo em Direito do Trabalho, Previdenciário e Público.",
      destaque: "Unidade Matriz",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      id: 'pelotas',
      nome: "Pelotas - Unidade Regional",
      endereco: "Rua Quinze de Novembro, nº 1220 – Centro",
      telefone: "(53) 3278-0155",
      horario: "Atendimento mediante agendamento",
      especialidades: ["Direito Tributário", "Direito Empresarial", "Direito do Agronegócio"],
      descricao: "Localizada no coração de Pelotas, nossa unidade regional é especializada em questões tributárias, empresariais e do agronegócio.",
      destaque: "Foco Empresarial",
      gradient: "from-green-500 to-green-700"
    },
    {
      id: 'porto-alegre',
      nome: "Porto Alegre - Unidade Capital",
      endereco: "Av. Borges de Medeiros, nº 367 – Sala 802 – Centro Histórico",
      telefone: "(51) 3095-0155",
      horario: "Atendimento com hora marcada",
      especialidades: ["Direito Público", "Servidores Públicos", "Contencioso Estratégico"],
      descricao: "Nossa presença na capital gaúcha fortalece nossa atuação em Direito Público, especialmente voltada para servidores e contencioso estratégico.",
      destaque: "Contencioso Especializado",
      gradient: "from-purple-500 to-purple-700"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="section-container py-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-600 rounded-full px-4 py-2 mb-6">
            <Map className="w-4 h-4" />
            <span className="font-medium">Nossas Unidades</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Estamos{' '}
            <span className="gradient-text">próximos</span>{' '}
            de você
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Com unidades estrategicamente localizadas em Canguçu, Pelotas e Porto Alegre, 
            oferecemos atendimento presencial e personalizado em todo o Rio Grande do Sul.
          </p>
        </motion.div>

        <div className="grid gap-12 mb-16">
          {unidades.map((unidade, index) => (
            <motion.div
              key={unidade.id}
              id={unidade.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid lg:grid-cols-3 gap-0">
                <div className="lg:col-span-2 p-8 lg:p-12">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center mb-2">
                        <div className={`w-4 h-4 bg-gradient-to-r ${unidade.gradient} rounded-full mr-3`}></div>
                        <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
                          {unidade.destaque}
                        </span>
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                        {unidade.nome}
                      </h2>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {unidade.descricao}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="flex items-start space-x-3">
                      <div className={`w-10 h-10 bg-gradient-to-r ${unidade.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Building className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Endereço</h4>
                        <p className="text-gray-600">{unidade.endereco}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className={`w-10 h-10 bg-gradient-to-r ${unidade.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Telefone</h4>
                        <a 
                          href={`tel:${unidade.telefone.replace(/\D/g, '')}`}
                          className="text-primary-600 hover:text-primary-700 transition-colors duration-300"
                        >
                          {unidade.telefone}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className={`w-10 h-10 bg-gradient-to-r ${unidade.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Horário</h4>
                        <p className="text-gray-600">{unidade.horario}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className={`w-10 h-10 bg-gradient-to-r ${unidade.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Gavel className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Especialidades</h4>
                        <div className="space-y-1">
                          {unidade.especialidades.map((especialidade, espIndex) => (
                            <div key={espIndex} className="flex items-center space-x-2">
                              <div className={`w-1.5 h-1.5 bg-gradient-to-r ${unidade.gradient} rounded-full`}></div>
                              <span className="text-gray-600 text-sm">{especialidade}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <motion.a
                    href={`tel:${unidade.telefone.replace(/\D/g, '')}`}
                    className={`inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r ${unidade.gradient} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="w-5 h-5" />
                    <span>Ligar para esta unidade</span>
                  </motion.a>
                </div>
                
                <div className={`bg-gradient-to-br ${unidade.gradient} p-8 lg:p-12 flex items-center justify-center`}>
                  <div className="text-center text-white">
                    <Building className="w-24 h-24 mx-auto mb-6 opacity-20" />
                    <h3 className="text-xl font-bold mb-4">{unidade.destaque}</h3>
                    <p className="opacity-90">
                      Atendimento especializado e personalizado
                    </p>
                    <div className="mt-6 pt-6 border-t border-white/20">
                      <div className="flex items-center justify-center space-x-2">
                        <Users className="w-5 h-5" />
                        <span className="text-sm">Equipe Especializada</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 md:p-12 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Atendimento em todo o Brasil
          </h3>
          
          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
            Além das nossas unidades físicas, oferecemos atendimento digital em todo o território nacional, 
            mantendo a mesma qualidade e proximidade que nos caracteriza.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h4 className="font-semibold mb-2">Atendimento Telefônico</h4>
              <p className="text-gray-100 text-sm">Consultas e orientações por telefone</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-semibold mb-2">Videoconferência</h4>
              <p className="text-gray-100 text-sm">Reuniões virtuais personalizadas</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h4 className="font-semibold mb-2">Atuação Nacional</h4>
              <p className="text-gray-100 text-sm">Processos em todo o território brasileiro</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}