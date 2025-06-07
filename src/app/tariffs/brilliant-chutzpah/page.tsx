"use client"

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function BrilliantHutzpa() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const waveColors = [
    "hsl(59, 90%, 48%)",  // Dark yellow
    "hsl(41, 90%, 48%)",  // Dark orange
    "hsl(2, 90%, 48%)"    // Dark red
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
      className="relative min-h-screen bg-gradient-to-b from-amber-950 via-yellow-900 to-yellow-950 overflow-hidden"
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
          {/* Logo */}
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

          {/* Main heading */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white dark:text-white"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            The <span className="text-yellow-500">&quot;Brilliant Chutzpah&quot;</span> Plan
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-xl text-white dark:text-white text-shadow-gray-400 max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            For those who know the value of money and how to earn it
          </motion.p>
          
          {/* Decorative line */}
          <motion.div
            className="w-32 h-1 bg-yellow-500 my-2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "circOut" }}
          />

          {/* Plan description */}
          <motion.div
            className="text-white dark:text-white text-shadow-gray-400 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="mb-4">
              Chutzpah (חוצפה) — a special quality combining audacity, nerve and boundless energy.
              This plan is for those who inherited not just genes from their ancestors, but also business acumen.
            </p>
            
            <div className="bg-yellow-900 bg-opacity-30 p-4 rounded-lg border border-yellow-800 my-6">
              <h3 className="text-xl font-bold text-yellow-300 mb-2">Benefits:</h3>
              <ul className="list-disc list-inside space-y-2 text-left">
                <li>Access to &quot;golden&quot; business schemes</li>
                <li>Exclusive right to bargain</li>
                <li>Secrets of multiplying capital 40x</li>
                <li>Genuine Jewish ingenuity as a gift</li>
                <li>Personal manager named Moishe</li>
              </ul>
            </div>

            <p className="text-2xl font-bold text-yellow-400 mt-6">
              Only 18,000 ₸ (chai number) per month
            </p>
            <p className="text-sm text-white dark:text-white text-shadow-gray-400 mt-2">
              *18 — numerical value of the word &quot;chai&quot; (חי) — &quot;life&quot; in Hebrew
            </p>
          </motion.div>

          {/* Button group */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mt-8 w-full max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Link href="/tariffs/pf2" passHref className="w-full sm:w-auto flex-1 min-w-[200px]">
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-yellow-600 to-amber-500 hover:from-yellow-700 hover:to-amber-600 text-white  dark:text-white rounded-full font-medium transition-colors w-full"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Pay with 18% discount
              </motion.button>
            </Link>

            <Link href="/" passHref className="w-full sm:w-auto flex-1 min-w-[200px]">
              <motion.button
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white dark:text-white rounded-full font-medium transition-colors w-full"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                I&apos;ll think about it
              </motion.button>
            </Link>
          </motion.div>

          {/* Disclaimer text */}
          <motion.p 
            className="text-white dark:text-white text-shadow-white mt-6 text-sm max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            *By subscribing, you agree that 10% of your future profits will be transferred to our account,
            and another 20% to the Israel Defense Forces, which continues its military operation to liberate
            the ancestral Israeli province of Gaza. This isn&apos;t a commission — it&apos;s tzedakah.
          </motion.p>
        </main>
      </motion.div>
    </div>
  );
}