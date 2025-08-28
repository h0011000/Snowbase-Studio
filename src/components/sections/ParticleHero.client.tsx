'use client'
import React, { useRef, useEffect, useState } from 'react'

export default function ParticleHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePositionRef = useRef({ x: 0, y: 0 })
  const animationFrameRef = useRef<number | null>(null);
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      setIsMobile(window.innerWidth < 768)
    }
    updateCanvasSize()

    let particles: {
      x: number
      y: number
      baseX: number
      baseY: number
      size: number
      speed: number
      life: number
      glitterPhase: number
      color: string;
      opacity: number;
    }[] = []
    
    let textImageData: ImageData | null = null

    function createTextImage() {
      if (!ctx || !canvas) return
      ctx.fillStyle = 'white'
      ctx.save()
      const fontSize = isMobile ? 60 : 120
      ctx.font = `bold ${fontSize}px 'Poppins', Arial, sans-serif`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      const text = 'Snowbase Studio'
      const x = canvas.width / 2
      const y = canvas.height / 2
      ctx.fillText(text, x, y)
      ctx.restore()
      textImageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

    function createParticle() {
      if (!ctx || !canvas || !textImageData) return;
      const data = textImageData.data;
      const particlesArray: {
        x: number;
        y: number;
        baseX: number;
        baseY: number;
        size: number;
        speed: number;
        life: number;
        glitterPhase: number;
        color: string;
        opacity: number;
      }[] = [];

      for (let attempt = 0; attempt < 100; attempt++) {
        const x = Math.floor(Math.random() * canvas.width);
        const y = Math.floor(Math.random() * canvas.height);
        const pixelIndex = (y * canvas.width + x) * 4;

        // Check if the pixel is part of the text (alpha channel > 0)
        if (data[pixelIndex + 3] > 128) {
          const particle = {
            x: x,
            y: y,
            baseX: x,
            baseY: y,
            size: Math.random() * 3 + 1,
            speed: Math.random() * 0.05 + 0.01,
            life: Math.random() * 100,
            glitterPhase: Math.random() * Math.PI * 2,
            color: `hsl(${216 + Math.random() * 40}, ${70 + Math.random() * 30}%, ${60 + Math.random() * 20}%)`,
            opacity: Math.random() * 0.5 + 0.5
          };
          particlesArray.push(particle);
          if (particlesArray.length >= 500) break;
        }
      }
      particles = particlesArray;
    }

    function createInitialParticles() {
      createTextImage();
      createParticle();
    }

    createInitialParticles()

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#0A0A1A');
      gradient.addColorStop(1, '#1a1a2e');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Update particle position with easing
        p.x += (p.baseX - p.x) * p.speed
        p.y += (p.baseY - p.y) * p.speed

        // Handle mouse interaction
        const dx = mousePositionRef.current.x - p.x
        const dy = mousePositionRef.current.y - p.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < 150) {
          const force = (150 - distance) / 150
          const angle = Math.atan2(dy, dx)
          p.x -= Math.cos(angle) * force * 2
          p.y -= Math.sin(angle) * force * 2
        }

        // Add subtle movement to particles
        p.glitterPhase += 0.05
        const glitter = Math.sin(p.glitterPhase) * 0.5 + 0.5
        
        // Draw particle with glow effect
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        
        // Create glow effect
        const gradient = ctx.createRadialGradient(
          p.x, p.y, 0,
          p.x, p.y, p.size * 3
        );
        gradient.addColorStop(0, p.color);
        gradient.addColorStop(1, 'rgba(34, 193, 195, 0)');
        
        ctx.fillStyle = gradient
        ctx.globalAlpha = p.opacity * glitter
        ctx.fill()
        ctx.globalAlpha = 1
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    function handleMouseMove(e: MouseEvent) {
      mousePositionRef.current = { x: e.clientX, y: e.clientY }
    }

    function handleTouchMove(e: TouchEvent) {
      if (e.touches.length > 0) {
        mousePositionRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    }

    // Start animation
    animationFrameRef.current = requestAnimationFrame(animate)

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    window.addEventListener('resize', updateCanvasSize)

    // Cleanup
    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('resize', updateCanvasSize)
    }
  }, [])

  return (
    <section 
      className="relative w-full h-screen bg-background overflow-hidden"
      aria-label="Hero section with interactive particle animation"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ display: 'block' }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 animate-float">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Snowbase Studio
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up">
          AI Powered Solutions for the Modern Web
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
          <a 
            href="#contact" 
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-lg shadow-primary/20"
          >
            Get Started
          </a>
          <a 
            href="#services" 
            className="px-8 py-3 bg-transparent border-2 border-primary text-primary rounded-full font-medium hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Our Services
          </a>
        </div>
      </div>
      
      {/* Floating elements for additional visual interest */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-primary/30 animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-accent/30 animate-pulse-slow animation-delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 rounded-full bg-primary/20 animate-pulse-slow animation-delay-2000"></div>
    </section>
  )
}
