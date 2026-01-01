"use client"

import React, { useState, useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface MenuProps {
    trigger: React.ReactNode
    children: React.ReactNode
    align?: "left" | "right"
    showChevron?: boolean
}

export function Menu({ trigger, children, align = "left", showChevron = true }: MenuProps) {
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    // Senior Optimization: Outside Click Handler
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setIsOpen(false)
        }

        if (isOpen) {
            // Use capture phase or timeout to avoid immediate closure if the trigger click bubbles
            document.addEventListener("mousedown", handleClickOutside, true)
            document.addEventListener("keydown", handleKeyDown)
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside, true)
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [isOpen])

    return (
        <div className="relative inline-block text-left" ref={menuRef}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer inline-flex items-center transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
                role="button"
                aria-haspopup="true"
                aria-expanded={isOpen}
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        setIsOpen(!isOpen)
                    }
                }}
            >
                {trigger}
                {showChevron && (
                    <ChevronDown
                        className={cn(
                            "ml-2 -mr-1 h-4 w-4 text-gray-500 transition-transform duration-200",
                            isOpen && "rotate-180"
                        )}
                        aria-hidden="true"
                    />
                )}
            </div>

            {isOpen && (
                <div
                    className={cn(
                        "absolute mt-2 w-56 rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black/5 dark:ring-white/10 focus:outline-none z-50 animate-in fade-in zoom-in-95 duration-200",
                        align === "right" ? "right-0" : "left-0"
                    )}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                >
                    <div className="py-1" role="none">
                        {children}
                    </div>
                </div>
            )}
        </div>
    )
}

interface MenuItemProps {
    children?: React.ReactNode
    onClick?: () => void
    disabled?: boolean
    icon?: React.ReactNode
    isActive?: boolean
    className?: string
}

export function MenuItem({ children, onClick, disabled = false, icon, isActive = false, className }: MenuItemProps) {
    return (
        <button
            className={cn(
                "relative block w-full h-16 text-center group transition-colors duration-200 outline-none",
                disabled ? "text-gray-400 dark:text-gray-500 cursor-not-allowed" : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50",
                isActive ? "bg-primary/10 text-primary dark:text-primary-foreground font-medium" : "",
                "focus-visible:bg-gray-100 dark:focus-visible:bg-gray-700",
                className
            )}
            role="menuitem"
            onClick={onClick}
            disabled={disabled}
        >
            <span className="flex items-center justify-center h-full mt-[5%]">
                {icon && (
                    <span className="h-6 w-6 transition-all duration-200 group-hover:scale-110 group-hover:[&_svg]:stroke-[2.5]">
                        {icon}
                    </span>
                )}
                {children}
            </span>
        </button>
    )
}

export function MenuContainer({ children }: { children: React.ReactNode }) {
    const [isExpanded, setIsExpanded] = useState(false)
    const childrenArray = React.Children.toArray(children)

    const handleToggle = () => {
        setIsExpanded((prev) => !prev)
    }

    // Handle keyboard interaction for expansion
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleToggle()
        }
    }

    return (
        <div
            className="relative w-[64px] flex flex-col items-center"
            data-expanded={isExpanded}
        >
            <div className="relative">
                {/* Toggle Button */}
                <div
                    className={cn(
                        "relative w-16 h-16 cursor-pointer rounded-full group will-change-transform z-50 flex items-center justify-center shadow-lg",
                        "bg-gradient-to-br from-primary to-[#FF8534]", // Brand gradient
                        "transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-xl",
                        "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 outline-none"
                    )}
                    onClick={handleToggle}
                    role="button"
                    tabIndex={0}
                    onKeyDown={handleKeyDown}
                    aria-expanded={isExpanded}
                    aria-label={isExpanded ? "Collapse menu" : "Expand menu"}
                >
                    {childrenArray[0]}
                </div>

                {/* Animated Items */}
                {childrenArray.slice(1).map((child, index) => (
                    <div
                        key={index}
                        className={cn(
                            "absolute top-0 left-0 w-16 h-16 bg-white dark:bg-gray-800 will-change-transform flex items-center justify-center border border-gray-200 dark:border-gray-700",
                            "transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                        )}
                        style={{
                            transform: `translateY(${isExpanded ? (index + 1) * 68 : 0}px)`,
                            opacity: isExpanded ? 1 : 0,
                            pointerEvents: isExpanded ? 'auto' : 'none',
                            zIndex: 40 - index,
                            clipPath: "circle(50% at 50% 50%)",
                            backfaceVisibility: 'hidden',
                            perspective: 1000,
                        }}
                    >
                        {child}
                    </div>
                ))}
            </div>
        </div>
    )
}
