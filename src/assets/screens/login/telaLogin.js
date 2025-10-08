import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { LoginContainer } from './styles';
import styled from 'styled-components';


export default function Login() {
  const Container = styled.View`
    flex: 1;
    display: flex;
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
    font-family: 'Frankfurter Highlight Std Regular';
    display: flex;
    justify-content: center;
    align-items: center;
    `

  const SubTittle = styled.Text`
    font-size: 20px;
    font-family: 'Frankfurter Highlight Std Regular';
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
  const Npc = styled.Text`
font-size: 14px;
color: #8629B2;
padding-top: 15px;
display: flex;
align-items: center;
padding-bottom: 20px;
`

  const NpcLink = styled.TouchableOpacity`
font-size: 14px;
display: flex;

`

  const NpcLinkText = styled.Text`
font-size: 14px;
text-decoration: underline;
color: #5650FF;
`
  const NpcLinkView = styled.View`
  display: flex;
`

  const LoginTittle = styled.Text`
font-size: 26px;
font-weight: 350;
color: #8629B2 ;
width: 300px;
font-family: 'Frankfurter Highlight Std Regular';
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

  const EasLink = styled.TouchableOpacity`
  margin-top: 10px;
  `

  const EasLinkText = styled.Text`
color:#5650FF;
width: 300px;
  text-decoration: underline;
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
        <NpcLinkView>
          <Npc>Não possui cadastro? <NpcLinkText>Clique aqui!</NpcLinkText></Npc>

        </NpcLinkView>
        <LoginTittle>Login</LoginTittle>
        <Labels>E-mail</Labels>
        <Inputs placeholder='Digite seu e-mail:' />
        <Labels>Senha</Labels>
        <Inputs placeholder='Digite sua senha:' />
        <EnterButton>
          <EnterButtonText>Entrar</EnterButtonText>
        </EnterButton>
        <EasLink>
          <EasLinkText>Esqueci minha senha</EasLinkText>
        </EasLink>
        <FooterImageView>
          <FooterImage source={require('../../images/FooterImage.png')} />
        </FooterImageView>
      </LoginContainer>


    </Container>
  );
}


