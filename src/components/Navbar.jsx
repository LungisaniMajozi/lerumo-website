import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Business Profile', href: '/profile' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-dark py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group block"
        >
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-cyan rounded-lg flex items-center justify-center font-bold text-primary group-hover:shadow-glow transition-all">
              L
            </div>
            <div>
              <p className="text-white font-bold text-lg">LERUMO</p>
              <p className="text-accent text-[10px] font-semibold">PROTECTION</p>
            </div>
          </motion.div>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.div key={link.name} whileHover={{ color: '#00d9ff' }}>
              <Link
                to={link.href}
                className="text-text-muted hover:text-accent transition-colors text-sm font-medium"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-2.5 bg-gradient-cyan text-primary font-bold rounded-lg hover:shadow-glow-lg transition-all"
          >
            Get Protected
          </motion.button>
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span className={`h-0.5 w-6 bg-accent transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`h-0.5 w-6 bg-accent transition-all ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-accent transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-dark mt-4 mx-6 rounded-xl p-6 space-y-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="block text-text-muted hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <button className="w-full px-6 py-2.5 bg-gradient-cyan text-primary font-bold rounded-lg mt-4">
              Get Protected
            </button>
          </Link>
        </motion.div>
      )}
    </motion.nav>
  )
}
