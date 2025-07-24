import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useLocale } from '../context/LocaleContext';
import { COUNTRIES } from '../data/countries';
import i18n from '../i18n';

type OptionButtonProps = {
  title: string;
  options: { value: string; label: string }[];
  selected: string;
  onSelect: (value: string) => void;
  disabledOptions?: string[];
};

const OptionButton: React.FC<OptionButtonProps> = ({ title, options, selected, onSelect, disabledOptions = [] }) => (
  <View style={styles.optionContainer}>
    <Text style={styles.optionTitle}>{title}</Text>
    <View style={styles.buttonGroup}>
      {options.map((option) => {
        const isDisabled = disabledOptions.includes(option.value);
        return (
          <TouchableOpacity
            key={option.value}
            style={[
              styles.button,
              selected === option.value && styles.buttonSelected,
              isDisabled && styles.buttonDisabled,
            ]}
            onPress={() => onSelect(option.value)}
            disabled={isDisabled}
          >
            <Text style={[styles.buttonText, selected === option.value && styles.buttonTextSelected, isDisabled && styles.buttonTextDisabled]}>
              {option.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  </View>
);

const HomeScreen: React.FC = () => {
  const { locale } = useLocale();
  const [gameType, setGameType] = useState('quiz');
  const [difficulty, setDifficulty] = useState('easy');
  const [continent, setContinent] = useState('all');
  const [disabledDifficulties, setDisabledDifficulties] = useState<string[]>([]);

  useEffect(() => {
    i18n.locale = locale;
  }, [locale]);

  useEffect(() => {
    const minCountriesRequired = gameType === 'quiz' ? 4 : 1;
    const availableDifficulties: string[] = ['easy', 'medium', 'hard'];
    const currentlyDisabled: string[] = [];

    availableDifficulties.forEach(diff => {
      const countryCount = COUNTRIES.filter(country => 
        (continent === 'all' || country.continent === continent) && country.difficulty === diff
      ).length;
      
      if (countryCount < minCountriesRequired) {
        currentlyDisabled.push(diff);
      }
    });

    setDisabledDifficulties(currentlyDisabled);

    if (currentlyDisabled.includes(difficulty)) {
      const firstAvailable = availableDifficulties.find(d => !currentlyDisabled.includes(d));
      if (firstAvailable) {
        setDifficulty(firstAvailable);
      } else {
        setDifficulty('easy');
      }
    }
  }, [continent, gameType]);

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
    { value: 'Africa', label: i18n.t('africa') },
    { value: 'North America', label: i18n.t('northAmerica') },
    { value: 'South America', label: i18n.t('southAmerica') },
    { value: 'Oceania', label: i18n.t('oceania') },
  ];
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
        <View style={styles.headerIcons}>
          <Link href="/settings" asChild>
            <TouchableOpacity>
              <Ionicons name="settings-outline" size={28} color="white" />
            </TouchableOpacity>
          </Link>
        </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>{i18n.t('appName')}</Text>

        <View style={styles.optionsWrapper}>
          <OptionButton title={i18n.t('gameType')} options={gameTypeOptions} selected={gameType} onSelect={setGameType} />
          <OptionButton 
            title={i18n.t('difficulty')} 
            options={difficultyOptions} 
            selected={difficulty} 
            onSelect={setDifficulty}
            disabledOptions={disabledDifficulties}
          />
          <OptionButton title={i18n.t('continent')} options={continentOptions} selected={continent} onSelect={setContinent} />
        </View>

        {/* ИЗМЕНЕНО: Новая верстка для нижних кнопок */}
        <View style={styles.footerButtonsContainer}>
            <Link href="/handbook" asChild>
                <TouchableOpacity style={styles.handbookButton}>
                    <Ionicons name="school-outline" size={30} color="white" />
                </TouchableOpacity>
            </Link>

            <Link href={{ pathname: "/game", params: { gameType, difficulty, continent } }} asChild>
                <TouchableOpacity style={styles.startButton}>
                    <Text style={styles.startButtonText}>{i18n.t('startGame')}</Text>
                </TouchableOpacity>
            </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    backgroundColor: '#1A2E40' 
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 40,
  },
  headerIcons: { 
    position: 'absolute', 
    top: 60, 
    right: 20, 
    zIndex: 1,
  },
  optionsWrapper: {
    paddingTop: 60,
  },
  title: { 
    fontSize: 23, 
    fontFamily: 'Inter_700Bold', 
    color: '#FFFFFF', 
    textAlign: 'center',
    top: 15,
  },
  optionContainer: { 
    marginBottom: 25 
  },
  optionTitle: { 
    fontSize: 18, 
    color: '#D4D4D4', 
    marginBottom: 15, 
    textAlign: 'center', 
    fontFamily: 'Inter_400Regular' 
  },
  buttonGroup: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    flexWrap: 'wrap' 
  },
  button: { 
    backgroundColor: '#2E4756', 
    paddingVertical: 10, 
    paddingHorizontal: 12, 
    borderRadius: 20, 
    margin: 5 
  },
  buttonSelected: { 
    backgroundColor: '#00C49A' 
  },
  buttonDisabled: {
    backgroundColor: '#3a3a3a',
    opacity: 0.6,
  },
  buttonText: { 
    color: '#FFFFFF', 
    fontSize: 16, 
    fontFamily: 'Inter_400Regular' 
  },
  buttonTextSelected: { 
    fontFamily: 'Inter_700Bold' 
  },
  buttonTextDisabled: {
    color: '#999',
  },
  // ИЗМЕНЕНО: Стили для нижних кнопок
  footerButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  handbookButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(0, 196, 154, 0.3)', // Полупрозрачный зеленый
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  startButton: { 
    backgroundColor: '#F25C54', 
    paddingVertical: 15, 
    paddingHorizontal: 30, 
    borderRadius: 30, 
    flex: 1, // Занимает оставшееся место
    alignItems: 'center',
  },
  startButtonText: { 
    color: '#FFFFFF', 
    fontSize: 22, 
    fontFamily: 'Inter_700Bold' 
  },
});

export default HomeScreen;