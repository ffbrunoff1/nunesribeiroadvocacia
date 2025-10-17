import React from 'react'
import { motion } from 'framer-motion'
import { Users, Heart, Clock, Shield, Globe, Brain } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Speech,
      title: "Atendimento humanizado",
      description: "Cada cliente é acompanhado de perto pelos advogados responsáveis pelo caso."
    },
    {
      icon: Clock,
      title: "Agilidade e transparência",
      description: "Informações claras sobre prazos, andamento e estratégias processuais."
    },
    {
      icon: Shield,
      title: "Soluções personalizadas",
      description: "Análise individual de cada situação, sem modelos prontos."
    },
    {
      icon: Globe,
      title: "Atuação híbrida",
      description: "Atendimento presencial e digital em todo o território nacional."
    },
    {
      icon: Brain,
      title: "Advocacia estratégica",
      description: "Fundamentação sólida e atuação técnica com base em jurisprudência atualizada."
    }
  ]

  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <motion.div 
                className="inline-flex items-center space-x-2 bg-primary-50 text-primary-600 rounded-full px-4 py-2 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Users className="w-4 h-4" />
                <span className="font-medium">Quem Somos</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Uma advocacia{' '}
                <span className="gradient-text">moderna</span>,{' '}
                técnica e humana
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                O escritório Nunes & Ribeiro Advocacia foi fundado pelos advogados 
                <strong className="text-primary-600"> Gustavo Nunes</strong> e 
                <strong className="text-primary-600"> Talisse Ribeiro</strong>, com o propósito de oferecer 
                um atendimento jurídico de excelência, pautado pela ética, transparência e busca 
                constante por soluções seguras e personalizadas.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Com unidades em <strong>Canguçu, Pelotas e Porto Alegre</strong>, atuamos de forma 
                presencial e digital em todo o Brasil, oferecendo suporte jurídico estratégico 
                tanto para pessoas quanto para empresas.
              </p>
            </div>

            <motion.div
              className="flex items-center space-x-4"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Missão</div>
                  <div className="text-gray-600 text-sm">Proteger direitos com ética</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-secondary-500 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Visão</div>
                  <div className="text-gray-600 text-sm">Excelência jurídica nacional</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-8">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-accent-500 to-secondary-500 rounded-full opacity-20"></div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Por que escolher o Nunes & Ribeiro?</h3>
              
              <div className="space-y-6">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4"
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}