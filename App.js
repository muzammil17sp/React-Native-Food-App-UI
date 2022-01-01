import { useFonts } from 'expo-font';
import Navigation from './navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar"
import { StateProvider } from "./context/StateProvider"
import reducer, { initialState } from "./context/reducer"
export default function App() {
  const [loaded] = useFonts({
    "Poppins": require("./assets/fonts/regular.ttf"),
    "Semibold" : require("./assets/fonts/semiBold.ttf")
  });

  if (!loaded) {
    return null;
  }
  return (
    <>
      <StatusBar style="dark"  />
        <NavigationContainer>
      <StateProvider initialState={initialState} reducer={reducer}>
          <Navigation />
      </StateProvider>
        </NavigationContainer>
    </>
  );
}

