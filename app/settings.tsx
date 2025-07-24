import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as StoreReview from 'expo-store-review'; // <-- 1. Импортируем библиотеку
import React, { useEffect } from 'react';
import { Alert, Linking, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocale } from '../context/LocaleContext';
import i18n from '../i18n';

const SettingsScreen: React.FC = () => {
  const router = useRouter();
  const { locale, setLocale } = useLocale();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    i18n.locale = locale;
  }, [locale]);
  
  const handleFeedback = () => {
    Linking.openURL('mailto:henzerboss@gmail.com?subject=Отзыв о приложении "Столицы и Страны"');
  };

  // ИЗМЕНЕНО: Логика кнопки "Оценить приложение"
  const handleRateApp = async () => {
    // Проверяем, доступна ли функция на данном устройстве
    const isAvailable = await StoreReview.isAvailableAsync();
    if (isAvailable) {
      // Вызываем нативное окно для оценки
      StoreReview.requestReview();
    } else {
      // Если функция недоступна (например, в эмуляторе или на старом устройстве),
      // сообщаем об этом пользователю.
      Alert.alert(
        'Недоступно', 
        'Функция оценки недоступна на вашем устройстве.'
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, { paddingTop: insets.top }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.headerButton}>
          <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{i18n.t('settings')}</Text>
        <View style={styles.headerButton} />
      </View>
      
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem} onPress={handleFeedback}>
          <Ionicons name="mail-outline" size={24} color="#D4D4D4" />
          <Text style={styles.menuItemText}>{i18n.t('feedback')}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem} onPress={handleRateApp}>
          <Ionicons name="star-outline" size={24} color="#D4D4D4" />
          <Text style={styles.menuItemText}>{i18n.t('rateApp')}</Text>
        </TouchableOpacity>

        <View style={styles.languageSection}>
            <Text style={styles.menuItemText}>{i18n.t('language')}</Text>
            <View style={styles.languageButtons}>
                <TouchableOpacity onPress={() => setLocale('en')} style={[styles.langButton, locale === 'en' && styles.langButtonActive]}>
                    <Text style={styles.langButtonText}>EN</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setLocale('ru')} style={[styles.langButton, locale === 'ru' && styles.langButtonActive]}>
                    <Text style={styles.langButtonText}>RU</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setLocale('es')} style={[styles.langButton, locale === 'es' && styles.langButtonActive]}>
                    <Text style={styles.langButtonText}>ES</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#1A2E40' 
  },
  header: { 
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerButton: {
    width: 28,
  },
  headerTitle: { 
    textAlign: 'center', 
    color: 'white', 
    fontSize: 22, 
    fontFamily: 'Inter_700Bold',
  },
  menu: { 
    flex: 1, 
    paddingTop: 20 
  },
  menuItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 20, 
    paddingHorizontal: 20, 
    borderBottomWidth: 1, 
    borderBottomColor: '#2E4756' 
  },
  menuItemText: { 
    color: 'white', 
    fontSize: 18, 
    marginLeft: 15, 
    fontFamily: 'Inter_400Regular' 
  },
  languageSection: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingVertical: 20, 
    paddingHorizontal: 20 
  },
  languageButtons: { 
    flexDirection: 'row' 
  },
  langButton: { 
    paddingVertical: 8, 
    paddingHorizontal: 15, 
    borderRadius: 10, 
    marginHorizontal: 5, 
    backgroundColor: '#2E4756' 
  },
  langButtonActive: { 
    backgroundColor: '#00C49A' 
  },
  langButtonText: { 
    color: 'white', 
    fontSize: 16, 
    fontFamily: 'Inter_700Bold' 
  },
});

export default SettingsScreen;