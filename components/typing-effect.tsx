"use client"

import { useState, useEffect } from 'react'

interface TypewriterEffectProps {
  text: string
  speed?: number
  className?: string
  pauseTime?: number
  showCursor?: boolean
}

export function TypewriterEffect({ 
  text, 
  speed = 100, 
  className = "",
  pauseTime = 2000,
  showCursor = true 
}: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [showCursorState, setShowCursorState] = useState(true)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else {
      // Pausa quando completa a digitação
      const timeout = setTimeout(() => {
        setIsComplete(true)
      }, pauseTime)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed, pauseTime])

  // Efeito de piscar do cursor
  useEffect(() => {
    if (showCursor) {
      const cursorInterval = setInterval(() => {
        setShowCursorState(prev => !prev)
      }, 530)

      return () => clearInterval(cursorInterval)
    }
  }, [showCursor])

  return (
    <span className={className}>
      {displayedText}
      {showCursor && !isComplete && (
        <span className={`transition-opacity duration-100 ${showCursorState ? 'opacity-100' : 'opacity-0'} text-cyan-400 font-thin`}>
          |
        </span>
      )}
    </span>
  )
} 