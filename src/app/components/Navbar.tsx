"use client"
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { useSmoothScroll } from '../hooks/useSmoothScrool'
import { menuitem } from 'framer-motion/client'
import Link from 'next/link'

const Navbar = () => {

    const scrollToSection = useSmoothScroll(-60);

    const menuItems = [
        { label: "Início", href: "/", id: 'top' },
        { label: "Recursos", href: "/recursos", id: 'platform' },
        { label: "Como Funciona", href: "/services", id: 'steps' },
        { label: "Formatos", href: "/formatos", id: 'inventory' },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="border-b border-slate-800 bg-slate-900/95 backdrop-blur-sm sticky top-0 z-50"
        >
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Image src='/logo.png' alt="Logo Image" className="max-w-20 dark:filter-none" width={120} height={50} />
                </div>

                <div className="flex gap-4 items-center">
                    <nav className="hidden md:flex items-center gap-5">
                        {
                            menuItems.map((item) => (
                                <Link
                                    onClick={(e) => {
                                        scrollToSection(e, `${item.id}`);
                                    }}
                                    key={item.href}
                                    href={item.href}
                                    className="text-slate-300 hover:text-white text-sm tracking-wider transition-colors">
                                    {item.label}
                                </Link>
                            ))
                        }
                    </nav>
                    <div className="flex items-center gap-4 ml-3">
                        <Button className="text-slate-300 cursor-pointer hover:text-green-500 hover:border-green-500 hover:bg-transparent transition-all font-semibold uppercase tracking-wider border bg-transparent">
                            Login
                        </Button>
                        <Button
                            onClick={(e) => {
                                scrollToSection(e, "cta");
                            }}
                            className="bg-green-500/60 cursor-pointer hover:bg-green-600 text-white font-semibold uppercase tracking-wider">Cadastre-se</Button>
                    </div>
                </div>
            </div>
        </motion.header>
    )
}

export default Navbar