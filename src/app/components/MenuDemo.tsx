"use client"

import { MenuItem, MenuContainer } from "@/components/ui/fluid-menu"
import { Menu as MenuIcon, X, Home, Mail, User, Settings } from "lucide-react"

export function MenuDemo() {
    return (
        <section className="fixed bottom-6 right-6 z-50 md:hidden print:hidden">
            <div className="flex flex-col items-end gap-12">
                {/* Removed demo text for production use as navigation */}

                <div className="relative group">
                    {/* Enhanced decorative background */}
                    <div className="absolute inset-x-0 -top-20 -bottom-20 bg-gradient-to-b from-primary/10 via-transparent to-primary/5 dark:from-primary/20 blur-3xl -z-10 rounded-full opacity-50 group-hover:opacity-75 transition-opacity duration-1000" />

                    <MenuContainer>
                        <MenuItem
                            icon={
                                <div className="relative w-6 h-6">
                                    {/* Icon morphing logic - using parent selector for better reliability */}
                                    <div className="absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-center opacity-100 scale-100 rotate-0 [.group[data-expanded=true]_&]:opacity-0 [.group[data-expanded=true]_&]:scale-0 [.group[data-expanded=true]_&]:rotate-180">
                                        <MenuIcon size={24} strokeWidth={2} className="text-white" />
                                    </div>
                                    <div className="absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-center opacity-0 scale-0 -rotate-180 [.group[data-expanded=true]_&]:opacity-100 [.group[data-expanded=true]_&]:scale-100 [.group[data-expanded=true]_&]:rotate-0">
                                        <X size={24} strokeWidth={2} className="text-white" />
                                    </div>
                                </div>
                            }
                        />
                        <MenuItem icon={<Home size={24} strokeWidth={1.5} />} className="hover:text-primary transition-colors" />
                        <MenuItem icon={<Mail size={24} strokeWidth={1.5} />} className="hover:text-primary transition-colors" />
                        <MenuItem icon={<User size={24} strokeWidth={1.5} />} className="hover:text-primary transition-colors" />
                        <MenuItem icon={<Settings size={24} strokeWidth={1.5} />} className="hover:text-primary transition-colors" />
                    </MenuContainer>
                </div>
            </div>
        </section>
    )
}
