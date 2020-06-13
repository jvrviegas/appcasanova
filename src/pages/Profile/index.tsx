import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Platform } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Header,
  Title,
  Content,
  AndroidOptionButton,
  IphoneOptionButton,
  OptionButtonText,
  SmallInfo,
  SmallInfoText,
} from './styles';

const Profile: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <Title>Maria Santos</Title>
        <MaterialIcon name="pencil-outline" size={16} color="#f3903d" />
      </Header>
      <Content>
        {Platform.OS === 'android' ? (
          <>
            <AndroidOptionButton
              onPress={() => navigation.navigate('RegistrationDataForm')}
            >
              <OptionButtonText>Dados cadastrais</OptionButtonText>
              <SmallInfo>
                <SmallInfoText>E-mail, Senha, RG...</SmallInfoText>
                <MaterialIcon name="chevron-right" size={28} color="#f3903d" />
              </SmallInfo>
            </AndroidOptionButton>
            <AndroidOptionButton
              onPress={() => navigation.navigate('SavedCreditCardForm')}
            >
              <OptionButtonText>Cartão</OptionButtonText>
              <SmallInfo>
                <SmallInfoText>•••• 1234</SmallInfoText>
                <MaterialIcon name="chevron-right" size={28} color="#f3903d" />
              </SmallInfo>
            </AndroidOptionButton>
            <AndroidOptionButton
              onPress={() => navigation.navigate('SavedPhoneForm')}
            >
              <OptionButtonText>Telefone</OptionButtonText>
              <SmallInfo>
                <SmallInfoText>71 91234-5678</SmallInfoText>
                <MaterialIcon name="chevron-right" size={28} color="#f3903d" />
              </SmallInfo>
            </AndroidOptionButton>
          </>
        ) : (
          <>
            <IphoneOptionButton
              onPress={() => navigation.navigate('RegistrationDataForm')}
            >
              <OptionButtonText>Dados cadastrais</OptionButtonText>
              <SmallInfo>
                <SmallInfoText>E-mail, Senha, RG...</SmallInfoText>
                <MaterialIcon name="chevron-right" size={28} color="#f3903d" />
              </SmallInfo>
            </IphoneOptionButton>
            <IphoneOptionButton
              onPress={() => navigation.navigate('SavedCreditCardForm')}
            >
              <OptionButtonText>Cartão</OptionButtonText>
              <SmallInfo>
                <SmallInfoText>•••• 1234</SmallInfoText>
                <MaterialIcon name="chevron-right" size={28} color="#f3903d" />
              </SmallInfo>
            </IphoneOptionButton>
            <IphoneOptionButton
              onPress={() => navigation.navigate('SavedPhoneForm')}
            >
              <OptionButtonText>Telefone</OptionButtonText>
              <SmallInfo>
                <SmallInfoText>71 91234-5678</SmallInfoText>
                <MaterialIcon name="chevron-right" size={28} color="#f3903d" />
              </SmallInfo>
            </IphoneOptionButton>
          </>
        )}
      </Content>
    </Container>
  );
};

export default Profile;
