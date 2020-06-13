import React from 'react';
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Title,
  Input,
  DoubleInputs,
  AdvanceButton,
  AdvanceButtonText,
} from './styles';

const CreditCardForm: React.FC = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#f3903d' }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView keyboardShouldPersistTaps="handled">
        <Container>
          <Title>Cadastre seu cartão de crédito</Title>

          <Input keyboardType="numeric" placeholder="Número do cartão" />
          <DoubleInputs>
            <Input
              keyboardType="numeric"
              placeholder="Validade"
              style={{ width: '60%' }}
            />
            <Input
              keyboardType="numeric"
              placeholder="CVV"
              style={{ width: '30%' }}
            />
          </DoubleInputs>
          <Input placeholder="Nome do titular" />
          <Input placeholder="CPF/CNPJ" />

          <AdvanceButton
            onPress={() => navigation.navigate('SavedCardSplashScreen')}
          >
            <AdvanceButtonText>SALVAR</AdvanceButtonText>
          </AdvanceButton>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreditCardForm;
