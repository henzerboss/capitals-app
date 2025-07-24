import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocale } from '../context/LocaleContext';
import { COUNTRIES } from '../data/countries';
import i18n from '../i18n';

// ИЗМЕНЕНО: Структура для континентов стала более надежной.
// name: используется для фильтрации данных
// key: используется для получения перевода из i18n
const continents = [
  { name: 'all', key: 'all' },
  { name: 'Europe', key: 'europe' },
  { name: 'Asia', key: 'asia' },
  { name: 'Africa', key: 'africa' },
  { name: 'North America', key: 'northamerica' },
  { name: 'South America', key: 'southamerica' },
  { name: 'Oceania', key: 'oceania' },
];

const HandbookScreen: React.FC = () => {
  const router = useRouter();
  const { locale } = useLocale();
  const insets = useSafeAreaInsets();
  const [selectedContinent, setSelectedContinent] = useState('all');

  const currentLocale = locale as 'en' | 'ru' | 'es';

  const filteredCountries = useMemo(() => {
    if (selectedContinent === 'all') {
      return COUNTRIES;
    }
    return COUNTRIES.filter(country => country.continent === selectedContinent);
  }, [selectedContinent]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, { paddingTop: insets.top }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.headerButton}>
          <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{i18n.t('handbook')}</Text>
        <View style={styles.headerButton} />
      </View>

      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterContainer}>
          {continents.map(continent => (
            <TouchableOpacity
              key={continent.key}
              style={[styles.filterButton, selectedContinent === continent.name && styles.filterButtonActive]}
              onPress={() => setSelectedContinent(continent.name)}
            >
              <Text style={styles.filterButtonText}>
                {/* ИЗМЕНЕНО: Теперь мы используем надежный ключ */}
                {i18n.t(continent.key)}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={filteredCountries}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.countryText}>{item.country[currentLocale]}</Text>
            <Text style={styles.capitalText}>{item.capital[currentLocale]}</Text>
          </View>
        )}
      />
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
    paddingBottom: 10,
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
  filterContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  filterButton: {
    backgroundColor: '#2E4756',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginRight: 10,
  },
  filterButtonActive: {
    backgroundColor: '#00C49A',
  },
  filterButtonText: {
    color: 'white',
    fontFamily: 'Inter_700Bold',
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#2E4756',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  countryText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Inter_400Regular',
    flex: 1,
    marginRight: 10,
  },
  capitalText: {
    color: '#D4D4D4',
    fontSize: 18,
    fontFamily: 'Inter_700Bold',
  },
});

export default HandbookScreen;