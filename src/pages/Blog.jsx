import React from 'react'
import { motion } from 'framer-motion'
import { Book, Instagram, Facebook, Calendar, Users, Gavel, Building } from 'lucide-react'

export default function Blog() {
  const categories = [
    {
      icon: Gavel,
      title: "Direito do Trabalho",
      description: "Informações sobre direitos trabalhistas, horas extras, rescisões e muito mais"
    },
    {
      icon: Users,
      title: "Direito de Família",
      description: "Orientações sobre divórcio, pensão alimentícia, guarda e questões familiares"
    },
    {
      icon: Building,
      title: "Direito Público",
      description: "Conteúdos sobre servidores públicos, precatórios e direito administrativo"
    }
  ]

  const recentPosts = [
    {
      title: "Direitos do trabalhador em caso de demissão",
      summary: "Entenda quais são os seus direitos quando ocorre a rescisão do contrato de trabalho",
      date: "15 de Janeiro, 2024",
      category: "Direito do Trabalho"
    },
    {
      title: "Como funciona a pensão alimentícia",
      summary: "Tudo que você precisa saber sobre pensão alimentícia: valores, revisão e execução",
      date: "10 de Janeiro, 2024", 
      category: "Direito de Família"
    },
    {
      title: "Direitos dos servidores públicos",
      summary: "Principais direitos e benefícios dos servidores públicos federais, estaduais e municipais",
      date: "05 de Janeiro, 2024",
      category: "Direito Público"
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
            <Book className="w-4 h-4" />
            <span className="font-medium">Blog Jurídico</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Informar é{' '}
            <span className="gradient-text">proteger</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Acreditamos que o conhecimento jurídico é uma forma de empoderar o cidadão. 
            Compartilhamos informações sobre direitos de forma clara e acessível.
          </p>
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 md:p-12 text-center text-white mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Instagram className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siga nosso conteúdo nas redes sociais
          </h2>
          
          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
            Publicamos semanalmente informações sobre direitos trabalhistas, previdenciários, 
            tributários, públicos e empresariais de forma didática e esclarecedora.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://www.instagram.com/nuneseribeiroadv/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram className="w-5 h-5" />
              <span>@nuneseribeiroadv</span>
            </motion.a>

            <motion.a
              href="https://www.facebook.com/profile.php?id=100054475539412"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Facebook className="w-5 h-5" />
              <span>Facebook</span>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Categorias de Conteúdo
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 card-hover"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{category.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Últimas Publicações
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  
                  <div className="inline-block bg-primary-50 text-primary-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    {post.category}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Tem dúvidas jurídicas?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Nossa equipe está pronta para esclarecer suas questões e oferecer orientação personalizada.
            </p>
            <motion.a
              href="tel:(53)33520-155"
              className="btn-primary inline-flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              <span>Fale com um advogado</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}