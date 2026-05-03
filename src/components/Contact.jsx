import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Get <span className="text-gradient">Protected?</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Contact us today to discuss a customized security solution for your needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { icon: '📍', label: 'Location', value: 'Midrand, South Africa' },
            { icon: '📞', label: 'Available', value: '24/7 - 365 Days' },
            { icon: '✉️', label: 'Services', value: '5+ Security Types' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 text-center"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <p className="text-text-muted text-sm mb-1">{item.label}</p>
              <p className="text-white font-semibold">{item.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full bg-white/5 border border-accent/20 rounded-lg px-4 py-3 text-white placeholder-text-muted focus:outline-none focus:border-accent transition-all"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full bg-white/5 border border-accent/20 rounded-lg px-4 py-3 text-white placeholder-text-muted focus:outline-none focus:border-accent transition-all"
            />
          </div>

          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            required
            className="w-full bg-white/5 border border-accent/20 rounded-lg px-4 py-3 text-white mb-6 focus:outline-none focus:border-accent transition-all"
          >
            <option value="">Select a Service</option>
            <option value="armed">Armed & Unarmed Guards</option>
            <option value="patrol">Mobile Patrols</option>
            <option value="event">Event Security</option>
            <option value="cctv">CCTV Monitoring</option>
            <option value="executive">Executive Protection</option>
            <option value="industrial">Industrial Security</option>
          </select>

          <textarea
            placeholder="Tell us about your security needs..."
            rows="5"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            className="w-full bg-white/5 border border-accent/20 rounded-lg px-4 py-3 text-white placeholder-text-muted focus:outline-none focus:border-accent transition-all mb-6 resize-none"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full px-8 py-4 bg-gradient-gold text-primary font-bold rounded-lg hover:shadow-glow-lg transition-all"
          >
            {submitted ? '✓ Message Sent!' : 'Send Message'}
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
