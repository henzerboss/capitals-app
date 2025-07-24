import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';

// Импортируем наши файлы с переводами
import en from './locales/en.json';
import es from './locales/es.json';
import ru from './locales/ru.json';

// Создаем экземпляр I18n
const i18n = new I18n({
  en,
  ru,
  es,
});

// Устанавливаем язык по умолчанию из настроек телефона
i18n.locale = Localization.getLocales()[0].languageCode;

// Включаем fallback, чтобы если перевод отсутствует на текущем языке,
// использовался английский
i18n.enableFallback = true;

export default i18n;