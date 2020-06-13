import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image } from 'react-native';

import shadedSuccess from '../../assets/shaded-success.png';

const ShadedSuccessSplashScreen: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
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
      <Image source={shadedSuccess} />
    </View>
  );
};

export default ShadedSuccessSplashScreen;
