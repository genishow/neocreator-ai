# 🚀 NeoCreator AI

> **AI-powered video script generator with stunning cyberpunk neon aesthetic**

[![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

## ✨ Features

### 🎯 **Core Functionality**
- **AI-Powered Script Generation** - Create smooth, human-like scripts tailored for video content
- **Multiple Input Methods** - Type topics, paste content, or upload files (.txt, .pdf, .docx)
- **Smart Word Count Scaling** - Precise word counts based on video duration (~150 words/minute)
- **SEO Optimization** - Auto-generated video titles and relevant hashtags
- **Export Options** - Copy, download, or create avatar videos

### 🎨 **Design & UX**
- **Cyberpunk Neon Aesthetic** - Stunning glass morphism with cyan-purple gradients
- **Fully Mobile Responsive** - Optimized for all devices with touch-friendly interface
- **Real-time Validation** - Form validation with instant feedback
- **Smooth Animations** - Buttery smooth transitions and hover effects
- **Accessibility First** - WCAG compliant with keyboard navigation support

### 🛠 **Advanced Features**
- **Collapsible Sections** - Clean, organized interface with expandable settings
- **Session Management** - Track script generation usage (10 scripts per session)
- **File Upload Support** - Drag & drop functionality with file type validation
- **Custom Slider Component** - Beautiful duration selector with visual feedback
- **Progressive Enhancement** - Works without JavaScript for core features

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+
- **Bun** (recommended) or npm/yarn
- Modern web browser

### Installation

```bash
# Clone the repository
git clone https://github.com/genishow/neocreator-ai.git
cd neocreator-ai

# Install dependencies with Bun (recommended)
bun install

# Or with npm
npm install

# Start the development server
bun run dev
# Or: npm run dev

# Open http://localhost:3000 in your browser
```

### Build for Production

```bash
# Build the application
bun run build

# Start production server
bun run start
```

## 📱 Screenshots

### Desktop Interface
*Screenshots coming soon - the full two-panel layout with neon effects*

### Mobile Responsive
*Mobile screenshots showcasing touch-friendly design*

## 🏗 Tech Stack

### **Frontend Framework**
- **Next.js 15.3.2** - React framework with App Router
- **TypeScript** - Type-safe development
- **React 18** - Latest React features with concurrent rendering

### **Styling & UI**
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library
- **Custom CSS** - Hand-crafted neon effects and animations
- **Lucide React** - Beautiful, consistent icons

### **Development Tools**
- **Bun** - Fast JavaScript runtime and package manager
- **Biome** - Fast formatter and linter
- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing and optimization

### **Build & Deployment**
- **Netlify** - Optimized for serverless deployment
- **Turbopack** - Ultra-fast bundler for development

## 📂 Project Structure

```
neocreator-ai/
├── 📁 src/
│   ├── 📁 app/                    # Next.js App Router
│   │   ├── globals.css           # Global styles & neon effects
│   │   ├── layout.tsx            # Root layout component
│   │   └── page.tsx              # Home page
│   ├── 📁 components/
│   │   ├── 📁 ui/                # shadcn/ui components
│   │   └── NeoCreatorAI.tsx      # Main application component
│   └── 📁 lib/
│       └── utils.ts              # Utility functions
├── 📁 public/                     # Static assets
├── 📄 package.json               # Dependencies and scripts
├── 📄 tailwind.config.ts         # Tailwind configuration
├── 📄 next.config.js             # Next.js configuration
├── 📄 components.json            # shadcn/ui configuration
└── 📄 README.md                  # You are here!
```

## 🎮 Usage Guide

### 1. **Choose Input Method**
- **Type Topic**: Enter a video topic directly
- **Paste Text**: Paste existing content to transform
- **Upload File**: Upload .txt, .pdf, or .docx files (max 10MB)

### 2. **Configure Settings**
- **Video Duration**: Use the slider to set target length (30 sec - 30 min)
- **Additional Instructions**: Tell the AI about tone, angle, or purpose
- **Optional Settings**: Target audience, preferred tone, CTA, keywords

### 3. **Generate & Export**
- **Confirm Copyright**: Check the required checkbox
- **Generate Script**: Click the gradient button to create your script
- **Export Options**: Copy to clipboard, download as .txt, or create avatar video

### 4. **SEO Assets**
- **Video Titles**: Get 3 SEO-optimized title suggestions
- **Hashtags**: Receive relevant hashtags for social media

## 🛠 Development

### Adding New Features
The codebase is designed for easy extension:

```typescript
// Add new input methods in NeoCreatorAI.tsx
const [newInputMethod, setNewInputMethod] = useState('')

// Extend the generateScript function
const generateScript = async () => {
  // Your custom logic here
}
```

### Customizing the Design
Modify the neon theme in `globals.css`:

```css
.neometallic-panel {
  /* Customize panel appearance */
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  /* Add your custom effects */
}
```

### Environment Variables
Create a `.env.local` file for configuration:

```bash
# AI API Configuration (optional)
OPENAI_API_KEY=your_api_key_here
HEYGEN_API_KEY=your_heygen_key_here

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_analytics_id
```

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Development Guidelines
- Follow the existing code style
- Add TypeScript types for new features
- Test on mobile devices
- Maintain accessibility standards
- Update documentation for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **shadcn/ui** for the beautiful component library
- **Tailwind CSS** for the utility-first approach
- **Next.js** team for the amazing framework
- **Video Boost Forge** for design inspiration

## 📞 Support

- **Documentation**: Check this README and inline code comments
- **Issues**: [GitHub Issues](https://github.com/genishow/neocreator-ai/issues)
- **Discussions**: [GitHub Discussions](https://github.com/genishow/neocreator-ai/discussions)

---

<div align="center">

**Made with ❤️ and ✨ neon magic**

[⭐ Star this repo](https://github.com/genishow/neocreator-ai) • [🐛 Report Bug](https://github.com/genishow/neocreator-ai/issues) • [✨ Request Feature](https://github.com/genishow/neocreator-ai/issues)

</div>
