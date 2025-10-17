import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, Mail, Map, Instagram, Facebook, Scale } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: "Navegação",
      links: [
        { name: "Início", href: "/" },
        { name: "Quem Somos", href: "/quem-somos" },
        { name: "Áreas de Atuação", href: "/areas-atuacao" },
        { name: "Nossas Unidades", href: "/unidades" },
        { name: "Blog", href: "/blog" }
      ]
    },
    {
      title: "Áreas de Atuação",
      links: [
        { name: "Direito do Trabalho", href: "/areas-atuacao#trabalho" },
        { name: "Direito Tributário", href: "/areas-atuacao#tributario" },
        { name: "Direito Público", href: "/areas-atuacao#publico" },
        { name: "Direito de Família", href: "/areas-atuacao#familia" },
        { name: "Direito do Agronegócio", href: "/areas-atuacao#agronegocio" }
      ]
    },
    {
      title: "Unidades",
      links: [
        { name: "Canguçu - Matriz", href: "/unidades#cangucu" },
        { name: "Pelotas - Regional", href: "/unidades#pelotas" },
        { name: "Porto Alegre - Capital", href: "/unidades#porto-alegre" }
      ]
    }
  ]

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/nuneseribeiroadv/",
      icon: Instagram
    },
    {
      name: "Facebook", 
      href: "https://www.facebook.com/profile.php?id=100054475539412",
      icon: Facebook
    }
  ]

  return (
    <footer className="bg-gray-900 text-white pb-20">
      <div className="section-container">
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <img 
                  src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/49d0778b-1378-4054-b8c4-01c487ef44f9/logo_1760662793653_0.png"
                  alt="Nunes & Ribeiro Advocacia"
                  className="h-12 w-auto"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">Nunes & Ribeiro</h3>
                  <p className="text-gray-400">Advocacia</p>
                </div>
              </Link>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Segurança jurídica, estratégia e comprometimento com cada cliente. 
                Atuação especializada em todo o Brasil.
              </p>
              
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-white mb-6">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="bg-gray-800 rounded-xl p-6 mb-8">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Phone className="w-5 h-5 mr-2 text-primary-400" />
              Contato Direto
            </h4>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-medium">(53) 3352-0155</p>
                  <p className="text-gray-400 text-sm">Atendimento direto</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center">
                  <Map className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-medium">3 Unidades</p>
                  <p className="text-gray-400 text-sm">Canguçu, Pelotas e POA</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-secondary-500 rounded-lg flex items-center justify-center">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-medium">Atendimento</p>
                  <p className="text-gray-400 text-sm">Segunda a Sexta, 9h-18h</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-gray-400">
            <div className="text-center md:text-left">
              <p>&copy; {currentYear} Nunes & Ribeiro Advocacia. Todos os direitos reservados.</p>
              <p className="text-sm mt-1">
                Site institucional de caráter informativo, em conformidade com o Provimento nº 205/2021 da OAB.
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm">
                Criado com <em><a href="https://papum.ai" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors duration-300">Papum</a></em>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}