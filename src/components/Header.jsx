import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Scale, Gavel, Users, Building, Book, Globe, Phone } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { 
      name: 'Início', 
      href: '/' 
    },
    { 
      name: 'Quem Somos', 
      href: '/quem-somos' 
    },
    {
      name: 'Áreas de Atuação',
      href: '/areas-atuacao',
      submenu: [
        { name: 'Direito do Trabalho', href: '/areas-atuacao#trabalho', icon: Gavel },
        { name: 'Direito Tributário', href: '/areas-atuacao#tributario', icon: Scale },
        { name: 'Direito Público', href: '/areas-atuacao#publico', icon: Building },
        { name: 'Direito de Família', href: '/areas-atuacao#familia', icon: Users },
        { name: 'Direito do Agronegócio', href: '/areas-atuacao#agronegocio', icon: Globe }
      ]
    },
    { 
      name: 'Nossas Unidades', 
      href: '/unidades' 
    },
    { 
      name: 'Blog', 
      href: '/blog' 
    }
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleDropdownClick = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index)
  }

  const isActivePath = (href) => {
    if (href === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(href)
  }

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/49d0778b-1378-4054-b8c4-01c487ef44f9/logo_1760662793653_0.png"
                alt="Nunes & Ribeiro Advocacia"
                className="h-12 w-auto transition-all duration-300"
              />
              <div className="hidden sm:block">
                <h1 className={`text-xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-primary-600' : 'text-white'
                }`}>
                  Nunes & Ribeiro
                </h1>
                <p className={`text-sm transition-colors duration-300 ${
                  isScrolled ? 'text-gray-600' : 'text-gray-200'
                }`}>
                  Advocacia
                </p>
              </div>
            </Link>
          </motion.div>

          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => handleDropdownClick(index)}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-1 ${
                        isActivePath(item.href)
                          ? isScrolled
                            ? 'text-primary-600 bg-primary-50'
                            : 'text-white bg-white/20'
                          : isScrolled
                            ? 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                            : 'text-white hover:text-gray-200 hover:bg-white/10'
                      }`}
                    >
                      <span className="font-medium">{item.name}</span>
                      <motion.div
                        animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Play className="w-3 h-3 rotate-90" />
                      </motion.div>
                    </button>
                    
                    <motion.div 
                      className="menu-dropdown"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ 
                        opacity: activeDropdown === index ? 1 : 0,
                        y: activeDropdown === index ? 0 : -10,
                        visibility: activeDropdown === index ? 'visible' : 'hidden'
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.submenu.map((subItem) => {
                        const IconComponent = subItem.icon
                        return (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="menu-item flex items-center space-x-3"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <IconComponent className="w-4 h-4" />
                            <span>{subItem.name}</span>
                          </Link>
                        )
                      })}
                    </motion.div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                      isActivePath(item.href)
                        ? isScrolled
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-white bg-white/20'
                        : isScrolled
                          ? 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                          : 'text-white hover:text-gray-200 hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <motion.a
              href="tel:(53)33520-155"
              className={`hidden md:flex items-center space-x-2 px-6 py-2 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? 'bg-primary-600 text-white hover:bg-primary-700'
                  : 'bg-white text-primary-600 hover:bg-gray-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold">(53) 3352-0155</span>
            </motion.a>

            <button
              onClick={toggleMenu}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="py-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => handleDropdownClick(item.name)}
                        className="w-full text-left px-6 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200 flex items-center justify-between"
                      >
                        <span className="font-medium">{item.name}</span>
                        <motion.div
                          animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Play className="w-4 h-4 rotate-90" />
                        </motion.div>
                      </button>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.2 }}
                          className="bg-gray-50"
                        >
                          {item.submenu.map((subItem) => {
                            const IconComponent = subItem.icon
                            return (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className="block px-12 py-3 text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200 flex items-center space-x-3"
                                onClick={() => {
                                  setIsMenuOpen(false)
                                  setActiveDropdown(null)
                                }}
                              >
                                <IconComponent className="w-4 h-4" />
                                <span>{subItem.name}</span>
                              </Link>
                            )
                          })}
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-6 py-3 transition-colors duration-200 font-medium ${
                        isActivePath(item.href)
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="px-6 pt-4 border-t border-gray-100">
                <a
                  href="tel:(53)33520-155"
                  className="flex items-center justify-center space-x-2 w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="w-4 h-4" />
                  <span>(53) 3352-0155</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}