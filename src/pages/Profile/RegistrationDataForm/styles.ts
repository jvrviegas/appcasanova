import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  padding: 20px 20px ${Platform.OS === 'android' ? 50 : 40 + getBottomSpace()}px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: baseline;
`;

export const Title = styled.Text`
  font-family: 'HelveticaNeue-Light';
  font-size: 35px;
  color: #f3903d;
  margin-right: 5px;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Label = styled.Text`
  font-family: 'HelveticaNeue-Light';
  font-size: 23px;
  color: #f3903d;
  margin-top: 30px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#fff',
})`
  margin-top: 5px;
  padding: 15px;
  font-family: 'HelveticaNeue-Light';
  font-size: 18px;
  color: #f3903d;
  border-width: 1px;
  border-color: #f3903d;
  border-radius: 10px;
`;

export const DoubleInputs = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SaveButton = styled(RectButton)`
  width: 80%;
  height: 60px;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: #f3903d;
  margin: 50px 0 ${Platform.OS === 'android' ? 10 : 40}px;

  shadow-opacity: 1;
  shadow-radius: 5px;
  shadow-color: #00000029;
  shadow-offset: 1px 1px;

  elevation: 5;
`;

export const SaveButtonText = styled.Text`
  color: #fff;
  font-size: 22px;
  font-family: 'HelveticaNeue-Medium';
`;
