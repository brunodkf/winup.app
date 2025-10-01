import React from 'react'
import { motion } from "framer-motion"
import { Card, CardContent } from '@/components/ui/card'
import {
  FiBarChart2,
  FiUsers,
  FiCreditCard,
  FiZap,
} from "react-icons/fi"

const Platform = () => {
    return (

        <section className="py-24 bg-slate-800/50">
            <div className="container mx-auto px-4">
           
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Por que escolher a WinUp?</h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Nossa plataforma oferece as ferramentas mais avançadas para maximizar sua receita publicitária
                    </p>
                </motion.div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            icon: FiZap,
                            title: "Integração Simples",
                            description: "Suporte a Prebid.js, GAM e outras plataformas com poucos cliques",
                            iconBg: "bg-emerald-500/10",
                            iconColor: "text-emerald-400",
                        },
                        {
                            icon: FiBarChart2,
                            title: "Relatórios Detalhados",
                            description: "Métricas em tempo real de impressões, eCPM e receita",
                            iconBg: "bg-blue-500/10",
                            iconColor: "text-blue-400",
                        },
                        {
                            icon: FiUsers,
                            title: "Suporte Especializado",
                            description: "Equipe dedicada para otimização de resultados",
                            iconBg: "bg-purple-500/10",
                            iconColor: "text-purple-400",
                        },
                        {
                            icon: FiCreditCard,
                            title: "Pagamento Transparente",
                            description: "Sem taxas ocultas e cronograma previsível",
                            iconBg: "bg-orange-500/10",
                            iconColor: "text-orange-400",
                        },
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="bg-[#1e293b] border border-slate-700/40 p-6 h-full rounded-xl transition-colors">
                                <CardContent className="p-0 flex items-center flex-col text-center">
                                    <div className={`w-12 h-12 ${feature.iconBg} rounded-lg flex items-center justify-center mb-4`}>
                                        <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                                    </div>
                                    <h3 className="text-white text-lg font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-slate-400 text-sm">{feature.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Platform