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
    <Container>
      <Title>Valide seu número</Title>

      <DoubleInputs>
        <Input
          keyboardType="numeric"
          placeholder="+55"
          style={{ width: '20%', textAlign: 'center' }}
        />
        <Input
          keyboardType="numeric"
          placeholder="Seu número"
          style={{ width: '75%' }}
        />
      </DoubleInputs>

      <AdvanceButton onPress={() => navigation.navigate('ValidatePhoneNumber')}>
        <AdvanceButtonText>AVANÇAR</AdvanceButtonText>
      </AdvanceButton>
    </Container>
  );
};

export default CreditCardForm;
