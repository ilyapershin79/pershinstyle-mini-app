// Способ 1: Попробуем импорт без init, так как SDK может сам автоматически инициализироваться
export const initTelegramWebApp = () => {
  // Не вызываем init(), так как он может быть вызван автоматически
  // или пакет экспортируется по-другому

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

  // Расширяем на весь экран
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