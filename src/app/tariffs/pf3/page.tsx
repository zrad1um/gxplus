"use client"

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function PaymentForm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    address: ''
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика обработки платежа
    alert('Спасибо за оплату! Теперь вы официально наш должник.');
  };

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-b from-gray-800 via-rose-950 to-black overflow-hidden"
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
        className="relative z-10 grid min-h-screen place-items-center p-4 sm:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <main className="flex flex-col items-center gap-6 w-full max-w-2xl">
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
              className="w-32 h-32 md:w-40 md:h-40 object-contain"
              priority
            />
          </motion.div>

          {/* Заголовок */}
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-white dark:text-white text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Subscription <span className="text-rose-500">checkout</span>
          </motion.h1>

          {/* Декоративная линия */}
          <motion.div
            className="w-24 h-1 bg-rose-500 my-2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "circOut" }}
          />

          {/* Форма оплаты */}
          <motion.form
            onSubmit={handleSubmit}
            className="w-full bg-black bg-opacity-60 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-rose-900 shadow-lg shadow-rose-900/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Личные данные */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white dark:text-white mb-2">Your details</h3>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white dark:text-white mb-1">
                    Full name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="John Johnson"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white dark:text-white mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-white-300 dark:text-white-300 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="City, street, building, apartment"
                    required
                  />
                </div>
              </div>

              {/* Данные карты */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white dark:text-white mb-2">Card details</h3>
                
                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-white dark:text-white mb-1">
                    Card number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiry" className="block text-sm font-medium text-white dark:text-white mb-1">
                      Expiry date
                    </label>
                    <input
                      type="text"
                      id="expiry"
                      name="expiry"
                      value={formData.expiry}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="MM/YY"
                      maxLength={5}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium text-white dark:text-white mb-1">
                      CVV/CVC
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="123"
                      maxLength={3}
                      required
                    />
                  </div>
                </div>

                <div className="pt-6">
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg border border-gray-700">
                    <span className="text-white dark:text-white">Total amount:</span>
                    <span className="text-md font-bold text-rose-400 dark:text-rose-400">427,346,529,110₸</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Кнопка оплаты */}
          <Link href="/tariffs/thanksto" passHref className="w-full sm:w-auto flex-1 min-w-[200px]"/>
            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-rose-600 to-pink-500 text-white dark:text-white font-bold rounded-lg shadow-lg hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Pay now
            </motion.button>

            <p className="text-xs text-white dark:text-white mt-4 text-center">
              By clicking the button, you agree that we have the right to charge any amount from your card at any time without notice.
            </p>
          </motion.form>

          {/* Ссылка назад */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Link href="/" className="text-gray-200 dark:text-gray-200 hover:text-white text-sm flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Return to homepage
            </Link>
          </motion.div>
        </main>
      </motion.div>
    </div>
  );
}