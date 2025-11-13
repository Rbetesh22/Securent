import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, FileCheck, Award, Database, Eye } from "lucide-react";

const trustItems = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "AES-256 encryption for data at rest and in transit",
  },
  {
    icon: FileCheck,
    title: "GDPR & CCPA Ready",
    description: "Built with global privacy regulations in mind",
  },
  {
    icon: Database,
    title: "Zero-Knowledge",
    description: "We never see or store unencrypted sensitive data",
  },
  {
    icon: Eye,
    title: "Audit Trails",
    description: "Complete logging of all data access and checks",
  },
  {
    icon: Shield,
    title: "Secure Infrastructure",
    description: "Enterprise-grade security architecture",
  },
  {
    icon: Award,
    title: "Certified APIs",
    description: "Experian, Equifax, Onfido, and other industry leaders",
  },
];

export default function TrustSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Security & Privacy First
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Bank-level security protecting sensitive financial and personal
              information with industry certifications
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-300">
            Powered by Industry-Leading APIs
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              "Experian",
              "Equifax",
              "Onfido",
              "TransUnion",
              "Plaid",
              "Checkr",
              "LexisNexis",
              "Stripe Identity",
            ].map((partner, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 text-white font-semibold hover:bg-white/20 transition-all">
                  {partner}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              15+
            </div>
            <p className="text-gray-400">API Integrations</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              256-bit
            </div>
            <p className="text-gray-400">Encryption Standard</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              99.9%
            </div>
            <p className="text-gray-400">Uptime SLA</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
