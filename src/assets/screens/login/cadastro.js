import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
// import Login from './src/assets/screens/login';
import { LoginContainer } from './styles';
import styled from 'styled-components';

export default function Cadastro() {

  const Container = styled.View`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFE8FB;
  
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
  font-family: './src/assets/fonts/ParkifyFonts';
  
  `

  const SubTittle = styled.Text`
  font-size: 20px;
  `

  const Labels = styled.Text`
font-size: 14px;
width: 300px;
display: flex;
align-items: center;
justify-content: start;
margin-top: 10px;
color: #8629B2;
font-weight: 900;
`

  const Inputs = styled.TextInput`
width: 300px;
height: 52px;
margin-top: 10px;
padding: 10px;
border-radius: 10px;
background-color: #fff;
display: flex;
align-items: center;
justify-content: center;

`
  const Jpc = styled.Text`
font-size: 14px;
color: #8629B2;
padding-top: 30px;
display: flex;
align-items: center;
padding-bottom: 20px;
`

  const JpcLink = styled.TouchableOpacity`
font-size: 14px;
display: flex;

`

  const JpcLinkText = styled.Text`
font-size: 14px;
text-decoration: underline;
color: #5650FF;
`
  const JpcLinkView = styled.View`
  display: flex;
`

  const LoginTittle = styled.Text`
font-size: 26px;
font-weight: 350;
color: #8629B2 ;
width: 300px;
`

  const EnterButton = styled.TouchableOpacity`
width: 300px;
height: 55px;
background-color: #D979FF;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
margin-top: 20px;

`

  const EnterButtonText = styled.Text`
color: #fff;
font-size: 18px;
font-weight: bold;
  `

  const FooterImageView = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;

  `

  const FooterImage = styled.Image`
  width: 300px;
  height: 270px;
  margin-top: 30px;
  
`




  return (
    <Container>
      <StatusBar hidden />

      <LoginContainer>
     <SparkleImage source={require('../../images/Sparkles.png')} />
        <Tittle>Parkify</Tittle>
        <SubTittle>Estacionamento 24H</SubTittle>
        <JpcLinkView>
          <Jpc>Já possui cadastro? <JpcLinkText>Fazer login</JpcLinkText></Jpc>                      
          
        </JpcLinkView>
        <LoginTittle>Cadastro</LoginTittle>
            <Labels>Nome</Labels>
        <Inputs placeholder='Digite seu nome:' />
        <Labels>E-mail</Labels>
        <Inputs placeholder='Digite seu e-mail:' />
        <Labels>Senha</Labels>
        <Inputs placeholder='digite sua senha:' />
        <EnterButton>
          <EnterButtonText>Entrar</EnterButtonText>
        </EnterButton>

        <FooterImageView>
          <FooterImage source={require('../../images/FooterImage.png')} />
        </FooterImageView>
      </LoginContainer>


    </Container>
  );
}