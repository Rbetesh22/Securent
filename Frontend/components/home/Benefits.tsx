import React from "react";
import { motion } from "framer-motion";
import { Building2, Home, CheckCircle2 } from "lucide-react";

const landlordBenefits = [
  "Process applications 10x faster",
  "Reduce fraud with AI-powered verification",
  "Maintain complete audit trails",
  "Integrate with existing workflows",
  "Automated compliance checks",
];

const renterBenefits = [
  "Submit documents once, use everywhere",
  "Secure, encrypted storage",
  "Track application status in real-time",
  "Faster approval times",
  "Never lose documents again",
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Built for Everyone
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you're a landlord managing properties or a renter looking
              for your next home
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Landlords & Agents */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="h-full bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-10 border border-blue-100 hover:shadow-2xl transition-all duration-300">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-6 shadow-lg">
                <Building2 className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-3xl font-bold mb-2 text-gray-900">
                For Landlords & Agents
              </h3>
              <p className="text-gray-600 mb-6">
                Streamline your application process and make confident decisions
                faster
              </p>

              <ul className="space-y-4">
                {landlordBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Renters */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="h-full bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-10 border border-green-100 hover:shadow-2xl transition-all duration-300">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-500 flex items-center justify-center mb-6 shadow-lg">
                <Home className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-3xl font-bold mb-2 text-gray-900">
                For Renters
              </h3>
              <p className="text-gray-600 mb-6">
                Apply to multiple properties without the hassle of resubmitting
                documents
              </p>

              <ul className="space-y-4">
                {renterBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
