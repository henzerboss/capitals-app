import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { LocaleProvider } from '../context/LocaleContext';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  
  return (
    <LocaleProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="game" />
        <Stack.Screen name="results" />
        <Stack.Screen name="settings" />
        <Stack.Screen name="handbook" />
      </Stack>
    </LocaleProvider>
  );
}