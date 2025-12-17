import React, { useEffect, useState, createContext, useContext } from 'react';
import { initTelegramWebApp, getTelegramUser, TelegramUser } from '../telegram/initTelegram';

interface TelegramContextType {
  isTelegram: boolean;
  user: TelegramUser | null;
  webApp: any | null;
}

const TelegramContext = createContext<TelegramContextType>({
  isTelegram: false,
  user: null,
  webApp: null
});

export const useTelegram = () => useContext(TelegramContext);

interface TelegramProviderProps {
  children: React.ReactNode;
}

export const TelegramProvider: React.FC<TelegramProviderProps> = ({ children }) => {
  const [isTelegram, setIsTelegram] = useState(false);
  const [user, setUser] = useState<TelegramUser | null>(null);
  const [webApp, setWebApp] = useState<any>(null);

  useEffect(() => {
    const webAppInstance = initTelegramWebApp();

    if (webAppInstance) {
      setIsTelegram(true);
      setWebApp(webAppInstance);
      setUser(getTelegramUser());

      webAppInstance.onEvent('themeChanged', () => {
        document.documentElement.style.setProperty('--tg-theme-bg-color', webAppInstance.themeParams.bg_color);
        document.documentElement.style.setProperty('--tg-theme-text-color', webAppInstance.themeParams.text_color);
      });

      webAppInstance.onEvent('viewportChanged', () => {
        webAppInstance.expand();
      });
    }
  }, []);

  return (
    <TelegramContext.Provider value={{ isTelegram, user, webApp }}>
      {children}
    </TelegramContext.Provider>
  );
};