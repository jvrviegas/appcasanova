import React, { useRef } from 'react';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import {
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import SmallInput from '../../components/SmallInput';

import logo from '../../assets/logo.png';
import foto from '../../assets/foto-8.png';

import {
  Container,
  Header,
  HeaderBackground,
  Logo,
  Content,
  AuthButtons,
  SignInButton,
  SignUpButton,
  AuthButtonsText,
  DoubleField,
  SubmitButton,
} from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView keyboardShouldPersistTaps="handled">
        <Container>
          <Header>
            <HeaderBackground source={foto} />
            <Logo source={logo} />
          </Header>

          <Content>
            <AuthButtons>
              <SignInButton onPress={() => navigation.navigate('SignIn')}>
                <AuthButtonsText>ENTRAR</AuthButtonsText>
              </SignInButton>
              <SignUpButton>
                <AuthButtonsText>CADASTRE-SE</AuthButtonsText>
              </SignUpButton>
            </AuthButtons>

            <Form
              ref={formRef}
              onSubmit={() => navigation.navigate('AddPhoneNumber')}
            >
              <Input
                name="name"
                icon="user"
                placeholder="NOME"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />

              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="email"
                icon="mail"
                placeholder="E-MAIL"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />

              <DoubleField>
                <SmallInput
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  name="email"
                  icon="mail"
                  placeholder="RG"
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    passwordInputRef.current?.focus();
                  }}
                />

                <SmallInput
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  name="email"
                  icon="mail"
                  placeholder="CPF"
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    passwordInputRef.current?.focus();
                  }}
                />
              </DoubleField>

              <Input
                ref={passwordInputRef}
                name="password"
                icon="lock"
                placeholder="SENHA"
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />

              <SubmitButton
                onPress={() => navigation.navigate('AddPhoneNumber')}
              >
                CRIAR CONTA
              </SubmitButton>
            </Form>
          </Content>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
