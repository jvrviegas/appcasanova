import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  padding: 10px 30px;
  background: #f3903d;
  padding: 0 30px ${Platform.OS === 'android' ? 50 : 55 + getBottomSpace()}px;
`;

export const Title = styled.Text`
  font-size: 40px;
  font-family: 'HelveticaNeue-Medium';
  color: #fff;
`;

export const LoanValue = styled.TextInput.attrs({
  placeholderTextColor: '#fff',
})`
  margin-top: 30px;
  padding: 10px 0;
  font-family: 'HelveticaNeue-Light';
  font-size: 25px;
  color: #fff;
  border-bottom-width: 2px;
  border-color: #fff;
`;

export const AmountInputs = styled.View`
  margin-top: 50px;
  align-items: center;
`;

export const Label = styled.Text`
  margin-top: 20px;
  font-size: 22px;
  font-family: 'HelveticaNeue-Light';
  color: #fff;
`;

export const AmountInput = styled.TextInput`
  width: 230px;
  margin-top: 6px;
  padding: 15px 30px;
  background: #fff;
  border-radius: 19px;
  font-family: 'HelveticaNeue-Light';
  font-size: 25px;
  color: #f3903d;
`;

export const AdvanceButton = styled(RectButton)`
  width: 220px;
  height: 60px;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: #fff;
  margin: ${Platform.OS === 'android' ? 70 : 100}px 0
    ${Platform.OS === 'android' ? 10 : 40}px;

  shadow-opacity: 1;
  shadow-radius: 5px;
  shadow-color: #00000029;
  shadow-offset: 1px 1px;

  elevation: 5;
`;

export const AdvanceButtonText = styled.Text`
  color: #707070c6;
  font-size: 22px;
  font-family: 'HelveticaNeue-Medium';
`;
