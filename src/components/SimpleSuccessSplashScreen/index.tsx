import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image } from 'react-native';

import simpleSuccess from '../../assets/simple-success.png';

const SimpleSuccessSplashScreen: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Profile');
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
      <Image source={simpleSuccess} />
    </View>
  );
};

export default SimpleSuccessSplashScreen;
