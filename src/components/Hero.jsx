import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, Scale, Calendar } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-pattern overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/85 to-primary-700/80"></div>
      
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{ 
          background: [
            'radial-gradient(circle at 20% 80%, #5A8DEE 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, #5A8DEE 0%, transparent 50%)',
            'radial-gradient(circle at 40% 40%, #5A8DEE 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
      />

      <div className="relative z-10 section-container">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div 
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Scale className="w-5 h-5 text-accent-400" />
              <span className="text-white font-medium">Advocacia Especializada</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-shadow">
              Segurança jurídica,{' '}
              <span className="bg-gradient-to-r from-accent-400 to-accent-200 bg-clip-text text-transparent">
                estratégia
              </span>{' '}
              e comprometimento
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Atuamos com excelência nas áreas trabalhista, tributária, pública, empresarial e de família, 
              defendendo os direitos de pessoas físicas e jurídicas com ética, técnica e resultado.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.a
              href="tel:(53)33520-155"
              className="btn-primary flex items-center space-x-3 text-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(13, 40, 166, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              <span>Fale com um advogado</span>
            </motion.a>

            <motion.div
              className="btn-outline flex items-center space-x-3 text-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              <Calendar className="w-5 h-5" />
              <span>Agendar consulta</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { 
                number: "10+", 
                label: "Anos de Experiência", 
                description: "Tradição em advocacia especializada" 
              },
              { 
                number: "3", 
                label: "Unidades", 
                description: "Canguçu, Pelotas e Porto Alegre" 
              },
              { 
                number: "500+", 
                label: "Casos Resolvidos", 
                description: "Resultados efetivos para nossos clientes" 
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6"
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              >
                <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-2">{stat.number}</div>
                <div className="text-white font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-300 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}