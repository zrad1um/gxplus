"use client"

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function BeHappy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const waveColors = [
    "hsl(70, 90%, 48%)",
    "hsl(50, 90%, 48%)", 
    "hsl(10, 90%, 48%)"  
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
      className="relative min-h-screen bg-gradient-to-b from-black via-rose-950 to-gray-800 overflow-hidden"
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
              filter: "blur(1px)",
              willChange: "transform",
              mixBlendMode: isHovered ? "difference" : "hard-light",
              opacity: 0.7 - (i * 0.5 / waveCount)
            }}
            animate={{
              x: ["0%", "-100%"],
              y: [0, i % 2 === 0 ? -8 : 8],
              rotate: [0, 3, 0, -3, 0]
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse",
              y: {
                duration: 8 + i * 2,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut"
              },
              rotate: {
                duration: 10 + i * 3,
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
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
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
            className="text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">&quot;Be Happy&quot;</span> Plan
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-xl text-white dark:text-white text-shadow-gray-400 max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Because happiness isn&apos;t a destination, but a way of traveling
          </motion.p>
          
          {/* Decorative line */}
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-rose-500 to-white my-2"
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
              This plan is for those who understand that money is just a tool.
              True wealth lies in freedom, harmony, and the ability to say &quot;no&quot; to things that don&apos;t bring joy.
            </p>
            
            <div className="bg-gradient-to-br from-rose-900/30 to-emerald-900/30 p-4 rounded-lg border border-rose-800/50 my-6">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-white mb-2">
                What enlightenment includes:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-left">
                <li>Daily &quot;Om on minimums&quot; meditations</li>
                <li>Access to private chats with pseudo-Buddhas</li>
                <li>Money-back guarantee (non-attachment to material things)</li>
                <li>Personal coach who will tell you what you want to hear</li>
                <li>NFT certificate &quot;I am spiritually rich&quot;</li>
                <li>Any house anywhere in the world of your choice</li>
                <li>Citizenship of absolutely all Bantustans in the world</li>
                <li>Any car in any color and taste</li>
                <li>Top-tier technology</li>
                <li>Personal serfs</li>
                <li>Hangar with vehicles of all kinds</li>
                <li>Lots... lots of weapons!</li>
              </ul>
            </div>

            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-white mt-6">
              Only 427,346,529,110 ₸ (answer to the ultimate question of life)
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-400 mt-2">
              *42 — according to &quot;The Hitchhiker&apos;s Guide to the Galaxy&quot;, the answer to the ultimate question of life, the universe, and everything
            </p>
          </motion.div>

          {/* Button group */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mt-8 w-full max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Link href="/tariffs/pf3" passHref className="w-full sm:w-auto flex-1 min-w-[200px]">
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-rose-600 to-gray-500 hover:from-rose-700 hover:to-gray-600 text-white dark:text-white rounded-full font-medium transition-colors w-full"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Buy Enlightenment
              </motion.button>
            </Link>

            <Link href="/" passHref className="w-full sm:w-auto flex-1 min-w-[200px]">
              <motion.button
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white dark:text-white rounded-full font-medium transition-colors w-full"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                I&apos;m Already Happy
              </motion.button>
            </Link>
          </motion.div>

          {/* Disclaimer text */}
          <motion.p 
            className="text-white dark:text-white text-shadow-gray-400 mt-6 text-sm max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            *By purchasing this plan, you acknowledge that true happiness can&apos;t be bought.
            But for this money, we&apos;ll pretend otherwise.
          </motion.p>
        </main>
      </motion.div>
    </div>
  );
}