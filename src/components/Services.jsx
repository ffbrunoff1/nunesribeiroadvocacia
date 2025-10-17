import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Gavel, Coins, Building, Users, Wheat, Book, Instagram, Play } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Gavel,
      title: "Direito do Trabalho",
      description: "Defesa de empregados e empregadores, adicional de insalubridade, horas extras, rescisões, pejotização e passivos trabalhistas.",
      features: ["Horas Extras", "Adicional de Insalubridade", "Rescisões Trabalhistas", "Pejotização"]
    },
    {
      icon: Coins,
      title: "Direito Tributário",
      description: "Compensações fiscais, isenção de imposto de renda, revisão de tributos, créditos tributários e defesas administrativas.",
      features: ["Compensações Fiscais", "Isenção de IR", "Revisão de Tributos", "Créditos Tributários"]
    },
    {
      icon: Building,
      title: "Direito Público e Administrativo",
      description: "Servidores e empregados públicos, precatórios, doenças ocupacionais, indenizações e estabilidade.",
      features: ["Servidores Públicos", "Precatórios", "Doenças Ocupacionais", "Estabilidade"]
    },
    {
      icon: Users,
      title: "Direito de Família e Sucessões",
      description: "Divórcios, pensão alimentícia, guarda, inventários e regularização de bens.",
      features: ["Divórcios", "Pensão Alimentícia", "Guarda", "Inventários"]
    },
    {
      icon: Wheat,
      title: "Direito do Agronegócio",
      description: "Planejamento tributário rural, contratos de parceria, arrendamento, regularização de terras e responsabilidade ambiental.",
      features: ["Planejamento Rural", "Contratos Agrários", "Regularização", "Responsabilidade Ambiental"]
    }
  ]

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-600 rounded-full px-4 py-2 mb-6">
            <Gavel className="w-4 h-4" />
            <span className="font-medium">Áreas de Atuação</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Principais áreas de{' '}
            <span className="gradient-text">atuação</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções jurídicas especializadas em diversas áreas do direito, 
            sempre com foco na estratégia e nos resultados para nossos clientes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-8 card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/areas-atuacao"
                  className="inline-flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-300"
                >
                  <span>Saiba mais</span>
                  <Play className="w-4 h-4 rotate-90" />
                </Link>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 md:p-12 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Book className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Informar é proteger
          </h3>
          
          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
            Acreditamos que o conhecimento jurídico é uma forma de empoderar o cidadão. 
            Por isso, compartilhamos semanalmente informações sobre direitos trabalhistas, 
            previdenciários, tributários, públicos e empresariais de forma clara e acessível.
          </p>
          
          <motion.a
            href="https://www.instagram.com/nuneseribeiroadv/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram className="w-5 h-5" />
            <span>Siga @nuneseribeiroadv</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}