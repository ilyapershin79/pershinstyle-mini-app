import { motion } from 'framer-motion';
import { ChevronRight, Sparkles, Star, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/services');
  };

  return (
    <div className="min-h-screen bg-gradient-pershin p-6 flex flex-col">
      {/* Шапка с ВИДЕО-ЛОГОТИПОМ */}
      <div className="flex justify-between items-center mb-12">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-pershin-gold flex items-center justify-center">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/logo.mp4" type="video/mp4" />
            </video>
          </div>
          <span className="text-xl font-display font-bold text-white">
            Pershin<span className="text-pershin-gold">Style</span>
          </span>
        </div>
        <div className="text-sm text-gray-400">
          Think.Dream.Create.
        </div>
      </div>

      {/* Основной контент */}
      <div className="flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          {/* ИСПРАВЛЕННАЯ НАДПИСЬ: три строки с анимацией */}
          <div className="text-center space-y-2 mb-6">
            <motion.div
              className="text-5xl md:text-6xl font-display font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Think.
            </motion.div>
            <motion.div
              className="text-5xl md:text-6xl font-display font-bold text-pershin-gold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Dream.
            </motion.div>
            <motion.div
              className="text-5xl md:text-6xl font-display font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Create.
            </motion.div>
          </div>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Digital-решения для вашего бизнеса: от идеи до реализации под ключ.
          </p>
        </motion.div>

        {/* Три карточки - ТОЧНЫЕ ТЕКСТЫ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Think */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="card-glass p-8 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-blue-300" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">THINK...</h3>
            <p className="text-gray-300">
              Раскладываем хаос по полочкам
            </p>
          </motion.div>

          {/* Dream */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="card-glass p-8 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-6">
              <Star className="w-8 h-8 text-purple-300" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">DREAM...</h3>
            <p className="text-gray-300">
              От сложной задачи — к красивому интерфейсу
            </p>
          </motion.div>

          {/* Create */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="card-glass p-8 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-yellow-300" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">CREATE...</h3>
            <p className="text-gray-300">
              От замысла — к стабильному и красивому продукту
            </p>
          </motion.div>
        </div>

        {/* Кнопка */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <button
            onClick={handleStart}
            className="btn-primary text-lg px-10 py-4 inline-flex items-center gap-3"
          >
            УЗНАТЬ ВОЗМОЖНОСТИ
            <ChevronRight className="w-5 h-5" />
          </button>
          <p className="text-gray-400 mt-4 text-sm">
            4 категории digital-решений для вашего бизнеса
          </p>
        </motion.div>
      </div>

      {/* Подвал */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        <p>Telegram-боты • Mini Apps • Android-приложения • Комплексные решения</p>
      </div>
    </div>
  );
};

export default HomeScreen;