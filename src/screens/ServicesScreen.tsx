import { motion } from 'framer-motion';
import { ArrowRight, Calendar, ShoppingCart, Users, Zap, Cpu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ServicesScreen = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "БОТЫ ДЛЯ ЗАПИСИ НА УСЛУГИ",
      description: "• Мастера, стилисты, визажисты\n• Тренеры, коучи, преподаватели\n• Врачи, косметологи, специалисты",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "БОТЫ-КАТАЛОГИ С ОПЛАТОЙ",
      description: "• Магазины, бутики, онлайн-ритейл\n• Кафе, рестораны, службы доставки\n• Инфобизнес, онлайн-курсы, продукты",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "БОТЫ ДЛЯ РАБОТЫ С АУДИТОРИЕЙ",
      description: "• Блогеры, инфлюенсеры, эксперты\n• Авторы, художники, создатели\n• Комьюнити-менеджеры, SMM",
      color: "from-green-500 to-emerald-400"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "ИНТЕГРАЦИЯ И АВТОМАТИЗАЦИЯ",
      description: "• CRM и учёт клиентов\n• Google Sheets/Диск → Telegram\n• Синхронизация с текущими системами",
      color: "from-orange-500 to-red-400"
    }
  ];

  const handleNext = () => {
    navigate('/pricing');
  };

  const handleBack = () => {
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-gradient-pershin p-6">
      {/* Шапка */}
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={handleBack}
          className="text-gray-400 hover:text-white flex items-center gap-2"
        >
          ← Назад
        </button>
        <div className="text-sm text-gray-400">
          4 категории решений
        </div>
      </div>

      {/* Заголовок - ТОЧНЫЙ ТЕКСТ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-display font-bold text-white mb-4">
          ВОЗМОЖНОСТИ ДЛЯ ВАШЕГО БИЗНЕСА
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Конкретные решения под ваши задачи
        </p>
      </motion.div>

      {/* Карточки услуг - ТОЧНЫЕ ТЕКСТЫ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card-glass p-8 hover:transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-start gap-6">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {service.icon}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  {service.title}
                  <Zap className="w-5 h-5 text-pershin-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <div className="text-gray-300 whitespace-pre-line">
                  {service.description}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Кнопка - ТОЧНЫЙ ТЕКСТ */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <button
          onClick={handleBack}
          className="btn-secondary px-10 py-4"
        >
          Вернуться на главную
        </button>
        <button
          onClick={handleNext}
          className="btn-primary px-10 py-4 inline-flex items-center gap-3"
        >
          УЗНАТЬ СТОИМОСТЬ
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Прогресс */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        <div className="inline-flex items-center gap-4">
          <span className="text-pershin-gold">• Экран загрузки</span>
          <span className="text-pershin-gold">• Главная</span>
          <span className="text-white">• Возможности</span>
          <span className="text-gray-500">• Стоимость</span>
          <span className="text-gray-500">• Формы</span>
          <span className="text-gray-500">• Спасибо</span>
        </div>
      </div>
    </div>
  );
};

export default ServicesScreen;