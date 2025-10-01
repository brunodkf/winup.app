import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <Image src='/logo.webp' alt="Logo Image" className="max-w-20 dark:filter-none" width={120} height={50} />
                        </div>
                        <p className="text-slate-400 mb-4">
                            A melhor plataforma de monetização de conteúdo digital com transparência total.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Produto</h4>
                        <ul className="space-y-2 text-slate-400">
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Recursos
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Preços
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Integrações
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    API
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Suporte</h4>
                        <ul className="space-y-2 text-slate-400">
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Central de Ajuda
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Documentação
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Status
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Empresa</h4>
                        <ul className="space-y-2 text-slate-400">
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Sobre
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Carreiras
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Imprensa
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
                    <p>© 2025 WinUp Network Ads. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer