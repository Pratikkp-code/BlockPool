"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/layout/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Factory, Store, ArrowRight, Users, Package, TrendingUp, Shield, CheckCircle } from "lucide-react"

export default function DashboardPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-14 pb-16">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 mt-8">
            <div>
              <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-2">
                <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                  <a href="/" className="transition-colors hover:text-foreground">
                    Home
                  </a>
                </div>
                <span className="mx-1">/</span>
                <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                  <span className="font-medium text-foreground">Dashboard</span>
                </div>
              </div>
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Select Your Role</h1>
              <p className="text-muted-foreground mt-2">Choose how you want to participate in the platform</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button variant="outline" size="sm" className="mr-2">
                Help
              </Button>
              <Button size="sm">Contact Support</Button>
            </div>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 mb-4">
                Welcome to <span className="gradient-text">ChainSupply</span>
              </h2>
              <p className="leading-7 text-lg text-muted-foreground mb-8">
                Join our blockchain-powered supply chain platform and connect with partners worldwide. Choose your role
                to get started with tailored features and benefits.
              </p>
            </div>
          </div>

          {/* Role Selection - Mobile */}
          <div className="md:hidden mb-8">
            <Tabs defaultValue={selectedRole || "manufacturer"} onValueChange={(value) => setSelectedRole(value)}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="manufacturer">Manufacturer</TabsTrigger>
                <TabsTrigger value="retailer">Retailer</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {/* Manufacturer Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedRole("manufacturer")}
            >
              <Card
                className={`h-full transition-all duration-300 cursor-pointer ease-out hover:-translate-y-1 hover:shadow-lg ${
                  selectedRole === "manufacturer"
                    ? "border-primary shadow-lg ring-2 ring-primary/20"
                    : "hover:border-primary/50 hover:shadow-md"
                }`}
              >
                <CardHeader className="text-center pb-4 flex flex-col space-y-1.5 p-6">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Factory className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-semibold leading-none tracking-tight mb-2">
                    Manufacturer
                  </CardTitle>
                  <p className="text-muted-foreground">Create bulk orders and connect with retailers worldwide</p>
                </CardHeader>
                <CardContent className="space-y-6 p-6 pt-0">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Package className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">Create Bulk Orders</div>
                        <div className="text-xs text-muted-foreground">Set minimum quantities and pricing tiers</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">Connect with Retailers</div>
                        <div className="text-xs text-muted-foreground">Build a global network of partners</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">Track Performance</div>
                        <div className="text-xs text-muted-foreground">Monitor order status and analytics</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Shield className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">Secure Contracts</div>
                        <div className="text-xs text-muted-foreground">Blockchain-powered smart contracts</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t flex items-center p-6">
                    <Button
                      className="w-full"
                      variant={selectedRole === "manufacturer" ? "default" : "outline"}
                      size="lg"
                    >
                      Continue as Manufacturer
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Retailer Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onClick={() => setSelectedRole("retailer")}
            >
              <Card
                className={`h-full transition-all duration-300 cursor-pointer ease-out hover:-translate-y-1 hover:shadow-lg ${
                  selectedRole === "retailer"
                    ? "border-primary shadow-lg ring-2 ring-primary/20"
                    : "hover:border-primary/50 hover:shadow-md"
                }`}
              >
                <CardHeader className="text-center pb-4 flex flex-col space-y-1.5 p-6">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                    <Store className="w-10 h-10 text-accent" />
                  </div>
                  <CardTitle className="text-2xl font-semibold leading-none tracking-tight mb-2">Retailer</CardTitle>
                  <p className="text-muted-foreground">Browse and join manufacturer orders for better pricing</p>
                </CardHeader>
                <CardContent className="space-y-6 p-6 pt-0">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                        <Package className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">Browse Orders</div>
                        <div className="text-xs text-muted-foreground">
                          Discover available bulk purchase opportunities
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                        <Users className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">Join Purchases</div>
                        <div className="text-xs text-muted-foreground">Collaborate with other retailers</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">Better Pricing</div>
                        <div className="text-xs text-muted-foreground">Access volume discounts and deals</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                        <Shield className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">Transparent Deals</div>
                        <div className="text-xs text-muted-foreground">Clear terms and blockchain verification</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t flex items-center p-6">
                    <Button className="w-full" variant={selectedRole === "retailer" ? "default" : "outline"} size="lg">
                      Continue as Retailer
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Benefits Section */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">Why Choose ChainSupply?</h3>
              <p className="text-muted-foreground">
                Join thousands of businesses already transforming their supply chain operations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-2">Verified Partners</h4>
                <p className="text-sm text-muted-foreground">All participants are verified for security and trust</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-2">Blockchain Security</h4>
                <p className="text-sm text-muted-foreground">Immutable records and smart contract automation</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-2">Better Economics</h4>
                <p className="text-sm text-muted-foreground">Reduce costs through direct connections and bulk orders</p>
              </div>
            </div>

            {/* Additional Information */}
            <div className="text-center">
              <p className="text-muted-foreground mb-4">Not sure which role fits your business?</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="outline">Learn More About Roles</Button>
                <Button variant="ghost">Schedule a Demo</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
