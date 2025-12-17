import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      }
    }, 30);

    return () => clearTimeout(timer);
  }, [progress]);

  // Автопереход при 100%
  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        navigate('/home');
      }, 500);
    }
  }, [progress, navigate]);

  return (
    <div className="min-h-screen bg-gradient-pershin flex flex-col items-center justify-center p-6">
      {/* Логотип - ВАШЕ ВИДЕО - ИСПРАВЛЕНО: mx-auto для центрирования */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, type: 'spring' }}
        className="relative mb-8 mx-auto"  // ← ДОБАВИЛ mx-auto
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-pershin-gold/30"
        >
          <source src="/videos/logo.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео
        </video>
      </motion.div>

      {/* Название */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-5xl font-display font-bold text-white mb-2 text-center"
      >
        Pershin<span className="text-pershin-gold">Style</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-xl text-gray-300 mb-10 text-center"
      >
        Think.<span className="text-pershin-gold">Dream</span>.Create.
      </motion.p>

      {/* Прогресс-бар */}
      <div className="w-80 max-w-full mb-4">
        <div className="h-2 bg-pershin-blue-light rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-pershin-gold to-yellow-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-400">
          <span>Загрузка...</span>
          <span>{progress}%</span>
        </div>
      </div>

      {/* Кинематографичная подпись */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-12 text-center"
      >
        <p className="text-gray-400 italic text-sm">
          Luxury digital solutions
        </p>
        <p className="text-gray-500 text-xs mt-1">
          Подготовка персонализированных решений...
        </p>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;