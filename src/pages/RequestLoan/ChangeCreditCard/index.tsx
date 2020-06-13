import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Title,
  Input,
  DoubleInputs,
  AdvanceButton,
  AdvanceButtonText,
  CreditCardOption,
  Label,
  CreditCard,
  CreditCardText,
} from './styles';

const ChangeCreditCard: React.FC = () => {
  const [selected, setSelected] = useState(false);
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

          <CreditCardOption onPress={() => setSelected(!selected)}>
            <CreditCard>
              <Label>Usar cartão cadastrado</Label>
              <CreditCardText>MASTERCARD •••• 1234</CreditCardText>
            </CreditCard>
            {selected ? (
              <MaterialIcon name="radiobox-marked" size={40} color="#fff" />
            ) : (
              <MaterialIcon name="radiobox-blank" size={40} color="#fff" />
            )}
          </CreditCardOption>

          <AdvanceButton
            onPress={() => navigation.push('SavedCardSplashScreen')}
          >
            <AdvanceButtonText>SALVAR</AdvanceButtonText>
          </AdvanceButton>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ChangeCreditCard;
