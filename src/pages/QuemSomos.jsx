import React from 'react'
import { motion } from 'framer-motion'
import { Users, Heart, Shield, Globe, Clock, Brain, Phone } from 'lucide-react'

export default function QuemSomos() {
  const professionals = [
    {
      name: "Dr. Gustavo Nunes",
      role: "Sócio Fundador",
      description: "Especialista em Direito do Trabalho e Tributário com mais de 10 anos de experiência. Graduado em Direito pela Universidade Federal de Pelotas.",
      expertise: ["Direito do Trabalho", "Direito Tributário", "Direito Empresarial"]
    },
    {
      name: "Dra. Talisse Ribeiro",
      role: "Sócia Fundadora",
      description: "Especialista em Direito de Família e Direito Público. Pós-graduada em Direito Processual Civil com ampla experiência em litígios.",
      expertise: ["Direito de Família", "Direito Público", "Direito Civil"]
    }
  ]

  const values = [
    {
      icon: Heart,
      title: "Ética",
      description: "Conduta profissional pautada pelos mais altos padrões éticos da advocacia"
    },
    {
      icon: Shield,
      title: "Transparência", 
      description: "Comunicação clara e honesta sobre estratégias, prazos e resultados"
    },
    {
      icon: Clock,
      title: "Agilidade",
      description: "Respostas rápidas e acompanhamento próximo de cada processo"
    },
    {
      icon: Brain,
      title: "Técnica",
      description: "Fundamentação sólida e atualização constante em jurisprudência"
    },
    {
      icon: Globe,
      title: "Inovação",
      description: "Uso de tecnologia e métodos modernos na prestação de serviços jurídicos"
    },
    {
      icon: Users,
      title: "Humanização",
      description: "Atendimento próximo e personalizado, respeitando a individualidade de cada cliente"
    }
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="section-container py-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-600 rounded-full px-4 py-2 mb-6">
            <Users className="w-4 h-4" />
            <span className="font-medium">Quem Somos</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Uma advocacia{' '}
            <span className="gradient-text">moderna</span>,{' '}
            técnica e humana
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Fundado com o propósito de transformar a experiência jurídica, o Nunes & Ribeiro 
            Advocacia combina tradição, inovação e comprometimento para oferecer soluções 
            jurídicas de excelência.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nossa História
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              O escritório Nunes & Ribeiro Advocacia nasceu da visão compartilhada de dois 
              profissionais comprometidos com a excelência jurídica: <strong>Dr. Gustavo Nunes</strong> e 
              <strong> Dra. Talisse Ribeiro</strong>.
            </p>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Fundado com base na experiência sólida de ambos os sócios, o escritório se 
              estabeleceu rapidamente como referência em advocacia especializada no Rio Grande do Sul, 
              expandindo sua atuação para todo o território nacional.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Hoje, com unidades estrategicamente localizadas em <strong>Canguçu, Pelotas e Porto Alegre</strong>, 
              oferecemos atendimento presencial e digital, mantendo sempre o compromisso com a 
              proximidade e personalização que nos caracteriza.
            </p>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
                  <div className="text-gray-600">Anos de Experiência</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-accent-500 mb-2">3</div>
                  <div className="text-gray-600">Unidades</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-secondary-500 mb-2">500+</div>
                  <div className="text-gray-600">Casos Resolvidos</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-primary-600 mb-2">95%</div>
                  <div className="text-gray-600">Taxa de Sucesso</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Sócios
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Profissionais experientes e especializados, comprometidos com a excelência 
              no atendimento e resultados para nossos clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {professionals.map((professional, index) => (
              <motion.div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{professional.name}</h3>
                  <p className="text-primary-600 font-semibold">{professional.role}</p>
                </div>
                
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  {professional.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-center mb-3">Especialidades:</h4>
                  {professional.expertise.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center justify-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                      <span className="text-gray-600 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Princípios que norteiam nossa atuação e garantem a qualidade 
              dos serviços prestados aos nossos clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 card-hover"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 md:p-12 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Conheça nossa equipe pessoalmente
          </h3>
          
          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
            Agende uma consulta e descubra como podemos ajudar a resolver 
            sua questão jurídica com a experiência e dedicação que você merece.
          </p>
          
          <motion.a
            href="tel:(53)33520-155"
            className="inline-flex items-center space-x-3 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-5 h-5" />
            <span>Agendar consulta</span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}