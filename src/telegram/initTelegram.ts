// Telegram SDK автоматически добавляется в window

export const initTelegramWebApp = () => {
  const tg = window.Telegram?.WebApp;

  if (!tg) {
    console.warn('Telegram WebApp не обнаружен. Запущено в браузере.');
    return null;
  }

  console.log('Telegram WebApp инициализирован');
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

export const sendDataToBot = (data: any) => {
  const tg = window.Telegram?.WebApp;

  // ОТПРАВЛЯЕМ ДАННЫЕ ТОЛЬКО ЧЕРЕЗ TELEGRAM
  if (tg && tg.sendData) {
    tg.sendData(JSON.stringify(data));
    console.log('✅ Данные отправлены через Telegram WebApp');
    return true;
  }

  // ЕСЛИ НЕ В TELEGRAM (браузер) - не отправляем вообще
  console.warn('❌ Запущено вне Telegram. Данные не отправлены:', data);
  return false;
};