import HeroSection from "@/components/sections/hero-section"
import FeaturesSection from "@/components/sections/features-section"
import HowItWorksSection from "@/components/sections/how-it-works-section"
import { Navbar } from "@/components/layout/navbar"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, Shield, Zap } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-14">
        <HeroSection />
      </div>

      {/* Trusted By Section */}
      <section className="py-8 md:py-10 lg:py-12 bg-muted/30">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
              Trusted by industry leaders
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {/* Replace with actual logos */}
            <div className="text-muted-foreground/70 text-xl font-semibold">ACME Corp</div>
            <div className="text-muted-foreground/70 text-xl font-semibold">GlobalTech</div>
            <div className="text-muted-foreground/70 text-xl font-semibold">FutureCo</div>
            <div className="text-muted-foreground/70 text-xl font-semibold">InnovateCorp</div>
            <div className="text-muted-foreground/70 text-xl font-semibold">TechGiant</div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 mb-4">Key Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our platform delivers measurable improvements across your entire supply chain operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-2">Enhanced Security</h4>
              <p className="text-muted-foreground mb-4">
                Military-grade encryption and immutable blockchain records ensure complete data integrity.
              </p>
              <div className="text-2xl font-bold gradient-text">99.9%</div>
              <p className="text-sm text-muted-foreground">Security rating</p>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-2">Operational Efficiency</h4>
              <p className="text-muted-foreground mb-4">
                Automated smart contracts and streamlined processes reduce manual intervention.
              </p>
              <div className="text-2xl font-bold gradient-text">85%</div>
              <p className="text-sm text-muted-foreground">Faster processing</p>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-2">Cost Reduction</h4>
              <p className="text-muted-foreground mb-4">
                Eliminate intermediaries and reduce overhead with direct manufacturer-retailer connections.
              </p>
              <div className="text-2xl font-bold gradient-text">30%</div>
              <p className="text-sm text-muted-foreground">Average savings</p>
            </div>
          </div>
        </div>
      </section>

      <HowItWorksSection />
      <FeaturesSection />

      {/* CTA Section - Fixed visibility */}
      <section className="py-16 md:py-20 lg:py-24 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent opacity-90" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle,_white_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
        </div>

        <div className="mx-auto w-full max-w-7xl px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white mb-6 text-4xl md:text-5xl font-bold">Ready to get started?</h2>
            <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
              Join thousands of businesses already transforming their supply chain with ChainSupply.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12 md:py-16 border-t border-border">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="col-span-2 lg:col-span-1">
              <div className="text-xl font-bold gradient-text mb-4">ChainSupply</div>
              <p className="text-muted-foreground text-sm mb-4">
                Enterprise-grade blockchain supply chain platform for manufacturers and retailers.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4 text-foreground">Product</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4 text-foreground">Company</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4 text-foreground">Resources</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ChainSupply. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Terms
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Privacy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
