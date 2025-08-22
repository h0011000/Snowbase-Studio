'use client'
import React, { useRef, useEffect, useState } from 'react'

export default function ParticleHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePositionRef = useRef({ x: 0, y: 0 })
  const animationFrameRef = useRef<number | null>(null); // Declare animationFrameRef
  const isTouchingRef = useRef(false)
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
      life: number
      glitterPhase: number
      color: string; // Added color property to the type
    }[] = []
    
    let textImageData: ImageData | null = null

    function createTextImage() {
      if (!ctx || !canvas) return
      ctx.fillStyle = 'white'
      ctx.save()
      const fontSize = isMobile ? 60 : 120
      ctx.font = `bold ${fontSize}px Arial, sans-serif`
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
      if (!ctx || !canvas || !textImageData) return; // Ensure all dependencies are met
      const data = textImageData.data;
      const particlesArray: {
        x: number;
        y: number;
        baseX: number;
        baseY: number;
        size: number;
        life: number;
        glitterPhase: number;
        color: string; // Added color property
      }[] = []; // Initialize an array to hold particles

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
            size: Math.random() * 3 + 1, // Random size between 1 and 4
            life: Math.random() * 100, // Placeholder for life
            glitterPhase: Math.random() * Math.PI * 2, // Placeholder for glitter
            color: `hsl(${Math.random() * 360}, 100%, 50%)` // Random color
          };
          particlesArray.push(particle);
          if (particlesArray.length >= 500) break; // Limit the number of particles
        }
      }
      // Assign the created particles to the outer scope 'particles' variable
      particles = particlesArray;
    }

    // Define createInitialParticles function
    function createInitialParticles() {
      createTextImage(); // Ensure textImageData is populated
      // Call createParticle to populate the particles array
      createParticle(); 
      // If createParticle populates 'particles' directly, this might be enough.
      // If createParticle returns an array, we'd do: particles = createParticle();
      // Based on the corrected createParticle, it modifies the outer 'particles' variable.
    }

    createInitialParticles()

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#0A0A1A' // Dark blue background
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Update particle position
        p.x += (p.baseX - p.x) * 0.01
        p.y += (p.baseY - p.y) * 0.01

        // Handle mouse interaction
        const dx = mousePositionRef.current.x - p.x // Corrected mousePosition usage
        const dy = mousePositionRef.current.y - p.y // Corrected mousePosition usage
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < 150) {
          const force = (150 - distance) / 150
          const angle = Math.atan2(dy, dx)
          p.x -= Math.cos(angle) * force * 2
          p.y -= Math.sin(angle) * force * 2
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color // This should now be valid
        ctx.fill()
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // Removed the duplicate handleMouseMove and handleTouchMove definitions from here
    // as they are defined below.

    function handleMouseMove(e: MouseEvent) {
      mousePositionRef.current = { x: e.clientX, y: e.clientY } // Corrected mousePosition usage
    }

    function handleTouchMove(e: TouchEvent) {
      if (e.touches.length > 0) {
        mousePositionRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }; // Corrected mousePosition usage
      }
    }

    // Start animation
    animationFrameRef.current = requestAnimationFrame(animate)

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouchMove, { passive: false })

    // Cleanup
    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [])

  return (
    <section className="relative w-full h-screen bg-background overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ display: 'block' }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
          Snowbase Studio
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          AI Powered Solutions for the Modern Web
        </p>
      </div>
    </section>
  )
}
