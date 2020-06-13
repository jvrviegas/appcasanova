import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Title,
  LoanDetails,
  CardDetails,
  Label,
  Value,
  ChangeCreditCard,
  ChangeCreditCardText,
  ChangeCreditCardButton,
  ValidInfoTexts,
  ValidInfo,
  FloatingView,
  ConfirmLoanButton,
  ConfirmLoanButtonText,
} from './styles';

const ConfirmLoan: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{ backgroundColor: '#f3903d' }}
      >
        <Container>
          <Title>Detalhes da solicitação do empréstimo</Title>

          <LoanDetails>
            <Label>Valor do empréstimo</Label>
            <Value>R$ 500,00</Value>
            <Label>Total a ser pago</Label>
            <Value>R$ 750,00</Value>
            <Label>Total Parcelado</Label>
            <Value>12x de R$ 62,50</Value>
          </LoanDetails>

          <CardDetails>
            <Label>Titular</Label>
            <Value>Maria Santos</Value>
            <Label>CPF/CNPJ</Label>
            <Value>123456789-12</Value>
            <Label>Número do cartão</Label>
            <Value>1234 5555 6666 6789</Value>
            <ValidInfo>
              <ValidInfoTexts>
                <Label>Validade</Label>
                <Value>10/26</Value>
              </ValidInfoTexts>
              <ValidInfoTexts>
                <Label>CVV</Label>
                <Value>123</Value>
              </ValidInfoTexts>
            </ValidInfo>
          </CardDetails>

          <ChangeCreditCard>
            <ChangeCreditCardText>
              Alterar cartão de crédito
            </ChangeCreditCardText>
            <ChangeCreditCardButton
              onPress={() => navigation.navigate('ChangeCreditCard')}
            >
              <MaterialIcon name="cached" size={40} color="#fff" />
            </ChangeCreditCardButton>
          </ChangeCreditCard>
        </Container>
      </ScrollView>
      <FloatingView>
        <ConfirmLoanButton
          onPress={() => navigation.navigate('SuccessSplashScreen')}
        >
          <ConfirmLoanButtonText>Confirmar solicitação</ConfirmLoanButtonText>
        </ConfirmLoanButton>
      </FloatingView>
    </>
  );
};

export default ConfirmLoan;
