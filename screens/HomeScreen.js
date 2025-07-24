import { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import i18n from '../i18n'; // Наш настроенный i18n

// Простой компонент для кнопок-переключателей
const OptionButton = ({ title, options, selected, onSelect }) => (
  <View style={styles.optionContainer}>
    <Text style={styles.optionTitle}>{title}</Text>
    <View style={styles.buttonGroup}>
      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          style={[styles.button, selected === option.value && styles.buttonSelected]}
          onPress={() => onSelect(option.value)}
        >
          <Text style={[styles.buttonText, selected === option.value && styles.buttonTextSelected]}>
            {option.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

const HomeScreen = ({ navigation }) => {
  // Состояния для хранения выбора пользователя
  const [gameType, setGameType] = useState('quiz');
  const [difficulty, setDifficulty] = useState('easy');
  const [continent, setContinent] = useState('all');
  
  // Язык можно менять прямо во время работы приложения
  // Для простоты, пока оставим один язык, который определился автоматически
  // const [locale, setLocale] = useState(i18n.locale); 
  // i18n.locale = locale;

  // Опции для наших переключателей
  const gameTypeOptions = [
    { value: 'quiz', label: i18n.t('quiz') },
    { value: 'textInput', label: i18n.t('textInput') },
  ];
  const difficultyOptions = [
    { value: 'easy', label: i18n.t('easy') },
    { value: 'medium', label: i18n.t('medium') },
    { value: 'hard', label: i18n.t('hard') },
  ];
  const continentOptions = [
    { value: 'all', label: i18n.t('all') },
    { value: 'Europe', label: i18n.t('europe') },
    { value: 'Asia', label: i18n.t('asia') },
  ];

  const handleStartGame = () => {
    // Переход на экран игры с передачей выбранных параметров
    // navigation.navigate('Game', { gameType, difficulty, continent });
    alert(`Начинаем игру! Тип: ${gameType}, Сложность: ${difficulty}, Континент: ${continent}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Text style={styles.title}>{i18n.t('appName')}</Text>

        <OptionButton
          title={i18n.t('gameType')}
          options={gameTypeOptions}
          selected={gameType}
          onSelect={setGameType}
        />
        <OptionButton
          title={i18n.t('difficulty')}
          options={difficultyOptions}
          selected={difficulty}
          onSelect={setDifficulty}
        />
        <OptionButton
          title={i18n.t('continent')}
          options={continentOptions}
          selected={continent}
          onSelect={setContinent}
        />

        <TouchableOpacity style={styles.startButton} onPress={handleStartGame}>
          <Text style={styles.startButtonText}>{i18n.t('startGame')}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Стили. Вы можете экспериментировать с цветами, чтобы сделать красиво.
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1A2E40', // Темно-синий фон
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 60,
  },
  optionContainer: {
    width: '100%',
    marginBottom: 30,
  },
  optionTitle: {
    fontSize: 18,
    color: '#D4D4D4',
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#2E4756', // Цвет неактивной кнопки
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonSelected: {
    backgroundColor: '#00C49A', // Яркий акцентный цвет для выбраной
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  buttonTextSelected: {
    fontWeight: 'bold',
  },
  startButton: {
    backgroundColor: '#F25C54', // Яркая кнопка старта
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 30,
    marginTop: 40,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default HomeScreen;