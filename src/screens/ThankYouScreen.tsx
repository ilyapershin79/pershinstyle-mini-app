import { motion } from 'framer-motion';
import { CheckCircle, Home, MessageCircle, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ThankYouScreen = () => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-gradient-pershin p-6 flex flex-col items-center justify-center">
      {/* Анимация успеха */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="relative mb-8"
      >
        <div className="w-32 h-32 rounded-full bg-gradient-gold flex items-center justify-center shadow-2xl">
          <CheckCircle className="w-20 h-20 text-pershin-blue-dark" />
        </div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="absolute -inset-4 border-4 border-pershin-gold/30 rounded-full"
        />
      </motion.div>

      {/* Заголовок */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-5xl font-display font-bold text-white mb-6 text-center"
      >
        <span className="text-pershin-gold">Спасибо</span> за обращение!
      </motion.h1>

      {/* Сообщение */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="card-glass p-8 max-w-2xl mx-auto mb-10 text-center"
      >
        <p className="text-xl text-gray-300 mb-6">
          Ваша заявка успешно отправлена. Я свяжусь с вами в ближайшее время через Telegram или email, который вы указали.
        </p>

        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-pershin-gold" />
            <span className="text-gray-300">Проверьте Telegram</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-pershin-gold" />
            <span className="text-gray-300">Готовлю персональное предложение</span>
          </div>
        </div>

        <p className="text-gray-400 text-sm">
          Обычно я отвечаю в течение 2-4 часов в рабочее время (Пн-Пт, 10:00-20:00 по МСК)
        </p>
      </motion.div>

      {/* Что дальше */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="card-glass p-6 mb-10 max-w-2xl"
      >
        <h3 className="text-2xl font-bold text-white mb-4 text-center">
          Что будет дальше?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4">
            <div className="text-3xl text-pershin-gold font-bold mb-2">1</div>
            <p className="text-gray-300">Анализ вашей задачи</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl text-pershin-gold font-bold mb-2">2</div>
            <p className="text-gray-300">Предложение решения и сроков</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl text-pershin-gold font-bold mb-2">3</div>
            <p className="text-gray-300">Начало работы над проектом</p>
          </div>
        </div>
      </motion.div>

      {/* Кнопки */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="flex flex-col sm:flex-row gap-6 mb-12"
      >
        <button
          onClick={handleReturnHome}
          className="btn-primary px-10 py-4 inline-flex items-center gap-3"
        >
          <Home className="w-5 h-5" />
          Вернуться на главную
        </button>
      </motion.div>

      {/* Прогресс - завершено */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        <div className="inline-flex items-center gap-4 mb-4">
          <span className="text-pershin-gold">• Экран загрузки</span>
          <span className="text-pershin-gold">• Главная</span>
          <span className="text-pershin-gold">• Возможности</span>
          <span className="text-pershin-gold">• Стоимость</span>
          <span className="text-pershin-gold">• Формы</span>
          <span className="text-white">• Спасибо</span>
        </div>
        <p className="text-gray-400">
          PershinStyle Mini App • Все 6 экранов готовы 🎉
        </p>
      </div>
    </div>
  );
};

export default ThankYouScreen;