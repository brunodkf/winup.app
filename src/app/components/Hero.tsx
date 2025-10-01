import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { motion } from "framer-motion"
import React from 'react'
import { FiArrowRight, FiTrendingUp } from 'react-icons/fi'
import { IoIosPlay } from 'react-icons/io'

const Hero = () => {
    return (

        <section className=" text-white px-6 py-8">
            <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-2 mb-4">
                        <span className="bg-green-500/10 text-green-400 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-2 border border-green-500/10">
                            <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                            <p>Plataforma Líder em Monetização</p>
                        </span>
                    </div>

                    <h1 className="text-5xl lg:text-6xl font-bold mb-6 ">
                        Monetize seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500">
                            Conteúdo
                        </span>
                        <br />
                        com Transparência
                    </h1>

                    <p className="text-slate-400 text-lg mb-10 max-w-xl ">
                        Integração full-stack com Google Ad Manager, Prebid.js e dashboards em tempo real. Maximize sua receita com
                        total transparência.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="bg-green-500/60 cursor-pointer hover:bg-green-600 text-white px-6 py-3 font-medium rounded-md shadow">
                            Começar Agora <FiArrowRight />
                        </Button>
                        <Button
                            variant="outline"
                            className="bg-white/5 cursor-pointer border border-slate-700 text-slate-300 hover:bg-white/10 px-6 py-3 rounded-md"
                        >
                            <span className="mr-2"><IoIosPlay /></span> Ver Demo
                        </Button>
                    </div>


                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex items-center justify-center sm:justify-start gap-8 mt-8 text-white"
                    >
                        <div className="text-center">
                            <div className="text-3xl font-bold">99.9%</div>
                            <div className="text-slate-400">Uptime</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold">10k+</div>
                            <div className="text-slate-400">Publishers</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold">$50M+</div>
                            <div className="text-slate-400">Revenue</div>
                        </div>
                    </motion.div>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Card className="bg-[#162032] border border-slate-700 p-6 rounded-2xl shadow-lg">
                        <div className="flex items-center justify-between ">
                            <h3 className="text-lg font-semibold text-white">Dashboard Analytics</h3>
                            <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">Live</span>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-green-500/60/10 p-4 rounded-md">
                                <div className="text-2xl font-bold text-green-400">$12,847</div>
                                <div className="text-slate-400 text-sm mt-1">Receita Hoje</div>
                            </div>
                            <div className="bg-blue-500/10 p-4 rounded-md">
                                <div className="text-2xl font-bold text-blue-400">847k</div>
                                <div className="text-slate-400 text-sm mt-1">Impressões</div>
                            </div>
                        </div>

                        <div className="mb-0">
                            <div className="flex justify-between items-center text-sm text-slate-400 mb-2">
                                <span>CPM Médio</span>
                                <span className="text-white font-semibold text-base">$2.45</span>
                            </div>
                            <div className="w-full bg-slate-700 rounded-full h-2">
                                <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full w-[75%]"></div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-green-400 text-sm">
                            <FiTrendingUp className="text-base" />
                            <span>+23% vs. mês anterior</span>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero