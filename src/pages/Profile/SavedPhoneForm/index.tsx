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

const SavedPhoneForm: React.FC = () => {
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
            <Title>Telefone</Title>
          </Header>
          <Content>
            <ActualCreditCard>
              <MaterialIcon name="cellphone" size={30} color="#f3903d" />
              <ActualCreditCardText>71 91234-5678</ActualCreditCardText>
            </ActualCreditCard>

            <Input keyboardType="numeric" placeholder="Novo número" />
            <Input keyboardType="numeric" placeholder="Confirmar número" />

            <SaveButton
              onPress={() => navigation.navigate('ValidatePhoneNumber')}
            >
              <SaveButtonText>Validar telefone</SaveButtonText>
            </SaveButton>
          </Content>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SavedPhoneForm;
