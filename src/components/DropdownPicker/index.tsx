import React, { useState } from 'react';
import { Platform } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DropdownPicker: React.FC = () => {
  const [installments, setInstallments] = useState<string>('');

  return (
    <>
      <RNPickerSelect
        useNativeAndroidPickerStyle={false}
        onValueChange={(value) => setInstallments(value)}
        placeholder={{
          label: 'Quantidade de parcelas',
          value: '',
        }}
        items={[
          { label: '1x', value: '1x' },
          { label: '2x', value: '2x' },
          { label: '3x', value: '3x' },
          { label: '4x', value: '4x' },
          { label: '5x', value: '5x' },
          { label: '6x', value: '6x' },
          { label: '7x', value: '7x' },
          { label: '8x', value: '8x' },
          { label: '9x', value: '9x' },
          { label: '10x', value: '10x' },
          { label: '11x', value: '11x' },
          { label: '12x', value: '12x' },
        ]}
        style={{
          inputAndroid: {
            color: '#fff',
            fontFamily: 'HelveticaNeue-Light',
            fontSize: 25,
            marginTop: 20,
          },
          inputAndroidContainer: {
            borderBottomColor: '#fff',
            borderBottomWidth: 2,
          },
          inputIOS: {
            color: '#fff',
            fontFamily: 'HelveticaNeue-Light',
            fontSize: 25,
            marginTop: 20,
          },
          inputIOSContainer: {
            paddingBottom: 10,
            marginTop: 10,
            borderBottomColor: '#fff',
            borderBottomWidth: 2,
          },
          placeholder: {
            color: '#fff',
          },
        }}
        Icon={() => (
          <Icon
            name="chevron-down"
            size={35}
            color="#fff"
            style={{ marginTop: Platform.OS === 'ios' ? 18 : 28 }}
          />
        )}
      />
    </>
  );
};

export default DropdownPicker;
