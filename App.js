import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, Image } from 'react-native';
// import Login from './src/assets/screens/login';

import { LoginContainer } from './src/assets/screens/login/styles';
import styled from 'styled-components';

export default function App() {

  const Tittle = styled.Text`
  font-size: 30px;
  font-weight: bold;
  font-family: monospace;
  display: flex;
  justify-content: center;
  align-items: center;
  `

  const Container = styled.View`
  flex: 1;
  background-color: #FFE8FB;
  padding-top: 40;
  `


  return (
    <Container>
      <StatusBar hidden />
      <LoginContainer>

        <View>
          <Image source={require('./src/assets/images/Sparkles.png')} />
        </View>
     
        <Tittle>Parkify</Tittle>
      </LoginContainer>
    </Container>
  );
}