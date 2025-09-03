import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import Login from './src/assets/screens/login';

export default function App() {

  const ContainerApp = styled.SafeAreaView
    flex: 1;
  return (
   <ContainerApp>
        <StatusBar hidden/>
        <Login/>
   </ContainerApp>
  );
}