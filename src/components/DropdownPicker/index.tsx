import React, { useState } from 'react';
import { Platform } from 'react-native';
import { Picker } from '@react-native-community/picker';
import DropDownPicker from 'react-native-dropdown-picker';

const DropdownPicker: React.FC = () => {
  const [installments, setInstallments] = useState<string>('');

  return (
    <>
      {Platform.OS === 'ios' ? (
        <DropDownPicker
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
          placeholder="Quantidade de parcelas"
          defaultValue={installments}
          containerStyle={{
            height: 50,
            marginTop: 20,
            borderBottomWidth: 2,
            borderColor: '#fff',
          }}
          style={{ backgroundColor: '#f3903d', borderColor: '#f3903d' }}
          dropDownStyle={{ backgroundColor: '#f3903d' }}
          dropDownMaxHeight={300}
          labelStyle={{
            color: '#fff',
            textAlign: 'left',
            fontFamily: 'HelveticaNeue-Light',
            fontSize: 25,
          }}
          arrowColor="#fff"
          arrowSize={25}
          placeholderStyle={{ color: '#fff', alignItems: 'flex-start' }}
          activeItemStyle={{ color: '#fff' }}
          onChangeItem={(item) => setInstallments(item.value)}
        />
      ) : (
        <Picker
          selectedValue={installments}
          style={{
            height: 50,
            color: '#fff',
            borderBottomWidth: 2,
            borderColor: '#fff',
          }}
          onValueChange={(itemValue) => setInstallments(itemValue)}
        >
          <Picker.Item label="1x" value="1x" />
          <Picker.Item label="2x" value="2x" />
          <Picker.Item label="3x" value="3x" />
          <Picker.Item label="4x" value="4x" />
          <Picker.Item label="5x" value="5x" />
          <Picker.Item label="6x" value="6x" />
          <Picker.Item label="7x" value="7x" />
          <Picker.Item label="8x" value="8x" />
          <Picker.Item label="9x" value="9x" />
          <Picker.Item label="10x" value="10x" />
          <Picker.Item label="11x" value="11x" />
          <Picker.Item label="12x" value="12x" />
        </Picker>
      )}
    </>
  );
};

export default DropdownPicker;
