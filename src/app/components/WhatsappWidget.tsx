import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsappWidget = () => {
    return (
        <div className="fixed bottom-15 right-6 z-50">
            <Link href="https://wa.me/5521982255704"
                className="flex items-center bg-green-500 cursor-pointer hover:bg-green-600 text-white rounded-full py-2 px-4 shadow-lg shadow-green-500/25 animate-pulse">
                <FaWhatsapp className="w-6 h-6" />
                <span className="ml-2 hidden sm:inline">Fale no WhatsApp</span>
            </Link>
        </div>
    )
}

export default WhatsappWidget