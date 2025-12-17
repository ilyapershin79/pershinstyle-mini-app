import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Smartphone, Package, Bot, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PricingScreen = () => {
  const navigate = useNavigate();

  const solutions = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "ПРОСТОЙ БОТ",
      price: "от 5.000₽",
      time: "от 2 дней",
      features: ["Автоответчик", "Базовая навигация", "Интеграция с Google Таблицами", "Простая логика"],
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "БОТ С MINI APP",
      price: "от 25.000₽",
      time: "от 7 дней",
      features: ["Telegram Mini App", "Каталог товаров/услуг", "Корзина и оплата", "Админ-панель"],
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "КОМПЛЕКСНЫЙ ПАКЕТ",
      price: "от 70.000₽",
      time: "от 20 дней",
      features: ["Бот + Mini App + Android приложение", "Интеграция с CRM/Google Sheets", "Сложная бизнес-логика", "Полная аналитика"],
      color: "from-orange-500 to-red-400"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "ANDROID ПРИЛОЖЕНИЕ",
      price: "от 50.000₽",
      time: "от 15 дней",
      features: ["Нативное/Kotlin или кроссплатформа", "Push-уведомления", "Интеграция с бэкендом", "Адаптивный дизайн"],
      color: "from-green-500 to-emerald-400"
    }
  ];

  const handleTZ = () => {
    navigate('/forms?type=tz');
  };

  const handleConsultation = () => {
    navigate('/forms?type=consultation');
  };

  const handleBack = () => {
    navigate('/services');
  };

  return (
    <div className="min-h-screen bg-gradient-pershin p-6">
      {/* ШАПКА С КНОПКОЙ НАЗАД */}
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={handleBack}
          className="text-gray-400 hover:text-white flex items-center gap-2 p-3 rounded-lg text-lg font-medium"
        >
          ← Назад к возможностям
        </button>
        <div className="text-sm text-gray-400">
          Стоимость и сроки
        </div>
      </div>

      {/* Заголовок */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-display font-bold text-white mb-4">
          СТОИМОСТЬ РЕШЕНИЙ
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          4 решения с ценами и сроками
        </p>
      </motion.div>

      {/* Карточки решений */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card-glass p-6 flex flex-col h-full"
          >
            {/* Иконка */}
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6 mx-auto`}>
              <div className="text-white">
                {solution.icon}
              </div>
            </div>

            {/* Название */}
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              {solution.title}
            </h3>

            {/* Цена и срок */}
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-pershin-gold mb-1">
                {solution.price}
              </div>
              <div className="text-gray-300">
                {solution.time}
              </div>
            </div>

            {/* Список возможностей */}
            <div className="flex-1 mb-6">
              {solution.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 mb-3">
                  <Check className="w-5 h-5 text-pershin-gold mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Текст под решениями */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="card-glass p-8 max-w-4xl mx-auto mb-12 text-center"
      >
        <p className="text-xl text-gray-300">
          Подхожу индивидуально к каждой задаче.<br />
          Сначала — бесплатная консультация и анализ,<br />
          потом — предложение по решению.
        </p>
      </motion.div>

      {/* Две кнопки */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
        <button
          onClick={handleTZ}
          className="btn-primary px-10 py-4 inline-flex items-center gap-3"
        >
          <MessageSquare className="w-5 h-5" />
          ОТПРАВИТЬ ТЗ
        </button>
        <button
          onClick={handleConsultation}
          className="btn-secondary px-10 py-4 inline-flex items-center gap-3"
        >
          <ArrowRight className="w-5 h-5" />
          ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
        </button>
      </div>

      {/* Дополнительная кнопка Назад */}
      <div className="text-center mt-8">
        <button
          onClick={handleBack}
          className="text-pershin-gold underline hover:text-yellow-400 text-lg"
        >
          ← Вернуться к возможностям
        </button>
      </div>

      {/* Прогресс */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        <div className="inline-flex items-center gap-4">
          <span className="text-pershin-gold">• Экран загрузки</span>
          <span className="text-pershin-gold">• Главная</span>
          <span className="text-pershin-gold">• Возможности</span>
          <span className="text-white">• Стоимость</span>
          <span className="text-gray-500">• Формы</span>
          <span className="text-gray-500">• Спасибо</span>
        </div>
      </div>
    </div>
  );
};

export default PricingScreen;