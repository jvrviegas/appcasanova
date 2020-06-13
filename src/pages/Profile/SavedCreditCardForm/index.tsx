import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Header,
  Title,
  Content,
  ActualCreditCard,
  ActualCreditCardText,
  Input,
  DoubleInputs,
  SaveButton,
  SaveButtonText,
} from './styles';

const SavedCreditCardForm: React.FC = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#fff' }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView keyboardShouldPersistTaps="handled">
        <Container>
          <Header>
            <Title>Cartão cadastrado</Title>
          </Header>
          <Content>
            <ActualCreditCard>
              <MaterialIcon name="credit-card" size={30} color="#f3903d" />
              <ActualCreditCardText>MASTERCARD •••• 1234</ActualCreditCardText>
            </ActualCreditCard>

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
            <Input keyboardType="numeric" placeholder="CPF/CNPJ" />
            <SaveButton
              onPress={() => navigation.navigate('SimpleSuccessSplashScreen')}
            >
              <SaveButtonText>Alterar cartão</SaveButtonText>
            </SaveButton>
          </Content>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SavedCreditCardForm;
