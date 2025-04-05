'use client'

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'

interface ScrambleHoverProps {
    text: string
    scrambleSpeed?: number
    maxIterations?: number
    useOriginalCharsOnly?: boolean
    className?: string
    characters?: string
}

export default function ScrambleHover({
    text,
    scrambleSpeed = 50,
    maxIterations = 8,
    useOriginalCharsOnly = true,
    className = "",
    characters = "abcdefghijklmnopqrstuvwxyz"
}: ScrambleHoverProps) {
    const [displayText, setDisplayText] = useState(text)
    const [isHovering, setIsHovering] = useState(false)

    const scramble = useCallback(() => {
        let iteration = 0
        const interval = setInterval(() => {
            setDisplayText(prev =>
                prev
                    .split("")
                    .map((char, idx) => {
                        if (char === " ") return " "
                        if (iteration > maxIterations) return text[idx]

                        if (useOriginalCharsOnly) {
                            // Use only characters from the original text
                            return text[Math.floor(Math.random() * text.length)]
                        } else {
                            // Use provided characters
                            return characters[Math.floor(Math.random() * characters.length)]
                        }
                    })
                    .join("")
            )

            iteration += 1

            if (iteration > maxIterations) {
                clearInterval(interval)
                setDisplayText(text)
                setIsHovering(false)
            }
        }, scrambleSpeed)

        return () => clearInterval(interval)
    }, [text, scrambleSpeed, maxIterations, useOriginalCharsOnly, characters])

    const handleHover = () => {
        if (!isHovering) {
            setIsHovering(true)
            scramble()
        }
    }

    return (
        <motion.span
            className={`inline-block cursor-pointer ${className}`}
            onHoverStart={handleHover}
        >
            {displayText}
        </motion.span>
    )
} 