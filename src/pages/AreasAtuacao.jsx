import React from 'react'
import { motion } from 'framer-motion'
import { Gavel, Coins, Building, Users, Wheat, Scale, Phone } from 'lucide-react'

export default function AreasAtuacao() {
  const areas = [
    {
      id: 'trabalho',
      icon: Gavel,
      title: "Direito do Trabalho",
      description: "Especialização em defesa de direitos trabalhistas para empregados e empregadores",
      services: [
        "Ações de horas extras e adicional de insalubridade",
        "Defesa em processos de rescisão trabalhista",
        "Questões relacionadas à pejotização",
        "Análise e defesa de passivos trabalhistas",
        "Acordos e negociações trabalhistas",
        "Assessoria preventiva em relações de trabalho"
      ],
      gradient: "from-blue-500 to-blue-700"
    },
    {
      id: 'tributario',
      icon: Coins,
      title: "Direito Tributário",
      description: "Soluções estratégicas para otimização fiscal e defesa tributária",
      services: [
        "Compensações fiscais e restituições",
        "Isenção de imposto de renda",
        "Revisão de tributos e contestações",
        "Recuperação de créditos tributários",
        "Defesas administrativas perante o Fisco",
        "Planejamento tributário preventivo"
      ],
      gradient: "from-green-500 to-green-700"
    },
    {
      id: 'publico',
      icon: Building,
      title: "Direito Público e Administrativo",
      description: "Advocacia especializada para servidores públicos e questões administrativas",
      services: [
        "Direitos de servidores e empregados públicos",
        "Processos de precatórios",
        "Reconhecimento de doenças ocupacionais",
        "Ações de indenização contra o poder público",
        "Questões de estabilidade e progressão",
        "Aposentadorias especiais do serviço público"
      ],
      gradient: "from-purple-500 to-purple-700"
    },
    {
      id: 'familia',
      icon: Users,
      title: "Direito de Família e Sucessões",
      description: "Acompanhamento sensível e técnico em questões familiares",
      services: [
        "Processos de divórcio consensual e litigioso",
        "Pensão alimentícia e revisional de alimentos",
        "Guarda compartilhada e unilateral",
        "Inventários e partilha de bens",
        "Regularização de união estável",
        "Adoção e questões de filiação"
      ],
      gradient: "from-pink-500 to-pink-700"
    },
    {
      id: 'agronegocio',
      icon: Wheat,
      title: "Direito do Agronegócio",
      description: "Consultoria jurídica especializada para o setor rural",
      services: [
        "Planejamento tributário rural",
        "Contratos de parceria e arrendamento",
        "Regularização fundiária e de terras",
        "Responsabilidade ambiental rural",
        "Questões de sucessão rural",
        "Defesa em processos ambientais"
      ],
      gradient: "from-yellow-500 to-yellow-700"
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
            <Scale className="w-4 h-4" />
            <span className="font-medium">Áreas de Atuação</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Especialização e{' '}
            <span className="gradient-text">excelência</span>{' '}
            jurídica
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Nossa equipe possui especialização técnica em diversas áreas do direito, 
            oferecendo soluções personalizadas e estratégicas para cada cliente.
          </p>
        </motion.div>

        <div className="space-y-16">
          {areas.map((area, index) => {
            const IconComponent = area.icon
            return (
              <motion.div
                key={area.id}
                id={area.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${area.gradient} rounded-xl flex items-center justify-center mr-4`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">{area.title}</h2>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {area.description}
                    </p>
                    
                    <div className="grid gap-4 mb-8">
                      {area.services.map((service, serviceIndex) => (
                        <motion.div
                          key={serviceIndex}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${area.gradient} rounded-full mt-2 flex-shrink-0`}></div>
                          <span className="text-gray-700">{service}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <motion.a
                      href="tel:(53)33520-155"
                      className={`inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r ${area.gradient} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Phone className="w-5 h-5" />
                      <span>Consultar especialista</span>
                    </motion.a>
                  </div>
                  
                  <div className={`bg-gradient-to-br ${area.gradient} p-8 lg:p-12 flex items-center justify-center`}>
                    <div className="text-center text-white">
                      <IconComponent className="w-32 h-32 mx-auto mb-6 opacity-20" />
                      <h3 className="text-2xl font-bold mb-4">Consultoria Especializada</h3>
                      <p className="text-lg opacity-90">
                        Análise técnica e estratégia personalizada para seu caso
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="mt-16 bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 md:p-12 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Precisa de orientação jurídica?
          </h3>
          
          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
            Nossa equipe está pronta para analisar seu caso e oferecer a melhor estratégia jurídica. 
            Entre em contato e receba atendimento especializado.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:(53)33520-155"
              className="inline-flex items-center space-x-3 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              <span>Ligar agora</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}