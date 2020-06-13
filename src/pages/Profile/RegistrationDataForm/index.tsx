import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Header,
  Title,
  Content,
  Label,
  Input,
  SaveButton,
  SaveButtonText,
} from './styles';

const RegistrationDataForm: React.FC = () => {
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
            <Title>Maria Santos</Title>
            <MaterialIcon name="pencil-outline" size={16} color="#f3903d" />
          </Header>
          <Content>
            <Label>E-mail</Label>
            <Input defaultValue="mariasantos@hotmail.com" />
            <Label>RG</Label>
            <Input defaultValue="1212345678" />
            <Label>CPF</Label>
            <Input defaultValue="12345678-12" />
            <Label>Senha atual</Label>
            <Input />
            <Label>Nova senha</Label>
            <Input />
            <Label>Confirmação de senha</Label>
            <Input />

            <SaveButton
              onPress={() => navigation.navigate('SimpleSuccessSplashScreen')}
            >
              <SaveButtonText>Atualizar dados</SaveButtonText>
            </SaveButton>
          </Content>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegistrationDataForm;
