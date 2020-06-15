import React from 'react';
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import DropdownPicker from '../../../components/DropdownPicker';

import {
  Container,
  Title,
  LoanValue,
  Label,
  AmountInputs,
  AmountInput,
  AdvanceButton,
  AdvanceButtonText,
} from './styles';

const RequestLoan: React.FC = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#f3903d' }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView keyboardShouldPersistTaps="handled">
        <Container>
          <Title>Solicite seu empréstimo</Title>

          <LoanValue placeholder="Valor (R$)" />
          <DropdownPicker />

          <AmountInputs>
            <Label>Total a ser pago (R$)</Label>
            <AmountInput keyboardType="numeric" />

            <Label>Valor Parcelado (R$)</Label>
            <AmountInput keyboardType="numeric" />
          </AmountInputs>

          <AdvanceButton onPress={() => navigation.navigate('CreditCardForm')}>
            <AdvanceButtonText>AVANÇAR</AdvanceButtonText>
          </AdvanceButton>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RequestLoan;
