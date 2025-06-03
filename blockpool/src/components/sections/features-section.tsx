"use client"

import { Shield, Zap, BarChart3, Users, Wallet, Globe, Star, ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const features = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Military-grade encryption and blockchain security ensure your transactions are always protected.",
    link: "/features/security",
  },
  {
    icon: Zap,
    title: "Real-time Execution",
    description: "Smart contracts execute instantly when conditions are met, eliminating delays and paperwork.",
    link: "/features/smart-contracts",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "AI-powered analytics provide actionable insights for optimizing your supply chain operations.",
    link: "/features/analytics",
  },
  {
    icon: Users,
    title: "Partner Network",
    description: "Connect with a global network of verified manufacturers and retailers worldwide.",
    link: "/features/network",
  },
  {
    icon: Wallet,
    title: "Tokenized Rewards",
    description: "Earn valuable tokens for participation that can be used for discounts or traded.",
    link: "/features/rewards",
  },
  {
    icon: Globe,
    title: "Global Compliance",
    description: "Built-in compliance tools for international regulations and standards.",
    link: "/features/compliance",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="section-lg relative">
      <div>
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-6">
              <Star className="w-3.5 h-3.5 mr-1.5" />
              Enterprise Features
            </Badge>
          </motion.div>

          <motion.h2
            className="mb-4 text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Powerful Tools for Modern <span className="gradient-text">Supply Chains</span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our platform provides enterprise-grade features designed to streamline operations, enhance transparency, and
            drive efficiency across your entire supply chain.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="h-full hover-effect">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" asChild className="mt-2 p-0">
                    <a href={feature.link} className="flex items-center text-primary">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button size="lg" className="hover-effect">
            Explore All Features
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
