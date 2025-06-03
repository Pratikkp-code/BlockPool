"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles, CheckCircle, Users, Shield, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="section-lg relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

      {/* Content */}
      <div className="relative z-10 pt-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Badge variant="outline" className="mb-6 px-3 py-1 text-sm">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                Enterprise-Grade Supply Chain Platform
              </Badge>
            </motion.div>

            <motion.h1
              className="text-balance mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="gradient-text">Transform</span> Your Supply Chain with Blockchain Technology
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Connect manufacturers and retailers on a secure, transparent platform powered by cutting-edge blockchain
              technology for unprecedented efficiency and trust.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button size="lg" className="hover-effect">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button variant="outline" size="lg" className="hover-effect">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </motion.div>
          </div>

          {/* Visual Elements */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative max-w-4xl mx-auto">
              {/* Platform Preview */}
              <div className="bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-2xl p-8 border shadow-lg">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold">Manufacturers</h3>
                    <p className="text-sm text-muted-foreground">Create bulk orders and set pricing tiers</p>
                  </div>

                  <div className="space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
                      <Shield className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="font-semibold">Blockchain</h3>
                    <p className="text-sm text-muted-foreground">Secure, transparent smart contracts</p>
                  </div>

                  <div className="space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-secondary/50 flex items-center justify-center">
                      <Zap className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold">Retailers</h3>
                    <p className="text-sm text-muted-foreground">Join orders and access better pricing</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats & Features */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="card p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">99.9%</div>
              <p className="text-muted-foreground">Transaction Reliability</p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">30%</div>
              <p className="text-muted-foreground">Cost Reduction</p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">5,000+</div>
              <p className="text-muted-foreground">Active Users</p>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {["Enterprise-Grade Security", "Real-time Tracking", "Smart Contracts", "Regulatory Compliance"].map(
              (feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ),
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
