import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex: 1;
  background: #f3903d;
`;

export const HeaderBackground = styled.Image`
  flex: 1;
  opacity: 0.3;
`;

export const Logo = styled.Image`
  position: absolute;
  top: 20%;
  left: 30%;
`;

export const Content = styled.View`
  background: #fff;
  margin-top: -40px;
  padding: 0 30px ${Platform.OS === 'android' ? 50 : 55 + getBottomSpace()}px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
`;

export const AuthButtons = styled.View`
  width: 100%;
  margin: -30px 0 40px;
  flex-direction: row;
  justify-content: center;
`;

export const SignInButton = styled.TouchableOpacity`
  width: 150px;
  height: 60px;
  background: #fff;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;

  shadow-opacity: 1;
  shadow-radius: 5px;
  shadow-color: #00000029;
  shadow-offset: 0px 5px;

  elevation: 5;
`;

export const SignUpButton = styled.TouchableOpacity`
  width: 150px;
  height: 60px;
  background: #f5f5f5;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;

  shadow-opacity: 1;
  shadow-radius: 5px;
  shadow-color: #00000029;
  shadow-offset: 0px 5px;

  elevation: 5;
`;

export const DoubleField = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const AuthButtonsText = styled.Text`
  color: #707070c6;
  font-size: 18px;
  font-family: 'HelveticaNeue-Medium';
`;

export const SubmitButton = styled(Button)`
  margin-top: 30px;
`;
