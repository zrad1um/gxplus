"use client"

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Commercant() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const waveColors = [
    "hsl(2, 90%, 48%)",  // Dark red
    "hsl(41, 90%, 48%)", // Dark orange
    "hsl(59, 90%, 48%)"  // Dark yellow
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
      className="relative min-h-screen bg-gradient-to-b from-orange-950 via-amber-950 to-yellow-950 overflow-hidden"
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
            The <span className="text-orange-500">&quot;Shuttle Trader&quot;</span> Plan
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-xl text-white dark:text-white text-shadow-gray-400 max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            For true post-Soviet shuttle trade veterans
          </motion.p>
          
          {/* Decorative line */}
          <motion.div
            className="w-32 h-1 bg-orange-500 my-2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "circOut" }}
          />

          {/* Plan description */}
          <motion.div
            className="text-white-100 dark:text-white-100 text-shadow-gray-400 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="mb-4">
              This plan is specially designed for descendants of those legendary 90s entrepreneurs who 
              imported &quot;shuttle cargo&quot; from Turkey and China, flooding markets with cheap consumer goods. 
              We honor your traditions!
            </p>
            
            <div className="bg-orange-900 bg-opacity-30 p-4 rounded-lg border border-orange-800 my-6">
              <h3 className="text-xl font-bold text-orange-300 mb-2">What you get:</h3>
              <ul className="list-disc list-inside space-y-2 text-left">
                <li>Access to exclusive &quot;shuttle trade&quot; channels</li>
                <li>Guaranteed 300% markup on any product</li>
                <li>Secret tax evasion schemes</li>
                <li>Authentic &quot;bazaar-style&quot; communication experience</li>
                <li>Nostalgic memories of &quot;Luzhniki&quot; market</li>
              </ul>
            </div>

            <p className="text-2xl font-bold text-orange-400 mt-6">
              Only <span className="line-through text-gray-100 dark:text-gray-100">5,000</span> 1 MRP ({new Date().getFullYear()} rate = 3,932 ₸)
            </p>
            <p className="text-sm text-gray-100 dark:text-gray-100 mt-2">
              *Price tied to MRP and changes annually, just like dollar rates in the 90s
            </p>
          </motion.div>

          {/* Button group */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mt-8 w-full max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Link href="/tariffs/pf1" passHref className="w-full sm:w-auto flex-1 min-w-[200px]">
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white dark:text-white rounded-full font-medium transition-colors w-full"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Pay Like It&apos;s the 90s
              </motion.button>
            </Link>

            <Link href="/" passHref className="w-full sm:w-auto flex-1 min-w-[200px]">
              <motion.button
                className="px-6 py-3 bg-gray-400 hover:bg-gray-300 text-white dark:text-white rounded-full font-medium transition-colors w-full"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Changed My Mind (chicken?)
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
            *By subscribing, you agree that we&apos;re not responsible for service quality - 
            just like your 90s suppliers weren&apos;t responsible for product quality. 
            But hey, it&apos;s &quot;cheap and cheerful&quot;!
          </motion.p>
        </main>
      </motion.div>
    </div>
  );
}