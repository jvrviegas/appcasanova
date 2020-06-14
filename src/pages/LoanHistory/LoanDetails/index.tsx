import React, { useMemo } from 'react';
import { ScrollView, View, ActivityIndicator, Text } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FAIcon from 'react-native-vector-icons/FontAwesome';

import { useQuery } from '@apollo/react-hooks';
import { LOAN_DETAILS } from '../../../services/gqlqueries';
import formatLoan from '../../../utils/formatLoan';

import {
  Container,
  Title,
  LoanInfo,
  CardDetails,
  Label,
  Value,
  ValidInfoTexts,
  ValidInfo,
  Actions,
  ActionButton,
} from './styles';

const LoanDetails: React.FC = ({ route }: any) => {
  const { id } = route.params;

  const { data, loading, error } = useQuery(LOAN_DETAILS, {
    variables: { id },
  });

  const formattedLoan = useMemo(() => {
    if (data) {
      return formatLoan(data.solicitacaoEmprestimo);
    }
  }, [data]);

  if (error) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>{error.message}</Text>
      </View>
    );
  } else {
    return (
      <>
        {loading ? (
          <View
            style={{
              flex: 1,
              backgroundColor: '#f3903d',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ActivityIndicator size="large" color="#fff" />
          </View>
        ) : (
          <ScrollView
            keyboardShouldPersistTaps="handled"
            style={{ backgroundColor: '#f3903d' }}
          >
            <Container>
              <Title>Detalhes do empréstimo</Title>

              <LoanInfo>
                <Label>Data</Label>
                <Value>{formattedLoan?.date}</Value>
                <Label>Valor do empréstimo</Label>
                <Value>{formattedLoan?.requestedAmount}</Value>
                <Label>Total a ser pago</Label>
                <Value>{formattedLoan?.totalDue}</Value>
                <Label>Total Parcelado</Label>
                <Value>{`${formattedLoan?.installments}x de ${formattedLoan?.installmentValue}`}</Value>
              </LoanInfo>

              <CardDetails>
                <Label>Titular</Label>
                <Value>{formattedLoan?.client.name}</Value>
                <Label>CPF/CNPJ</Label>
                <Value>{formattedLoan?.client.cpf}</Value>
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
        )}
      </>
    );
  }
};

export default LoanDetails;
