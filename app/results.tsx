import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useLocale } from '../context/LocaleContext';
import { Country } from '../data/countries';
import i18n from '../i18n';

type WrongAnswerItem = {
  question: Country;
  userAnswer: string;
};

const ResultsScreen: React.FC = () => {
  const router = useRouter();
  const { score, total, wrongAnswers: wrongAnswersJSON } = useLocalSearchParams();
  const { locale } = useLocale();

  useEffect(() => {
    i18n.locale = locale;
  }, [locale]);

  const wrongAnswers: WrongAnswerItem[] = React.useMemo(() => {
    try {
      return typeof wrongAnswersJSON === 'string' ? JSON.parse(wrongAnswersJSON) : [];
    } catch (e) {
      console.error("Failed to parse wrong answers:", e);
      return [];
    }
  }, [wrongAnswersJSON]);

  const currentLocale = locale as 'en' | 'ru' | 'es';
  const scoreAsNumber = Number(score);
  const totalAsNumber = Number(total);
  const percentage = totalAsNumber > 0 ? Math.round((scoreAsNumber / totalAsNumber) * 100) : 0;

  let message = i18n.t('results.great');
  if (percentage < 50) {
    message = i18n.t('results.bad');
  } else if (percentage < 80) {
    message = i18n.t('results.good');
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.summaryContainer}>
        <Text style={styles.title}>{i18n.t('results.title')}</Text>
        <Text style={styles.scoreText}>
          {i18n.t('results.score', { score: scoreAsNumber, total: totalAsNumber })}
        </Text>
        <Text style={styles.percentageText}>({percentage}%)</Text>
        <Text style={styles.messageText}>{message}</Text>
      </View>

      {wrongAnswers.length > 0 && (
        <>
          <Text style={styles.errorsTitle}>{i18n.t('results.errorsTitle')}</Text>
          <FlatList
            data={wrongAnswers}
            style={styles.errorList}
            contentContainerStyle={styles.errorListContent}
            keyExtractor={(item) => item.question.id}
            renderItem={({ item }) => (
              <View style={styles.errorItem}>
                <Text style={styles.errorQuestion}>{item.question.country[currentLocale]}</Text>
                <Text style={styles.errorAnswerWrong}>{i18n.t('results.yourAnswer')}: {item.userAnswer}</Text>
                <Text style={styles.errorAnswerCorrect}>{i18n.t('results.correctAnswer')}: {item.question.capital[currentLocale]}</Text>
              </View>
            )}
          />
        </>
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => router.replace('/')}>
          <Text style={styles.buttonText}>{i18n.t('results.button')}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#1A2E40', 
  },
  summaryContainer: { 
    alignItems: 'center', 
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },
  title: { fontSize: 36, fontFamily: 'Inter_700Bold', color: '#FFFFFF', marginBottom: 20 },
  scoreText: { fontSize: 28, color: '#FFFFFF', marginBottom: 10, fontFamily: 'Inter_400Regular' },
  percentageText: { fontSize: 22, color: '#00C49A', marginBottom: 20, fontFamily: 'Inter_700Bold' },
  messageText: { fontSize: 18, color: '#D4D4D4', marginBottom: 20, fontFamily: 'Inter_400Regular' },
  errorsTitle: { 
    color: 'white', 
    fontSize: 22, 
    fontFamily: 'Inter_700Bold', 
    marginBottom: 10, 
    paddingHorizontal: 20 
  },
  errorList: { 
    flex: 1, 
  },
  errorListContent: {
    paddingHorizontal: 20,
  },
  errorItem: { 
    backgroundColor: '#2E4756', 
    borderRadius: 10, 
    padding: 15, 
    marginBottom: 10, 
  },
  errorQuestion: { color: 'white', fontSize: 18, fontFamily: 'Inter_700Bold', marginBottom: 5 },
  errorAnswerWrong: { color: '#F25C54', fontSize: 16, fontFamily: 'Inter_400Regular' },
  errorAnswerCorrect: { color: '#00C49A', fontSize: 16, fontFamily: 'Inter_400Regular' },
  buttonContainer: {
    padding: 20,
  },
  button: { 
    backgroundColor: '#F25C54', 
    paddingVertical: 15, 
    borderRadius: 30,
    alignItems: 'center', 
  },
  buttonText: { color: '#FFFFFF', fontSize: 20, fontFamily: 'Inter_700Bold' },
});

export default ResultsScreen;