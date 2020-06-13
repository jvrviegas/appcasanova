import React from 'react';
import { ScrollView } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FAIcon from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  Title,
  LoanDetails,
  CardDetails,
  Label,
  Value,
  ValidInfoTexts,
  ValidInfo,
  Actions,
  ActionButton,
} from './styles';

const ConfirmLoan: React.FC = () => {
  return (
    <>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{ backgroundColor: '#f3903d' }}
      >
        <Container>
          <Title>Detalhes do empréstimo</Title>

          <LoanDetails>
            <Label>Data</Label>
            <Value>10/11/2019</Value>
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

          <Actions>
            <ActionButton>
              <FeatherIcon name="download" size={36} color="#fff" />
            </ActionButton>
            <ActionButton>
              <FAIcon name="share-alt" size={36} color="#fff" />
            </ActionButton>
          </Actions>
        </Container>
      </ScrollView>
    </>
  );
};

export default ConfirmLoan;
