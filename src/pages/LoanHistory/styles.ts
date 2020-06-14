import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  padding: 0 0 ${Platform.OS === 'android' ? 0 : 0 + getBottomSpace()}px;
`;

export const Header = styled.View`
  padding: 0 40px;
  align-items: baseline;
`;

export const Title = styled.Text`
  font-family: 'HelveticaNeue-Medium';
  font-size: 35px;
  color: #f3903d;
  margin-right: 5px;
`;

export const Content = styled.View`
  flex: 1;
  margin-top: 20px;
`;

export const AndroidLoanDetails = styled(RectButton)`
  flex-direction: row;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  border-radius: 2px;
  background: #fff;
  margin: 2px 10px;
  padding-left: 10px;

  elevation: 5;
`;

export const IphoneLoanDetails = styled.TouchableOpacity`
  flex-direction: row;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  border-radius: 2px;
  background: #fff;
  margin: 2px 10px;
  padding-left: 10px;

  shadow-opacity: 1;
  shadow-radius: 3px;
  shadow-color: #00000029;
  shadow-offset: 0px 2px;
`;

export const Info = styled.View``;

export const InfoTitle = styled.Text`
  color: #f3903d;
  font-size: 18px;
  font-family: 'HelveticaNeue-Light';
`;

export const InfoText = styled.Text`
  color: #f3903d;
  font-size: 23px;
  font-family: 'HelveticaNeue-Light';
  margin-left: 10px;
`;
