'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Checkbox } from '@/components/ui/checkbox'
import { Separator } from '@/components/ui/separator'
import { ChevronDown, ChevronUp, Type, FileText, Upload, Copy, Download, Video, User } from 'lucide-react'
import { toast } from 'sonner'

export function NeoCreatorAI() {
  // State management
  const [mounted, setMounted] = useState(false)
  const [inputMethod, setInputMethod] = useState('paste')
  const [topic, setTopic] = useState('')
  const [pastedText, setPastedText] = useState('')
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [additionalInstructions, setAdditionalInstructions] = useState('')
  const [duration, setDuration] = useState([60]) // in seconds
  const [targetAudience, setTargetAudience] = useState('')
  const [tone, setTone] = useState('')
  const [cta, setCta] = useState('')
  const [customCta, setCustomCta] = useState('')
  const [keywords, setKeywords] = useState('')
  const [copyrightConfirmed, setCopyrightConfirmed] = useState(false)
  const [optionalSettingsOpen, setOptionalSettingsOpen] = useState(false)
  const [additionalInstructionsOpen, setAdditionalInstructionsOpen] = useState(false)
  const [generatedScript, setGeneratedScript] = useState('')
  const [videoTitles, setVideoTitles] = useState<string[]>([])
  const [hashtags, setHashtags] = useState<string[]>([])
  const [scriptCount, setScriptCount] = useState(10)
  const [isGenerating, setIsGenerating] = useState(false)

  const maxScripts = 10

  // Fix hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const formatDuration = (seconds: number) => {
    if (seconds < 60) return `${seconds} seconds`
    const minutes = Math.floor(seconds / 60)
    return `${minutes} minute${minutes > 1 ? 's' : ''}`
  }

  const getWordCount = (seconds: number) => {
    return Math.round((seconds / 60) * 150) // ~150 words per minute
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      if (file.size > 10 * 1024 * 1024) { // 10MB limit
        toast.error('File size must be less than 10MB')
        return
      }
      if (!['text/plain', 'application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)) {
        toast.error('Only .txt, .pdf, and .docx files are supported')
        return
      }
      setUploadedFile(file)
      toast.success(`File "${file.name}" uploaded successfully`)
    }
  }

  const generateScript = async () => {
    if (scriptCount >= maxScripts) {
      toast.error('You have reached the maximum number of scripts (10/10)')
      return
    }

    if (!copyrightConfirmed) {
      toast.error('Please confirm copyright ownership')
      return
    }

    setIsGenerating(true)

    // Simulate API call
    setTimeout(() => {
      const mockScript = `# ${topic || 'Your Video Title'}

Welcome back to our channel! Today we're diving into ${topic || 'an amazing topic'}.

${additionalInstructions ? `\n[Following your instructions: ${additionalInstructions}]\n` : ''}

## Introduction
Let me start by saying this is exactly what ${targetAudience || 'you'} need${tone ? ` in a ${tone.toLowerCase()} way` : ''}.

## Main Content
Here's the key information you need to know:
- Point 1: Essential information
- Point 2: Practical tips
- Point 3: Advanced strategies

## Conclusion
That's a wrap! Remember to implement these strategies consistently.

${cta === 'custom' ? customCta : cta || 'Don\'t forget to like and subscribe!'}

---
*Generated with NeoCreator AI*`

      setGeneratedScript(mockScript)
      setVideoTitles([
        `${topic || 'Amazing Video'} - Complete Guide 2024`,
        `How to Master ${topic || 'This Topic'} in 5 Minutes`,
        `${topic || 'Video Topic'}: Secrets the Pros Don't Want You to Know`
      ])
      setHashtags(['#VideoContent', '#Tutorial', '#Tips', '#Guide', '#Education'])
      setScriptCount(prev => prev + 1)
      setIsGenerating(false)
      toast.success('Script generated successfully!')
    }, 2000)
  }

  const copyScript = () => {
    navigator.clipboard.writeText(generatedScript)
    toast.success('Script copied to clipboard!')
  }

  const downloadScript = () => {
    const blob = new Blob([generatedScript], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'script.txt'
    a.click()
    URL.revokeObjectURL(url)
    toast.success('Script downloaded!')
  }

  const createAvatarVideo = () => {
    // Mock HeyGen API call
    toast.error('HeyGen voice is not connected. Please check your API key or voice settings.')
  }

  const canGenerate = copyrightConfirmed && (
    (inputMethod === 'type' && topic.trim()) ||
    (inputMethod === 'paste' && pastedText.trim()) ||
    (inputMethod === 'upload' && uploadedFile)
  )

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return null
  }

  return (
    <div className="neometallic-background min-h-screen">
      {/* Header */}
      <div className="border-b border-cyan-400/30 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <h1 className="text-lg sm:text-xl font-bold text-white">NeoCreator AI</h1>
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="text-cyan-400 font-medium text-sm sm:text-base">Scripts: {scriptCount}/{maxScripts}</div>
            <User className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="text-center py-8 sm:py-12 px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-300 mb-4 tracking-wide">
          AI Video Script Generator
        </h2>
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-xl sm:text-2xl font-bold">N</span>
          </div>
        </div>
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
          Generate smooth, human-like scripts tailored for any video format or avatar voiceover
        </p>
        <Separator className="my-6 sm:my-8 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent h-px border-0" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 pb-8 sm:pb-12">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Panel - Input */}
          <div className="neometallic-panel p-4 sm:p-6 space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">AI Video Script Generator</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Create avatar-optimized scripts with precise word counts for avatar videos.
              </p>
            </div>

            {/* Input Method Selection */}
            <div className="space-y-3">
              <Label className="text-white text-sm">
                Choose your input method <span className="text-red-400">*</span>
              </Label>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  variant={inputMethod === 'type' ? 'default' : 'outline'}
                  onClick={() => setInputMethod('type')}
                  className={`flex-1 text-xs sm:text-sm ${
                    inputMethod === 'type'
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white border-0'
                      : 'bg-black/40 border-cyan-400/30 text-gray-300 hover:bg-black/60'
                  }`}
                >
                  <Type className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  Type Topic
                </Button>
                <Button
                  variant={inputMethod === 'paste' ? 'default' : 'outline'}
                  onClick={() => setInputMethod('paste')}
                  className={`flex-1 text-xs sm:text-sm ${
                    inputMethod === 'paste'
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white border-0'
                      : 'bg-black/40 border-cyan-400/30 text-gray-300 hover:bg-black/60'
                  }`}
                >
                  <FileText className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  Paste Text
                </Button>
                <Button
                  variant={inputMethod === 'upload' ? 'default' : 'outline'}
                  onClick={() => setInputMethod('upload')}
                  className={`flex-1 text-xs sm:text-sm ${
                    inputMethod === 'upload'
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white border-0'
                      : 'bg-black/40 border-cyan-400/30 text-gray-300 hover:bg-black/60'
                  }`}
                >
                  <Upload className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  Upload File
                </Button>
              </div>
            </div>

            {/* Dynamic Input Section */}
            {inputMethod === 'type' && (
              <div className="space-y-3">
                <Label className="text-white text-sm">
                  Video Topic <span className="text-red-400">*</span>
                </Label>
                <Input
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g., How to grow Instagram followers, Benefits of meditation"
                  className="bg-black/40 border-cyan-400/30 text-gray-300 placeholder:text-gray-500 placeholder:italic text-sm"
                />
              </div>
            )}

            {inputMethod === 'paste' && (
              <div className="space-y-3">
                <Label className="text-white text-sm">
                  Paste Your Content <span className="text-red-400">*</span>
                </Label>
                <Textarea
                  value={pastedText}
                  onChange={(e) => setPastedText(e.target.value)}
                  placeholder="Paste your article, blog post, or any text content here..."
                  className="bg-black/40 border-cyan-400/30 text-gray-300 placeholder:text-gray-500 placeholder:italic min-h-[100px] sm:min-h-[120px] text-sm"
                />
              </div>
            )}

            {inputMethod === 'upload' && (
              <div className="space-y-3">
                <Label className="text-white text-sm">
                  Upload File (.txt, .pdf, .docx) <span className="text-red-400">*</span>
                </Label>
                <div className="border-2 border-dashed border-cyan-400/30 rounded-lg p-6 sm:p-8 text-center bg-black/20">
                  <FileText className="mx-auto h-8 w-8 sm:h-12 sm:w-12 text-cyan-400 mb-3 sm:mb-4" />
                  <Input
                    type="file"
                    accept=".txt,.pdf,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <Label htmlFor="file-upload" className="cursor-pointer">
                    <div className="text-cyan-400 font-medium mb-2 text-sm sm:text-base">
                      Click to upload or drag and drop
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm">
                      TXT, PDF, or DOCX (max 10MB)
                    </div>
                  </Label>
                  {uploadedFile && (
                    <p className="text-cyan-400 mt-2 text-xs sm:text-sm">Selected: {uploadedFile.name}</p>
                  )}
                </div>
              </div>
            )}

            {/* Additional Instructions */}
            <div className="space-y-3">
              <Button
                variant="ghost"
                onClick={() => setAdditionalInstructionsOpen(!additionalInstructionsOpen)}
                className="w-full justify-between text-white hover:bg-white/5 p-0 text-sm"
              >
                <span>Additional Instructions</span>
                {additionalInstructionsOpen ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>

              {additionalInstructionsOpen && (
                <Textarea
                  value={additionalInstructions}
                  onChange={(e) => setAdditionalInstructions(e.target.value)}
                  placeholder="Tell the AI what type of script you want (tone, angle, purpose)..."
                  className="bg-black/40 border-cyan-400/30 text-gray-300 placeholder:text-gray-500 placeholder:italic text-sm"
                />
              )}
            </div>

            {/* Video Duration */}
            <div className="space-y-3">
              <Label className="text-white text-sm">
                Video Duration <span className="text-red-400">*</span>
              </Label>
              <div className="space-y-2">
                <Slider
                  value={duration}
                  onValueChange={setDuration}
                  max={1800} // 30 minutes
                  min={30}
                  step={30}
                  className="w-full"
                />
                <div className="text-gray-300 text-sm">
                  {formatDuration(duration[0])}
                </div>
              </div>
            </div>

            {/* Optional Settings */}
            <div className="space-y-3">
              <Button
                variant="ghost"
                onClick={() => setOptionalSettingsOpen(!optionalSettingsOpen)}
                className="w-full justify-between text-white hover:bg-white/5 p-0 text-sm"
              >
                <span>Optional Settings</span>
                {optionalSettingsOpen ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>

              {optionalSettingsOpen && (
                <div className="space-y-4">
                  <div>
                    <Label className="text-white text-sm mb-2 block">Target Audience</Label>
                    <Input
                      value={targetAudience}
                      onChange={(e) => setTargetAudience(e.target.value)}
                      placeholder="e.g., Small business owners, Gen Z gamers, New parents"
                      className="bg-black/40 border-cyan-400/30 text-gray-300 placeholder:text-gray-500 placeholder:italic text-sm"
                    />
                  </div>

                  <div>
                    <Label className="text-white text-sm mb-2 block">Preferred Tone</Label>
                    <Select value={tone} onValueChange={setTone}>
                      <SelectTrigger className="bg-black/40 border-cyan-400/30 text-gray-300 text-sm">
                        <SelectValue placeholder="Select tone (optional)" />
                      </SelectTrigger>
                      <SelectContent className="bg-black/90 border-cyan-400/30">
                        <SelectItem value="casual">Casual</SelectItem>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="energetic">Energetic</SelectItem>
                        <SelectItem value="calm">Calm</SelectItem>
                        <SelectItem value="witty">Witty</SelectItem>
                        <SelectItem value="inspiring">Inspiring</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-white text-sm mb-2 block">Call to Action</Label>
                    <Select value={cta} onValueChange={setCta}>
                      <SelectTrigger className="bg-black/40 border-cyan-400/30 text-gray-300 text-sm">
                        <SelectValue placeholder="Select CTA (optional)" />
                      </SelectTrigger>
                      <SelectContent className="bg-black/90 border-cyan-400/30">
                        <SelectItem value="Click the link in bio">Click the link in bio</SelectItem>
                        <SelectItem value="Follow for more tips">Follow for more tips</SelectItem>
                        <SelectItem value="Download guide">Download guide</SelectItem>
                        <SelectItem value="Subscribe">Subscribe</SelectItem>
                        <SelectItem value="custom">Custom CTA</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-white text-sm mb-2 block">Keywords or Hashtags</Label>
                    <Input
                      value={keywords}
                      onChange={(e) => setKeywords(e.target.value)}
                      placeholder="e.g., #socialmediatips, #mindfullness, AI tools"
                      className="bg-black/40 border-cyan-400/30 text-gray-300 placeholder:text-gray-500 placeholder:italic text-sm"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Copyright Confirmation */}
            <div className="flex items-center space-x-3">
              <Checkbox
                id="copyright"
                checked={copyrightConfirmed}
                onCheckedChange={(checked) => setCopyrightConfirmed(checked as boolean)}
                className="border-cyan-400/50 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-cyan-400 data-[state=checked]:to-purple-500"
              />
              <Label htmlFor="copyright" className="text-gray-300 text-xs sm:text-sm">
                I confirm I own the copyright to content <span className="text-red-400">*</span>
              </Label>
            </div>

            {/* Generate Button */}
            <Button
              onClick={generateScript}
              disabled={!canGenerate || isGenerating}
              className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-medium py-3 hover:from-cyan-300 hover:to-purple-400 text-sm sm:text-base"
            >
              {isGenerating ? 'Generating Script...' : 'Generate Script'}
            </Button>
          </div>

          {/* Right Panel - Output */}
          <div className="space-y-6">
            {/* Script Output */}
            <div className="neometallic-panel p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Script Output</h3>
              <div className="space-y-4">
                <div className="bg-black/40 border border-cyan-400/30 rounded-lg p-3 sm:p-4 min-h-[250px] sm:min-h-[300px]">
                  {generatedScript ? (
                    <pre className="text-gray-300 text-xs sm:text-sm whitespace-pre-wrap font-mono">
                      {generatedScript}
                    </pre>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <div className="text-cyan-400 text-base sm:text-lg font-medium mb-2">
                        Your script will appear here...
                      </div>
                      <div className="text-gray-500 text-xs sm:text-sm">
                        Clean, formatted, and ready for avatar videos
                      </div>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                  <Button
                    onClick={copyScript}
                    disabled={!generatedScript}
                    className="bg-black/40 border border-cyan-400/30 text-gray-300 hover:bg-black/60 text-xs sm:text-sm"
                  >
                    <Copy className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    Copy
                  </Button>
                  <Button
                    onClick={downloadScript}
                    disabled={!generatedScript}
                    className="bg-black/40 border border-cyan-400/30 text-gray-300 hover:bg-black/60 text-xs sm:text-sm"
                  >
                    <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    Download
                  </Button>
                  <Button
                    onClick={createAvatarVideo}
                    disabled={!generatedScript}
                    className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:from-cyan-300 hover:to-purple-400 text-xs sm:text-sm sm:col-span-1 col-span-1"
                  >
                    <Video className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 sm:inline hidden" />
                    Create Video Using Avatar
                  </Button>
                </div>
              </div>
            </div>

            {/* SEO & Social Media Assets */}
            <div className="neometallic-panel p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">SEO & Social Media Assets</h3>

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h4 className="font-medium text-cyan-400 mb-3 text-sm sm:text-base">Video Titles</h4>
                  <div className="bg-black/40 border border-cyan-400/30 rounded-lg p-3 sm:p-4 min-h-[60px] sm:min-h-[80px]">
                    {videoTitles.length > 0 ? (
                      <div className="space-y-2">
                        {videoTitles.map((title) => (
                          <div key={title} className="text-gray-300 text-xs sm:text-sm">
                            {title}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <div className="text-gray-500 text-xs sm:text-sm italic">
                          3 SEO-optimized titles will appear here...
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-cyan-400 mb-3 text-sm sm:text-base">Hashtags</h4>
                  <div className="bg-black/40 border border-cyan-400/30 rounded-lg p-3 sm:p-4 min-h-[60px] sm:min-h-[80px]">
                    {hashtags.length > 0 ? (
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {hashtags.map((hashtag) => (
                          <span key={hashtag} className="px-2 py-1 bg-cyan-400/20 text-cyan-400 rounded text-xs sm:text-sm">
                            {hashtag}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <div className="text-gray-500 text-xs sm:text-sm italic">
                          Relevant hashtags will appear here...
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
