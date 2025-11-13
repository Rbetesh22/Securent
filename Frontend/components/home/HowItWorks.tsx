import React from "react";
import { motion } from "framer-motion";
import { Upload, Shield, CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Once",
    description:
      "Renters submit documents (pay stubs, IDs, guarantor info) to a secure, centralized platform",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Shield,
    title: "Automated Verification",
    description:
      "AI-powered document classification, fraud detection, income eligibility, and background checks",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: CheckCircle2,
    title: "Curated Applicants",
    description:
      "Review pre-screened, compliant applications ranked by quality—make informed decisions from qualified candidates",
    color: "from-green-500 to-green-600",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-white">
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
                How It Works
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to transform your rental application process
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 h-full">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-gray-300" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
