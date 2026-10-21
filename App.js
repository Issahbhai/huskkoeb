import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ShoppingListScreen from './screens/ShoppingListScreen';
import AboutScreen from './screens/AboutScreen';
import PurchasedScreen from './screens/PurchasedScreen';
import { colors } from './styles/GlobalStyle';

// Her opretter jeg navigationen mellem appens sider.
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Forside"
        screenOptions={{ headerTintColor: colors.primary }}
      >
        <Stack.Screen name="Forside" component={HomeScreen} />
        <Stack.Screen name="Indkøbsliste" component={ShoppingListScreen} />
        <Stack.Screen name="Købte varer" component={PurchasedScreen} />
        <Stack.Screen name="Om appen" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
