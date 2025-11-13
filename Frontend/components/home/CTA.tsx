import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob" />
              <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000" />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 py-20 md:px-16 md:py-24 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to Modernize Your
                <br />
                Rental Verification Process?
              </h2>

              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get in touch to learn how Securent can streamline compliance for
                your rental applications
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all px-8 py-6 text-lg font-semibold"
                >
                  Request Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg font-semibold"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </div>

              <p className="mt-8 text-white/80">
                Currently in development • Launching Q1 2025
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
