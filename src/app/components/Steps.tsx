import React from 'react'
import { motion } from "framer-motion"
import {
  FiUser,
  FiZap,
  FiTrendingUp,
  FiPieChart
} from "react-icons/fi"

const Steps = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl font-bold text-white mb-2">Como Funciona</h2>
                    <p className="text-slate-400 text-lg">Comece a monetizar em 4 passos simples</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
                    {[
                        {
                            step: "1",
                            icon: FiUser,
                            title: "Cadastre-se",
                            description: "Conta em segundos com aprovação imediata",
                        },
                        {
                            step: "2",
                            icon: FiZap,
                            title: "Integre",
                            description: "Copie nosso script e cole no <head>",
                        },
                        {
                            step: "3",
                            icon: FiTrendingUp,
                            title: "Monetize",
                            description: "Receita automática sem esforço diário",
                        },
                        {
                            step: "4",
                            icon: FiPieChart,
                            title: "Analise",
                            description: "Dashboard intuitivo com gráficos e exportação",
                        },
                    ].map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center relative px-2"
                        >
                            <div className="w-16 h-16 bg-green-500/60 rounded-lg flex items-center justify-center mx-auto mb-4 relative">
                                <step.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-white text-lg font-semibold mb-1">{step.title}</h3>
                            <p className="text-slate-400 text-sm">{step.description}</p>

                            {index < 3 && (
                                <div className="hidden md:block absolute top-8 left-full w-12 h-0.5 bg-slate-600"></div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Steps