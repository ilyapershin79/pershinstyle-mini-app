import { motion } from 'framer-motion';
import { ArrowLeft, Send, User, MessageSquare, HelpCircle } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { sendDataToBot } from '../telegram/initTelegram';

const FormsScreen = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const formType = searchParams.get('type') || 'tz'; // 'tz' или 'consultation'

  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    description: '',
    tzLink: ''
  });

  const handleBack = () => {
    navigate('/pricing');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Подготовка данных для отправки
    const dataToSend = {
      formType: formType, // 'tz' или 'consultation'
      userName: formData.name,
      userContact: formData.contact,
      description: formData.description,
      tzLink: formData.tzLink || null,
      timestamp: new Date().toISOString()
    };

    // ОТПРАВКА ДАННЫХ В GAS (с await)
    const isSent = await sendDataToBot(dataToSend);

    if (isSent) {
      console.log('✅ Данные формы отправлены в GAS:', dataToSend);
      navigate('/thankyou');
    } else {
      // Для отладки в браузере
      console.log('⚠️ Отправка в браузере (в Telegram отправилось бы):', dataToSend);
      alert(formType === 'tz' ? 'ТЗ отправлено на оценку!' : 'Запрос на консультацию отправлен!');
      navigate('/thankyou');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-pershin p-6">
      {/* Шапка */}
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={handleBack}
          className="text-gray-400 hover:text-white flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Назад
        </button>
        <div className="text-sm text-gray-400">
          {formType === 'tz' ? 'Отправка ТЗ' : 'Консультация'}
        </div>
      </div>

      {/* Заголовок */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-display font-bold text-white mb-4">
          {formType === 'tz' ? 'ОТПРАВЬТЕ ЗАДАЧУ' : 'НУЖНА ПОМОЩЬ С ВЫБОРОМ?'}
        </h1>
      </motion.div>

      {/* Форма */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card-glass p-8 max-w-2xl mx-auto"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Ваше имя */}
          <div>
            <label className="flex items-center gap-2 text-white mb-2">
              <User className="w-5 h-5" />
              • Ваше имя
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-pershin-gold transition-colors"
              placeholder="Иван Иванов"
            />
          </div>

          {/* Контакт для связи (универсальное поле) */}
          <div>
            <label className="flex items-center gap-2 text-white mb-2">
              <MessageSquare className="w-5 h-5" />
              • Контакт для связи
            </label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-pershin-gold transition-colors"
              placeholder="@username, номер телефона или email"
            />
            <p className="text-gray-400 text-xs mt-1">
              Укажите удобный способ связи: Telegram (@username), номер телефона или email
            </p>
          </div>

          {/* Форма ТЗ */}
          {formType === 'tz' && (
            <>
              <div>
                <label className="flex items-center gap-2 text-white mb-2">
                  • Опишите, что нужно сделать
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-pershin-gold transition-colors"
                  placeholder="Опишите вашу задачу максимально подробно. Можно вставить текст ТЗ или прикрепить ссылку на документ."
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-white mb-2">
                  Ссылка на ТЗ (необязательно)
                </label>
                <input
                  type="text"
                  name="tzLink"
                  value={formData.tzLink}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-pershin-gold transition-colors"
                  placeholder="https://docs.google.com/... или другая ссылка"
                />
              </div>
            </>
          )}

          {/* Форма консультации */}
          {formType === 'consultation' && (
            <div>
              <label className="flex items-center gap-2 text-white mb-2">
                <HelpCircle className="w-5 h-5" />
                • Кратко опишите, что хотите
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-pershin-gold transition-colors"
                placeholder="Например: нужен бот для записи клиентов, Mini App для магазина, или не могу выбрать между вариантами..."
              />
            </div>
          )}

          {/* Кнопка отправки */}
          <div className="pt-6">
            <button
              type="submit"
              className="btn-primary w-full py-4 inline-flex items-center justify-center gap-3"
            >
              <Send className="w-5 h-5" />
              {formType === 'tz' ? 'ОТПРАВИТЬ НА ОЦЕНКУ' : 'ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ'}
            </button>

            {/* Примечание для консультации */}
            {formType === 'consultation' && (
              <p className="text-gray-400 text-sm mt-4 text-center">
                Свяжусь в Telegram, помогу определиться с решением.
              </p>
            )}

            {/* Примечание для ТЗ */}
            {formType === 'tz' && (
              <p className="text-gray-400 text-sm mt-4 text-center">
                Изучу вашу задачу и отправлю оценку сроков и стоимости в течение 24 часов.
              </p>
            )}
          </div>
        </form>
      </motion.div>

      {/* Инфо-блок */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="card-glass p-6 max-w-2xl mx-auto mt-8 text-center"
      >
        <p className="text-gray-300">
          Все данные защищены и используются исключительно для связи с вами.<br />
          Никакого спама и передачи третьим лицам.
        </p>
      </motion.div>

      {/* Прогресс */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        <div className="inline-flex items-center gap-4">
          <span className="text-pershin-gold">• Экран загрузки</span>
          <span className="text-pershin-gold">• Главная</span>
          <span className="text-pershin-gold">• Возможности</span>
          <span className="text-pershin-gold">• Стоимость</span>
          <span className="text-white">• Формы</span>
          <span className="text-gray-500">• Спасибо</span>
        </div>
      </div>
    </div>
  );
};

export default FormsScreen;