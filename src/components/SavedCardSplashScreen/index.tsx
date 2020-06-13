import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text } from 'react-native';

import creditCard from '../../assets/credit-card.png';

const SavedCardSplashScreen: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('ConfirmLoan');
    }, 2000);
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}
    >
      <Image source={creditCard} />
      <Text
        style={{
          fontSize: 25,
          fontFamily: 'HelveticaNeue-Light',
          color: '#f3903d',
        }}
      >
        Cartão salvo
      </Text>
    </View>
  );
};

export default SavedCardSplashScreen;
