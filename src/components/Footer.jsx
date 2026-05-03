import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-accent/20 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo_transparent.png" alt="Lerumo Protection Logo" className="h-20 w-auto object-contain" />
            </div>
            <p className="text-text-muted text-sm">Protecting what matters most since 2024.</p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-text-main mb-4">Quick Links</h4>
            <ul className="space-y-2 text-text-muted text-sm">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/profile" className="hover:text-accent transition-colors">Business Profile</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-text-main mb-4">Services</h4>
            <ul className="space-y-2 text-text-muted text-sm">
              <li>Armed Guards</li>
              <li>Mobile Patrols</li>
              <li>Event Security</li>
              <li>CCTV Monitoring</li>
            </ul>
          </motion.div>

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-text-main mb-4">Company</h4>
            <ul className="space-y-2 text-text-muted text-sm">
              <li>Reg: 2024/553925/07</li>
              <li>TAX: 9081571284</li>
              <li>HQ: Softstart BTI, 2nd Street, Midrand</li>
              <li>Available 24/7</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="border-t border-accent/20 pt-8 text-center text-text-muted text-sm">
          <p>© {new Date().getFullYear()} Lerumo Legacy Protection Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
