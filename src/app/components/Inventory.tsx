import React from 'react'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { motion } from "framer-motion"

import {
  FiGlobe,
  FiSmartphone,
  FiTv
} from "react-icons/fi"

const Inventory = () => {
    return (

        <section className="bg-slate-800/50 py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl font-bold text-white mb-2">Formatos de Inventário</h2>
                    <p className="text-slate-400 text-lg">
                        Suporte completo para todos os dispositivos e formatos
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: FiGlobe,
                            title: "Web",
                            color: "bg-blue-600/30",
                            textColor: "text-blue-500",
                            description: "Anúncios de banner, vídeo e native para websites",
                            features: ["Display Banners", "Video Ads", "Native Ads", "Interstitial"],
                        },
                        {
                            icon: FiSmartphone,
                            title: "App Mobile",
                            color: "bg-green-600/30",
                            textColor: "text-green-500/60",
                            description: "Formatos otimizados para aplicativos móveis",
                            features: ["Banner Mobile", "Rewarded Video", "Interstitial", "Native Mobile"],
                        },
                        {
                            icon: FiTv,
                            title: "Smart TV",
                            color: "bg-purple-600/30",
                            textColor: "text-purple-500",
                            description: "Anúncios para plataformas de streaming e CTV",
                            features: ["Pre-roll Video", "Mid-roll Video", "Overlay Ads", "Sponsored Content"],
                        },
                    ].map((format, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 h-full">
                                <div className={`w-14 h-14 ${format.color} rounded-lg flex items-center justify-center mx-auto mb-6`}>
                                    <format.icon className={`w-7 h-7 ${format.textColor}`} />
                                </div>
                                <h3 className="text-white text-xl font-semibold text-center mb-2">{format.title}</h3>
                                <p className="text-slate-400 text-sm text-center mb-6 leading-relaxed">{format.description}</p>
                                <ul className="space-y-3">
                                    {format.features.map((feature, i) => (
                                        <li key={i} className="flex items-center space-x-3">
                                            {/* <FiCheck className="w-5 h-5 text-green-400" /> */}
                                            <IoMdCheckmarkCircleOutline className="w-5 h-5 text-green-400" />
                                            <span className="text-slate-300 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>


    )
}

export default Inventory