import { Button } from '@/components/ui/button'
import React from 'react'
import { FiStar, FiUsers, FiZap } from 'react-icons/fi'

const Cta = () => {
    return (
        <section className="px-6 py-20">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/90 to-blue-600/20 backdrop-blur-sm" />
                <div className="relative z-10">
                    <h2 className="text-4xl font-bold text-white mb-4">Pronto para Começar?</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Junte-se a milhares de publishers que já estão maximizando sua receita com a WinUp
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-100 px-8">
                            Começar Gratuitamente
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-white text-white hover:bg-white/10 bg-transparent"
                        >
                            Falar com Vendas
                        </Button>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8 text-green-100">
                        <div className="flex items-center space-x-2">
                            <FiStar className="w-5 h-5 text-yellow-400" />
                            <span>4.9/5 Rating</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FiZap className="w-5 h-5" />
                            <span>Setup em 5 minutos</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FiUsers className="w-5 h-5" />
                            <span>Suporte 24/7</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cta