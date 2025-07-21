"use client"

import Image from "next/image";
import { motion } from "framer-motion"
import {
  FiUser,
  FiBarChart2,
  FiUsers,
  FiCreditCard,
  FiArrowRight,
  FiZap,
  FiTrendingUp,
  FiPieChart,
  FiGlobe,
  FiSmartphone,
  FiTv,
  FiStar,
} from "react-icons/fi"
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoIosPlay } from "react-icons/io";

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen min-w-min bg-slate-900 font-montserrat relative">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="border-b border-slate-800 bg-slate-900/95 backdrop-blur-sm sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src='/logo.webp' alt="Logo Image" className="max-w-20 dark:filter-none" width={120} height={50} />
          </div>

          <div className="flex gap-4 items-center">
            <nav className="hidden md:flex items-center gap-5">
              <a href="#" className="text-slate-300 hover:text-white text-sm tracking-wider transition-colors">
                Recursos
              </a>
              <a href="#" className="text-slate-300 hover:text-white text-sm tracking-wider transition-colors">
                Como Funciona
              </a>
              <a href="#" className="text-slate-300 hover:text-white text-sm tracking-wider transition-colors">
                Preços
              </a>
            </nav>
            <div className="flex items-center gap-4 ml-3">
              <Button className="text-slate-300 cursor-pointer hover:text-green-500 hover:border-green-500 hover:bg-transparent transition-all font-semibold uppercase tracking-wider border bg-transparent">
                Login
              </Button>
              <Button className="bg-green-500/60 cursor-pointer hover:bg-green-600 text-white font-semibold uppercase tracking-wider">Cadastre-se</Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className=" text-white px-6 py-8">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Texto principal */}
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

            {/* Estatísticas */}
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

          {/* Card Analytics */}
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

      {/* Features Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="container mx-auto px-4">
          {/* Título */}
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

          {/* Cards */}
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


      {/* How it Works */}
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


      {/* Inventory Formats */}
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

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-br from-green-500/60 to-teal-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-4 text-white">Pronto para Começar?</h2>
            <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de publishers que já estão maximizando sua receita com a WinUp
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button className="bg-white text-green-600 hover:bg-slate-100 px-8 py-3">Começar Gratuitamente</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                Falar com Vendas
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-green-100">
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
          </motion.div>
        </div>
      </section> */}


      {/* CTA Section */}
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


      {/* Footer */}
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

    </main>
  );
}
