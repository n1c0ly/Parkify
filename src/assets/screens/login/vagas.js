import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { LoginContainer } from './styles';
import styled from 'styled-components';

export default function Vagas() {

    const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: start;
    background-color: #FFE8FB;
    padding-top: 30px;
    `

    const SparkleImage = styled.Image`
  width: 50px;
  height: 50px;
  display: flex;
  margin-right: auto;
  `

    const Tittle = styled.Text`
  font-size: 48px;
  font-weight: bold;
  margin-top: -50px;
  font-family: monospace;
  display: flex;
  justify-content: center;
  align-items: center;
  `

    //

    return (
        <Container>
            <SparkleImage source={require('../../images/Sparkles.png')} />
            <Tittle>Vagas</Tittle>
        </Container>
    );



}
