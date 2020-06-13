import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Header,
  Title,
  Subtitle,
  Input,
  IconButton,
  IconButtonText,
} from './styles';

const CreditCardForm: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SimpleSuccessSplashScreen');
    }, 3000);
  }, [navigation]);

  return (
    <Container>
      <Header>
        <Title>Validar +55 71 91234-5678</Title>
        <Subtitle>Enviamos um código</Subtitle>
        <Subtitle>para o seu número</Subtitle>
      </Header>
      <Input
        keyboardType="numeric"
        placeholder="- - -   - - -"
        style={{ width: '60%' }}
      />
      <IconButton>
        <MaterialIcon name="message-processing" size={30} color="#fff" />
        <IconButtonText>Reenviar SMS</IconButtonText>
      </IconButton>
      <IconButton>
        <MaterialIcon name="phone" size={30} color="#fff" />
        <IconButtonText>Me ligue</IconButtonText>
      </IconButton>
    </Container>
  );
};

export default CreditCardForm;
