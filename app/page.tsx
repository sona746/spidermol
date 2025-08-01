"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Upload, Zap, TrendingUp, Users, Globe, Camera, Sparkles, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export default function HairCountHome() {
  const [currentStep, setCurrentStep] = useState<"upload" | "processing" | "results" | "stats">("upload")
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)
  const [hairCount, setHairCount] = useState(0)
  const [processingText, setProcessingText] = useState("")

  const processingSteps = [
    "Initializing quantum hair detection algorithms...",
    "Calibrating follicle recognition matrix...",
    "Analyzing keratin density patterns...",
    "Cross-referencing with global hair database...",
    "Applying machine learning hair classification...",
    "Finalizing hair count with 99.7% accuracy...",
  ]

  const sarcasticComments = [
    "Wow, that's... a number of hairs you have there.",
    "Our AI is 99.7% confident in this completely made-up result.",
    "Congratulations! You have achieved hair.",
    "This result was calculated using advanced random number generation.",
    "Your hand hair count is now part of our totally real database.",
    "Fun fact: This number has no basis in reality whatsoever.",
  ]

  const globalStats = {
    totalScans: 1247893,
    avgHairCount: 847,
    happyCustomers: 99.2,
    countriesServed: 195,
  }

  useEffect(() => {
    if (currentStep === "processing") {
      let stepIndex = 0
      const interval = setInterval(() => {
        if (stepIndex < processingSteps.length) {
          setProcessingText(processingSteps[stepIndex])
          setProgress((stepIndex + 1) * (100 / processingSteps.length))
          stepIndex++
        } else {
          clearInterval(interval)
          setHairCount(Math.floor(Math.random() * 2000) + 100)
          setTimeout(() => setCurrentStep("results"), 500)
        }
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [currentStep])

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const startAnalysis = () => {
    setCurrentStep("processing")
    setProgress(0)
  }

  const resetApp = () => {
    setCurrentStep("upload")
    setUploadedImage(null)
    setProgress(0)
    setHairCount(0)
    setProcessingText("")
  }

  const showStats = () => {
    setCurrentStep("stats")
  }

  if (currentStep === "stats") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <Button
              onClick={() => setCurrentStep("upload")}
              variant="outline"
              className="mb-4 bg-white/10 border-white/20 hover:bg-white/20"
            >
              ← Back to Home
            </Button>
            <h1 className="text-4xl font-bold mb-2">Global Hair Statistics</h1>
            <p className="text-gray-400">100% real data from our advanced AI systems*</p>
            <p className="text-xs text-gray-500 mt-1">*Not actually real</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-blue-400">
                  {globalStats.totalScans.toLocaleString()}
                </CardTitle>
                <CardDescription className="text-gray-300">Total Scans Performed</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-green-400 text-sm">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +23% this month
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-purple-400">{globalStats.avgHairCount}</CardTitle>
                <CardDescription className="text-gray-300">Average Hair Count</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-yellow-400 text-sm">
                  <BarChart3 className="w-4 h-4 mr-1" />
                  Totally accurate
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-green-400">{globalStats.happyCustomers}%</CardTitle>
                <CardDescription className="text-gray-300">Customer Satisfaction</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-green-400 text-sm">
                  <Users className="w-4 h-4 mr-1" />
                  Definitely not fake
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-orange-400">{globalStats.countriesServed}</CardTitle>
                <CardDescription className="text-gray-300">Countries Served</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-blue-400 text-sm">
                  <Globe className="w-4 h-4 mr-1" />
                  Worldwide coverage
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader>
              <CardTitle>Recent "Analysis" Results</CardTitle>
              <CardDescription>Live feed of our completely real hair counting results</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Array.from({ length: 8 }, (_, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <Camera className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-medium">Anonymous User #{Math.floor(Math.random() * 10000)}</p>
                        <p className="text-sm text-gray-400">{Math.floor(Math.random() * 60)} minutes ago</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-white/20">
                      {Math.floor(Math.random() * 1500) + 200} hairs
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-yellow-400 mr-2" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              HairCount™
            </h1>
            <Sparkles className="w-8 h-8 text-yellow-400 ml-2" />
          </div>
          <p className="text-xl text-gray-300 mb-2">Revolutionary AI-Powered Hand Hair Analysis</p>
          <p className="text-sm text-gray-500">*Results are 100% scientifically meaningless</p>
          <div className="flex justify-center mt-4">
            <Button onClick={showStats} variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20">
              <BarChart3 className="w-4 h-4 mr-2" />
              View Global Stats
            </Button>
          </div>
        </div>

        {currentStep === "upload" && (
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 mb-8">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Upload Your Hand Photo</CardTitle>
                <CardDescription className="text-gray-300">
                  Our advanced AI will count every single hair with unprecedented inaccuracy
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-white/30 rounded-lg p-8 text-center hover:border-white/50 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    {uploadedImage ? (
                      <div className="space-y-4">
                        <img
                          src={uploadedImage || "/placeholder.svg"}
                          alt="Uploaded hand"
                          className="max-w-full max-h-64 mx-auto rounded-lg"
                        />
                        <p className="text-green-400">Perfect! Ready for analysis</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <Upload className="w-16 h-16 mx-auto text-gray-400" />
                        <div>
                          <p className="text-lg font-medium">Click to upload your hand photo</p>
                          <p className="text-sm text-gray-400">PNG, JPG up to 10MB</p>
                        </div>
                      </div>
                    )}
                  </label>
                </div>

                {uploadedImage && (
                  <Button
                    onClick={startAnalysis}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                    size="lg"
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Begin Hair Analysis
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white/5 backdrop-blur-lg border-white/10">
                <CardHeader>
                  <Zap className="w-8 h-8 text-yellow-400 mb-2" />
                  <CardTitle className="text-lg">Lightning Fast</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">
                    Get your meaningless results in seconds with our fake AI processing
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-lg border-white/10">
                <CardHeader>
                  <TrendingUp className="w-8 h-8 text-green-400 mb-2" />
                  <CardTitle className="text-lg">99.7% Inaccurate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">
                    Our proprietary random number generator ensures maximum unreliability
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-lg border-white/10">
                <CardHeader>
                  <Globe className="w-8 h-8 text-blue-400 mb-2" />
                  <CardTitle className="text-lg">Global Database</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">
                    Join millions of users who have received completely fabricated hair counts
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {currentStep === "processing" && (
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Analyzing Your Hand...</CardTitle>
                <CardDescription className="text-gray-300">
                  Our AI is working very hard to make up a number
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 relative">
                    <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
                    <Zap className="w-8 h-8 text-yellow-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <Progress value={progress} className="w-full mb-4" />
                  <p className="text-lg font-medium text-blue-400">{Math.round(progress)}% Complete</p>
                  <p className="text-sm text-gray-400 mt-2 min-h-[20px]">{processingText}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {currentStep === "results" && (
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 mb-6">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-green-400">Analysis Complete!</CardTitle>
                <CardDescription className="text-gray-300">
                  Your completely scientific hair count results
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-6xl font-bold text-blue-400 mb-2">{hairCount.toLocaleString()}</div>
                  <p className="text-xl text-gray-300 mb-4">Total Hand Hairs Detected</p>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                    99.7% Confidence (Made Up)
                  </Badge>
                </div>

                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <p className="text-gray-300 italic">
                    "{sarcasticComments[Math.floor(Math.random() * sarcasticComments.length)]}"
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <p className="text-2xl font-bold text-purple-400">{Math.floor(hairCount * 0.73)}</p>
                    <p className="text-sm text-gray-400">Active Follicles*</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <p className="text-2xl font-bold text-orange-400">{Math.floor(hairCount * 0.27)}</p>
                    <p className="text-sm text-gray-400">Dormant Hairs*</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    onClick={resetApp}
                    variant="outline"
                    className="flex-1 bg-white/10 border-white/20 hover:bg-white/20"
                  >
                    Analyze Another Hand
                  </Button>
                  <Button
                    onClick={showStats}
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  >
                    View Global Stats
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="text-center text-xs text-gray-500">
              <p>* These numbers are completely fictional and have no scientific basis whatsoever.</p>
              <p>HairCount™ is a parody application. No actual hair counting technology exists.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
