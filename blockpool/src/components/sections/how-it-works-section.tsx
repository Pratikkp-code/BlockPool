"use client"

import { useState } from "react"
import { ArrowRight, Factory, Store, Coins, Database, CheckCircle, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const steps = [
  {
    id: "step1",
    title: "Manufacturers Create Orders",
    description: "Create bulk orders with smart pricing tiers and minimum requirements.",
    icon: Factory,
    features: ["Bulk Order Creation", "Smart Pricing", "Minimum Requirements"],
  },
  {
    id: "step2",
    title: "Retailers Join Orders",
    description: "Browse and commit to orders with real-time updates and transparent pricing.",
    icon: Store,
    features: ["Order Browsing", "Real-time Updates", "Transparent Pricing"],
  },
  {
    id: "step3",
    title: "Smart Contracts Execute",
    description: "Automated execution when requirements are met with complete transparency.",
    icon: Database,
    features: ["Automatic Execution", "Complete Transparency", "Secure Processing"],
  },
  {
    id: "step4",
    title: "Rewards Distribution",
    description: "Instant token rewards based on participation and volume contribution.",
    icon: Coins,
    features: ["Instant Rewards", "Volume-based", "Token Distribution"],
  },
]

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState("step1")

  return (
    <section id="how-it-works" className="section-lg relative bg-muted/30">
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
              <Zap className="w-3.5 h-3.5 mr-1.5" />
              How It Works
            </Badge>
          </motion.div>

          <motion.h2
            className="mb-4 text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="gradient-text">Simple.</span> Secure. <span className="gradient-text">Seamless.</span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our platform revolutionizes supply chain management through transparent blockchain technology and
            intelligent automation, creating a seamless experience for all participants.
          </motion.p>
        </div>

        {/* Process Steps - Desktop */}
        <div className="hidden lg:block mb-16">
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Process Line */}
            <div className="absolute top-16 left-0 w-full h-0.5 bg-border" />

            {/* Steps */}
            <div className="grid grid-cols-4 gap-6 relative">
              {steps.map((step, index) => (
                <div key={step.id} className="relative">
                  {/* Step Number */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-6 mx-auto z-10 relative ${
                      activeStep === step.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {index + 1}
                  </div>

                  {/* Step Content */}
                  <Card
                    className={`h-full cursor-pointer transition-all ${
                      activeStep === step.id ? "border-primary shadow-md" : "hover:border-primary/50"
                    }`}
                    onClick={() => setActiveStep(step.id)}
                  >
                    <CardHeader className="pb-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4">{step.description}</p>
                      <div className="space-y-2">
                        {step.features.map((feature) => (
                          <div key={feature} className="flex items-center text-sm">
                            <CheckCircle className="w-3.5 h-3.5 text-primary mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Process Steps - Mobile */}
        <div className="lg:hidden mb-16">
          <Tabs defaultValue="step1" value={activeStep} onValueChange={setActiveStep}>
            <TabsList className="grid grid-cols-4 mb-8">
              {steps.map((step, index) => (
                <TabsTrigger key={step.id} value={step.id}>
                  {index + 1}
                </TabsTrigger>
              ))}
            </TabsList>
            {steps.map((step) => (
              <TabsContent key={step.id} value={step.id}>
                <Card>
                  <CardHeader>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <div className="space-y-2">
                      {step.features.map((feature) => (
                        <div key={feature} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* CTA Section */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-gradient-to-br from-primary/5 via-background to-accent/5">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <ArrowRight className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
                Ready to Transform Your Supply Chain?
              </h3>

              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
                Join thousands of manufacturers and retailers who are already experiencing the benefits of
                blockchain-powered supply chain management.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="hover-effect">
                  Get Started Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="hover-effect">
                  Schedule a Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
