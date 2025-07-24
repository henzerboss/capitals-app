import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Импортируем наши экраны (мы их создадим в следующем шаге)
import HomeScreen from './screens/HomeScreen';
// import GameScreen from './screens/GameScreen'; // Раскомментируем позже

// Создаем стэк навигатор
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Первый экран в стэке - HomeScreen */}
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          // Скрываем заголовок экрана, так как мы сделаем свой
          options={{ headerShown: false }} 
        />
        {/* <Stack.Screen name="Game" component={GameScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}