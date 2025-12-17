import * as TelegramWebApp from '@twa-dev/sdk';

export const initTelegramWebApp = () => {
  TelegramWebApp.init();

  const tg = window.Telegram?.WebApp;

  if (!tg) {
    console.warn('Telegram WebApp не обнаружен. Запущено в браузере.');
    return null;
  }

  console.log('Telegram WebApp инициализирован:', {
    platform: tg.platform,
    version: tg.version,
    initData: tg.initData,
    initDataUnsafe: tg.initDataUnsafe,
    themeParams: tg.themeParams
  });

  tg.expand();

  return tg;
};

export interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: boolean;
}

export const getTelegramUser = (): TelegramUser | null => {
  const tg = window.Telegram?.WebApp;
  return tg?.initDataUnsafe?.user || null;
};

export const getTelegramData = () => {
  const tg = window.Telegram?.WebApp;
  return {
    user: tg?.initDataUnsafe?.user || null,
    initData: tg?.initData || '',
    initDataUnsafe: tg?.initDataUnsafe || {},
    queryId: tg?.initDataUnsafe?.query_id || null
  };
};

// Отправка данных в Telegram бота
export const sendDataToBot = (data: Record<string, any>) => {
  const tg = window.Telegram?.WebApp;

  if (tg && tg.sendData) {
    // Отправляем данные в формате строки
    tg.sendData(JSON.stringify(data));
    console.log('Данные отправлены в бота:', data);
    return true;
  }

  // Для отладки в браузере
  console.log('Данные для отправки в бота:', data);
  return false;
};