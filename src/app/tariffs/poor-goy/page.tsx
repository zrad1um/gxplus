"use client"

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';


export default function PoorGoy() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerHeight, setContainerHeight] = useState(0);
    const waveColors = [
        "hsl(2, 90%, 48%)",
        "hsl(41, 90%, 48%)",
        "hsl(59, 90%, 48%)"
    ];



    useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.scrollHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const waveCount = Math.max(5, Math.floor(containerHeight / 150));

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-b from-red-950 via-rose-950 to-pink-950 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: waveCount }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-12 w-[300%]"
            style={{
              bottom: `${10 + (i * 100 / waveCount)}%`,
              left: "0%",
              borderRadius: "100% 50%",
              background: waveColors[i % waveColors.length],
              filter: "",
              willChange: "transform",
              mixBlendMode: "hard-light",
              opacity: 0.8 - (i * 0.6 / waveCount)
            }}
            animate={{
              x: ["0%", "-100%"],
              y: [0, i % 2 === 0 ? -5 : 5],
              rotate: [0, 2, 0, -2, 0]
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse",
              y: {
                duration: 6 + i * 2,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut"
              },
              rotate: {
                duration: 8 + i * 3,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut"
              }
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 grid min-h-screen place-items-center p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <main className="flex flex-col items-center gap-8 max-w-2xl text-center">
          {/* Логотип */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.6,
              type: "spring",
              damping: 7
            }}
          >
            <Image
              src="/logogo.png"
              alt="GXLand Logo"
              width={192}
              height={192}
              className="w-40 h-40 md:w-48 md:h-48 object-contain"
              priority
            />
          </motion.div>

          {/* Основной текст */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white dark:text-white"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            The <span className="text-red-500 dark:text-red-500">«Poor little goy»</span> plan
          </motion.h1>

          {/* Подзаголовок */}
          <motion.p
            className="text-xl text-white dark:text-white text-shadow-gray-400 dark:text-shadow-gray-400 max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            For those who want to be with us but can&#39;t afford it
          </motion.p>
          
          {/* Декоративная линия */}
          <motion.div
            className="w-32 h-1 bg-red-500 my-2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "circOut" }}
          />

          {/* Описание тарифа */}
          <motion.div
            className="text-white-100 dark:text-white-100 text-shadow-gray-400 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="mb-4">
              This plan was created specifically for those who understand they&apos;re
              just a goy but still want to be part of our cozy (though not for you, sneaky goy!)
              community.
            </p>

              <div className="bg-red-900 bg-opacity-30 p-4 rounded-lg border border-red-800 my-6">
              <h3 className="text-xl font-bold text-red-300 dark:text-red-300 mb-2">For a modest fee, you&#39;ll get:</h3>
              <ul className="list-disc list-inside space-y-2 text-left">
                <li>Limited &quot;access&quot; to content</li>
                <li>Ability to watch the chosen ones</li>
                <li>A sense of belonging (illusory)</li>
                <li>Our condescension (but no guarantees)</li>
              </ul>
            </div>
            <p className="text-2xl font-bold text-red-400 dark:text-red-400 mt-6">999₸ per month</p>
          </motion.div>

          {/* Кнопка оплаты */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mt-8 w-full max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Link href="/tariffs/payment-form" passHref className="w-full sm:w-auto flex-1 min-w-[200px]">
              <motion.button
                className="px-6 py-3 bg-red-700 hover:bg-red-600 text-white dark:text-white rounded-full font-medium transition-colors w-full"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Proceed to payment
              </motion.button>
            </Link>

            <Link href="/" passHref className="w-full sm:w-auto flex-1 min-w-[200px]">
              <motion.button
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white dark:text-white rounded-full font-medium transition-colors w-full"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Go back
              </motion.button>
            </Link>
          </motion.div>

          {/* Дополнительный текст */}
          <motion.p 
            className="text-white dark:text-white text-shadow-gray-400 mt-6 text-sm max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            *By purchasing this plan, you acknowledge your place in the our hierarchy.
            We reserve the right to change the terms or simply take your money without explanation at any time.
          </motion.p>
        </main>
      </motion.div>
    </div>
  );
}