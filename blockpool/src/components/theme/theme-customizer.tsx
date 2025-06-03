"use client"

import { useState } from "react"
import { Settings, Palette, Type, ImageIcon, X } from "lucide-react"
import { useTheme } from "@/components/theme/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const themes = [
  {
    name: "Light",
    value: "light",
    color: "bg-gradient-to-r from-slate-50 to-blue-50",
    preview: "Clean & Bright",
    description: "Classic light theme with blue accents",
  },
  {
    name: "Dark",
    value: "dark",
    color: "bg-gradient-to-r from-slate-900 to-slate-800",
    preview: "Modern & Sleek",
    description: "Professional dark theme",
  },
  {
    name: "Blue",
    value: "blue",
    color: "bg-gradient-to-r from-blue-100 to-blue-200",
    preview: "Professional",
    description: "Corporate blue theme",
  },
  {
    name: "Green",
    value: "green",
    color: "bg-gradient-to-r from-green-100 to-emerald-200",
    preview: "Nature & Growth",
    description: "Fresh green theme",
  },
  {
    name: "Purple",
    value: "purple",
    color: "bg-gradient-to-r from-purple-100 to-violet-200",
    preview: "Creative & Tech",
    description: "Modern purple theme",
  },
  {
    name: "Orange",
    value: "orange",
    color: "bg-gradient-to-r from-orange-100 to-amber-200",
    preview: "Warm & Energy",
    description: "Energetic orange theme",
  },
  {
    name: "Red",
    value: "red",
    color: "bg-gradient-to-r from-red-100 to-rose-200",
    preview: "Bold & Corporate",
    description: "Strong red theme",
  },
  {
    name: "Neutral",
    value: "neutral",
    color: "bg-gradient-to-r from-gray-100 to-gray-200",
    preview: "Minimal & Clean",
    description: "Sophisticated gray theme",
  },
]

const fonts = [
  { name: "Inter", value: "inter", preview: "Aa", className: "font-inter", description: "Modern & Readable" },
  { name: "Poppins", value: "poppins", preview: "Aa", className: "font-poppins", description: "Friendly & Round" },
  { name: "Roboto", value: "roboto", preview: "Aa", className: "font-roboto", description: "Google's Choice" },
  { name: "Playfair", value: "playfair", preview: "Aa", className: "font-playfair", description: "Elegant & Serif" },
  {
    name: "Space Grotesk",
    value: "space-grotesk",
    preview: "Aa",
    className: "font-space-grotesk",
    description: "Tech & Futuristic",
  },
]

const backgrounds = [
  { name: "Default", value: "default", preview: "bg-background", description: "Clean solid color" },
  {
    name: "Gradient",
    value: "gradient",
    preview: "bg-gradient-to-br from-primary/5 to-accent/5",
    description: "Subtle gradient overlay",
  },
  { name: "Dots", value: "dots", preview: "bg-dots bg-background", description: "Minimal dot pattern" },
  { name: "Grid", value: "grid", preview: "bg-grid bg-background", description: "Subtle grid lines" },
  { name: "Waves", value: "waves", preview: "bg-waves bg-background", description: "Organic pattern" },
]

export function ThemeCustomizer() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("colors")
  const { theme, font, background, setTheme, setFont, setBackground } = useTheme()

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          size="icon"
          className="w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Settings className="w-5 h-5" />
        </Button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-4xl max-h-[90vh] overflow-hidden">
            <Card className="border-0 shadow-2xl">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6 border-b">
                <div>
                  <CardTitle className="text-2xl font-bold gradient-text">Theme Customizer</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">Personalize your experience</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 rounded-full hover:bg-muted"
                >
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="p-6 max-h-[70vh] overflow-y-auto">
                {/* Tab Navigation */}
                <div className="flex space-x-1 bg-muted p-1 rounded-lg mb-8">
                  {[
                    { id: "colors", label: "Colors", icon: Palette },
                    { id: "fonts", label: "Typography", icon: Type },
                    { id: "backgrounds", label: "Backgrounds", icon: ImageIcon },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 rounded-md transition-all duration-200 ${
                        activeTab === tab.id
                          ? "bg-background text-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                      }`}
                    >
                      <tab.icon className="w-4 h-4" />
                      <span className="font-medium text-sm">{tab.label}</span>
                    </button>
                  ))}
                </div>

                {/* Colors Tab */}
                {activeTab === "colors" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Choose Your Color Theme</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {themes.map((themeOption) => (
                          <button
                            key={themeOption.value}
                            onClick={() => setTheme(themeOption.value as any)}
                            className={`group relative p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                              theme === themeOption.value
                                ? "border-primary shadow-lg scale-105"
                                : "border-border hover:border-primary/50 hover:shadow-md"
                            }`}
                          >
                            <div
                              className={`w-full h-16 rounded-lg ${themeOption.color} mb-3 shadow-sm border border-border/20`}
                            />
                            <div className="space-y-1">
                              <div className="font-medium text-sm">{themeOption.name}</div>
                              <div className="text-xs text-muted-foreground">{themeOption.description}</div>
                            </div>
                            {theme === themeOption.value && (
                              <div className="absolute -top-2 -right-2 w-5 h-5 bg-primary rounded-full border-2 border-background shadow-sm" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Fonts Tab */}
                {activeTab === "fonts" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Select Typography</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {fonts.map((fontOption) => (
                          <button
                            key={fontOption.value}
                            onClick={() => setFont(fontOption.value as any)}
                            className={`group relative p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                              font === fontOption.value
                                ? "border-primary shadow-lg scale-105"
                                : "border-border hover:border-primary/50 hover:shadow-md"
                            }`}
                          >
                            <div className="flex items-center justify-between mb-3">
                              <div className={`text-4xl ${fontOption.className} gradient-text font-bold`}>
                                {fontOption.preview}
                              </div>
                              {font === fontOption.value && (
                                <div className="w-5 h-5 bg-primary rounded-full shadow-sm" />
                              )}
                            </div>
                            <div className="space-y-1">
                              <div className="font-medium">{fontOption.name}</div>
                              <div className="text-sm text-muted-foreground">{fontOption.description}</div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Backgrounds Tab */}
                {activeTab === "backgrounds" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Background Style</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {backgrounds.map((bgOption) => (
                          <button
                            key={bgOption.value}
                            onClick={() => setBackground(bgOption.value as any)}
                            className={`group relative p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                              background === bgOption.value
                                ? "border-primary shadow-lg scale-105"
                                : "border-border hover:border-primary/50 hover:shadow-md"
                            }`}
                          >
                            <div
                              className={`w-full h-20 rounded-lg ${bgOption.preview} mb-3 border border-border/50 shadow-sm`}
                            />
                            <div className="space-y-1">
                              <div className="font-medium text-sm">{bgOption.name}</div>
                              <div className="text-xs text-muted-foreground">{bgOption.description}</div>
                            </div>
                            {background === bgOption.value && (
                              <div className="absolute -top-2 -right-2 w-5 h-5 bg-primary rounded-full border-2 border-background shadow-sm" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Reset Button */}
                <div className="pt-6 border-t mt-8">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setTheme("light")
                      setFont("inter")
                      setBackground("default")
                    }}
                    className="w-full"
                  >
                    Reset to Default
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </>
  )
}
