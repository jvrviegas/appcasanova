import React, { useRef, useCallback, useState } from 'react';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import {
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Platform,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/auth';

import Input from '../../components/Input';

import logo from '../../assets/logo.png';
import foto from '../../assets/foto-8.png';

import getValidationErrors from '../../utils/getValidationErros';

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
  ForgotPasswordButton,
  ForgotPasswordButtonText,
  SubmitButton,
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (formData: SignInFormData) => {
      try {
        setLoading(true);
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(formData, {
          abortEarly: false,
        });

        await signIn({
          email: formData.email,
          password: formData.password,
        });

        setLoading(false);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          Alert.alert(errors.email || errors.password);

          return;
        }
        console.log('error');
        setLoading(false);
      }
    },
    [signIn],
  );

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
              <SignInButton>
                <AuthButtonsText>ENTRAR</AuthButtonsText>
              </SignInButton>
              <SignUpButton onPress={() => navigation.navigate('SignUp')}>
                <AuthButtonsText>CADASTRE-SE</AuthButtonsText>
              </SignUpButton>
            </AuthButtons>

            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="email"
                icon="mail"
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />

              <Input
                ref={passwordInputRef}
                name="password"
                icon="lock"
                placeholder="Senha"
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />

              <ForgotPasswordButton onPress={() => {}}>
                <ForgotPasswordButtonText>
                  Esqueci a senha
                </ForgotPasswordButtonText>
              </ForgotPasswordButton>

              <SubmitButton onPress={() => formRef.current?.submitForm()}>
                ENTRAR
              </SubmitButton>
            </Form>
          </Content>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
