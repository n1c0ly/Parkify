import { SafeAreaView } from "react-native-safe-area-context";
import Cadastro from "./src/assets/screens/login/cadastro";
import Login from "./src/assets/screens/login/telaLogin";
import Vagas from "./src/assets/screens/login/vagas";
import Cep from "./src/assets/screens/cep/index";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Log',
  screenOptions: {headerShown: false},
  screens: {
    Log: Cep,
    Cad: Cadastro,
    Est: Vagas
  },

})

const Navigation = createStaticNavigation(RootStack)

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden></StatusBar>
      <Navigation />
    </SafeAreaView>
    // <Login/>
    // <Cadastro/>
    // <Vagas/>

  );

}