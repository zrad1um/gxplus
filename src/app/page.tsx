"use client";

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const waveColors = [
    "hsl(2, 90%, 48%)",  // Тёмно-красный
    "hsl(41, 90%, 48%)", // Тёмно-оранжевый
    "hsl(59, 90%, 48%)"  // Тёмно-жёлтый
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
          className="relative min-h-screen bg-gradient-to-b from-black via-rose-950 to-yellow-950 overflow-hidden"
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
              Welcome to <span className="text-red-500 dark:text-red-500">GX+</span>
            </motion.h1>

            {/* Подзаголовок */}
            <motion.p
                className="text-xl text-white dark:text-white text-shadow-gray-400 max-w-md leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
            >
              The most shitpost community in Kazakhstan
            </motion.p>

            {/* Декоративная линия */}
            <motion.div
                className="w-32 h-1 bg-red-500 dark:bg-red-500 my-2"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.8, ease: "circOut" }}
            />

            {/* Описание тарифов */}
            <motion.div
                className="text-white-100 dark:text-white-100 text-shadow-gray-400 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
            >
              <p className="mb-4">
                We’ve prepared four subscription plans for you, so you won’t forget about us and will dutifully contribute to our budget, 
                allowing our developers and designers to keep partying in the Maldives at your expense, goyim :3
              </p>
              <p>
                The fourth plan is for those who want to be happy but don’t know how. We’ll help you find happiness because we know the true price of happiness. 
                And that price is your money, which you’ll be paying us every month.
              </p>
            </motion.div>

            {/* Группа кнопок */}
            <motion.div
                className="flex flex-wrap justify-center gap-3 mt-8 w-full max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
              <Link href="/tariffs/poor-goy" passHref className="w-full sm:w-auto flex-1 min-w-[200px]">
                <motion.button
                    className="px-6 py-3 bg-red-700 hover:bg-red-600 text-white dark:text-white rounded-full font-medium transition-colors w-full"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                >
                  «Poor little goy»
                </motion.button>
              </Link>

              <Link href="/tariffs/entrepreneur" passHref className="w-full sm:w-auto flex-1 min-w-[200px]">
                <motion.button
                    className="px-6 py-3 bg-orange-700 hover:bg-orange-600 text-white dark:text-white rounded-full font-medium transition-colors w-full"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                >
                  «Entrepreneur»
                </motion.button>
              </Link>

              <Link href="/tariffs/brilliant-chutzpah" passHref className="w-full sm:w-auto flex-1 min-w-[200px]">
                <motion.button
                    className="px-6 py-3 bg-yellow-700 hover:bg-yellow-600 text-white dark:text-white rounded-full font-medium transition-colors w-full"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                >
                  «Brilliant chutzpah»
                </motion.button>
              </Link>

              <Link href="/tariffs/be-happy" passHref className="w-full sm:w-auto flex-1 min-w-[200px]">
                <motion.button
                    className="px-6 py-3 bg-white hover:bg-gray-50 text-red-400 dark:text-red-400 hover:text-red-700 rounded-full font-medium transition-colors w-full"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                >
                  «Be happy»
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
              *By clicking the buttons, you agree that we’ll take your data, money, and dignity. 
              This is guaranteed by the Labor Code of the Republic of Kazakhstan, and who knows what other laws and codes—because we don’t follow them. They’re laws for goyim.
              But we won’t judge you if you click these buttons, because we understand you’re just a goy.
            </motion.p>
          </main>
        </motion.div>
      </div>
  );
}

