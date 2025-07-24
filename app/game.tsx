import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocale } from '../context/LocaleContext';
import { COUNTRIES, Country } from '../data/countries';
import i18n from '../i18n';

type WrongAnswer = {
  question: Country;
  userAnswer: string;
};

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const GameScreen: React.FC = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  const { locale } = useLocale();
  const insets = useSafeAreaInsets();

  const [questions, setQuestions] = useState<Country[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [textInputValue, setTextInputValue] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [currentOptions, setCurrentOptions] = useState<Country[]>([]);
  const [wrongAnswers, setWrongAnswers] = useState<WrongAnswer[]>([]);
  
  // НОВОЕ: Состояние для статуса ответа (правильно/неправильно)
  const [answerStatus, setAnswerStatus] = useState<'correct' | 'incorrect' | 'idle'>('idle');

  const currentLocale = locale as 'en' | 'ru' | 'es';

  useEffect(() => {
    i18n.locale = locale;
    
    let filteredCountries = COUNTRIES.filter(country => {
      const difficultyMatch = params.difficulty === 'all' || country.difficulty === params.difficulty;
      const continentMatch = params.continent === 'all' || country.continent === params.continent;
      return difficultyMatch && continentMatch;
    });

    if (filteredCountries.length < 4 && params.gameType === 'quiz') {
      Alert.alert("Мало данных", "Для режима викторины нужно минимум 4 страны.", [{ text: "OK", onPress: () => router.back() }]);
      return;
    }

    setQuestions(shuffleArray(filteredCountries).slice(0, 10));
    setScore(0);
    setCurrentQuestionIndex(0);
    setWrongAnswers([]);
  }, [locale]);

  useEffect(() => {
    if (questions.length > 0 && params.gameType === 'quiz') {
      const currentQuestion = questions[currentQuestionIndex];
      if (currentQuestion) {
        const options = shuffleArray([
          currentQuestion,
          ...shuffleArray(COUNTRIES.filter(c => c.id !== currentQuestion.id)).slice(0, 3)
        ]);
        setCurrentOptions(options);
      }
    }
  }, [currentQuestionIndex, questions]);

  const handleExit = () => {
    Alert.alert(
      i18n.t('exitGame.title'),
      i18n.t('exitGame.message'),
      [
        { text: i18n.t('exitGame.cancel'), style: "cancel" },
        { text: i18n.t('exitGame.confirm'), style: "destructive", onPress: () => router.replace('/') }
      ]
    );
  };
  
  const handleAnswer = (answer: string) => {
    if (isAnswered) return;

    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.capital[currentLocale];
    const isCorrect = answer.toLowerCase().trim() === correctAnswer.toLowerCase().trim();

    setIsAnswered(true);
    setSelectedAnswer(answer);
    
    // ИЗМЕНЕНО: Устанавливаем статус ответа
    setAnswerStatus(isCorrect ? 'correct' : 'incorrect');

    let finalWrongAnswers = wrongAnswers;
    if (isCorrect) {
      setScore(prev => prev + 1);
    } else {
      const newWrongAnswer = { question: currentQuestion, userAnswer: answer };
      finalWrongAnswers = [...wrongAnswers, newWrongAnswer];
      setWrongAnswers(finalWrongAnswers);
    }

    setTimeout(() => {
      const nextQuestionIndex = currentQuestionIndex + 1;
      if (nextQuestionIndex < questions.length) {
        setCurrentQuestionIndex(nextQuestionIndex);
        setIsAnswered(false);
        setSelectedAnswer(null);
        setTextInputValue('');
        setAnswerStatus('idle'); // Сбрасываем статус
      } else {
        const finalScore = score + (isCorrect ? 1 : 0);
        router.replace({
          pathname: '/results',
          params: { 
            score: finalScore, 
            total: questions.length,
            wrongAnswers: JSON.stringify(finalWrongAnswers) 
          }
        });
      }
    }, 1200);
  };

  if (questions.length === 0 || !questions[currentQuestionIndex]) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.loadingText}>Загрузка вопросов...</Text>
      </SafeAreaView>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  // ИЗМЕНЕНО: Динамический стиль для кнопки "Ответить"
  const getSubmitButtonStyles = () => {
      if (!isAnswered) return styles.submitButton;
      if (answerStatus === 'correct') return [styles.submitButton, styles.correctAnswer];
      if (answerStatus === 'incorrect') return [styles.submitButton, styles.wrongAnswer];
      return styles.submitButton;
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={styles.innerContainer}>
          <View style={[styles.header, { paddingTop: insets.top }]}>
            <TouchableOpacity onPress={handleExit} style={styles.headerButton}>
              <Ionicons name="close" size={32} color="white" />
            </TouchableOpacity>
            
            <View style={styles.headerTitles}>
                <Text style={styles.headerText}>{i18n.t('score')}: {score}</Text>
                <Text style={styles.headerText}>{currentQuestionIndex + 1} / {questions.length}</Text>
            </View>

            <View style={styles.headerButton} />
          </View>
          
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>
              {i18n.t('question', { country: currentQuestion.country[currentLocale] })}
            </Text>
          </View>
          
          {params.gameType === 'quiz' ? (
            <View style={styles.optionsContainer}>
              {currentOptions.map((option) => {
                const capitalName = option.capital[currentLocale];
                const isCorrectAnswer = capitalName === currentQuestion.capital[currentLocale];
                const isSelectedAnswer = capitalName === selectedAnswer;

                const getButtonStyles = () => {
                  if (!isAnswered) return styles.optionButton;
                  if (isCorrectAnswer) return [styles.optionButton, styles.correctAnswer];
                  if (isSelectedAnswer && !isCorrectAnswer) return [styles.optionButton, styles.wrongAnswer];
                  return styles.optionButton;
                };

                return (
                  <TouchableOpacity 
                    key={option.id} 
                    style={getButtonStyles()}
                    onPress={() => handleAnswer(capitalName)}
                    disabled={isAnswered}
                  >
                    <Text style={styles.optionText}>{capitalName}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : (
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.input}
                placeholder={i18n.t('textInputPlaceholder')}
                placeholderTextColor="#888"
                value={textInputValue}
                onChangeText={setTextInputValue}
                onSubmitEditing={() => handleAnswer(textInputValue)}
                editable={!isAnswered}
              />
              <TouchableOpacity 
                style={getSubmitButtonStyles()} // <-- Применяем динамический стиль
                onPress={() => handleAnswer(textInputValue)}
                disabled={isAnswered}
              >
                <Text style={styles.submitButtonText}>{i18n.t('answerButton')}</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A2E40',
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  loadingText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
    fontFamily: 'Inter_400Regular',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitles: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Inter_700Bold',
    textAlign: 'center',
    marginHorizontal: 15,
  },
  questionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionText: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Inter_700Bold',
  },
  optionsContainer: {
    flex: 2,
    justifyContent: 'space-around',
  },
  optionButton: {
    backgroundColor: '#2E4756',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  optionText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Inter_400Regular',
  },
  textInputContainer: {
    flex: 2,
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Inter_400Regular',
  },
  submitButton: {
    backgroundColor: '#00C49A',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Inter_700Bold',
  },
  correctAnswer: {
    backgroundColor: '#28a745',
  },
  wrongAnswer: {
    backgroundColor: '#dc3545',
  },
  disabledButton: {
      backgroundColor: '#5A5A5A'
  }
});

export default GameScreen;