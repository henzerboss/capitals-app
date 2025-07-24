import React, { createContext, ReactNode, useContext, useState } from 'react';
import i18n from '../i18n'; // Наш i18n

// Определяем, как выглядит наш контекст: текущий язык и функция для его смены
type LocaleContextType = {
  locale: string;
  setLocale: (locale: string) => void;
};

// Создаем контекст с начальным значением
const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

// Создаем "Провайдер" - компонент, который будет "раздавать" состояние языка
export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState(i18n.locale.substring(0, 2));

  const setLocale = (newLocale: string) => {
    i18n.locale = newLocale; // Обновляем библиотеку i18n
    setLocaleState(newLocale); // Обновляем наше состояние, что вызовет перерисовку
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

// Создаем кастомный хук для удобного доступа к контексту
export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};