import React from "react";
import { motion } from "framer-motion";
import {
  FileCheck,
  Shield,
  CreditCard,
  Users,
  BarChart3,
  Lock,
  Briefcase,
  FileText,
  Eye,
  Database,
  Fingerprint,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "Credit History Reports",
    description:
      "Full credit reports via Experian, Equifax, and TransUnion APIs with automated scoring",
    size: "large",
  },
  {
    icon: Briefcase,
    title: "Employment Verification",
    description:
      "Real-time employment and income verification through trusted payroll integrations",
    size: "small",
  },
  {
    icon: Fingerprint,
    title: "KYC Compliance",
    description: "Know Your Customer verification with document authentication",
    size: "small",
  },
  {
    icon: Shield,
    title: "Background Screening",
    description:
      "Criminal history, eviction records, and rental history checks via certified providers",
    size: "medium",
  },
  {
    icon: FileCheck,
    title: "Document Verification",
    description:
      "AI-powered fraud detection for IDs, pay stubs, bank statements, and tax documents",
    size: "medium",
  },
  {
    icon: Lock,
    title: "Data Privacy & Security",
    description:
      "End-to-end encryption, GDPR-ready architecture, zero-knowledge data handling",
    size: "large",
  },
  {
    icon: Eye,
    title: "Identity Verification",
    description: "Biometric verification and liveness detection via Onfido API",
    size: "small",
  },
  {
    icon: Database,
    title: "Audit Trail",
    description: "Complete compliance logs for every check performed",
    size: "small",
  },
  {
    icon: ShieldCheck,
    title: "Sanctions Screening",
    description: "AML/CFT checks against global watchlists and PEP databases",
    size: "medium",
  },
  {
    icon: BarChart3,
    title: "Risk Scoring",
    description:
      "ML-powered risk assessment combining all verification data points",
    size: "medium",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white"
    >
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
                Comprehensive Verification Suite
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industry-leading APIs and advanced compliance checks for complete
              tenant screening
            </p>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const gridClass =
              feature.size === "large"
                ? "md:col-span-2 md:row-span-2"
                : feature.size === "medium"
                ? "md:col-span-2"
                : "md:col-span-1";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`${gridClass} group`}
              >
                <div className="relative h-full bg-white rounded-2xl p-6 md:p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
