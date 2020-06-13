import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RectButton } from 'react-native-gesture-handler';

export const OrangeBar = styled.View`
  height: 20px;
  background: #f3903d;
`;

export const Container = styled.ScrollView`
  flex: 1;
  margin-top: -20px;
  background: #fff;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  margin-bottom: 110px;
`;

export const MainCard = styled.View`
  flex: 3;
  padding: 15px 25px 25px;
  border-bottom-width: 2px;
  border-color: #00000015;
`;

export const MainCardText = styled.Text`
  margin-top: 10px;
  font-size: 24px;
  font-family: 'HelveticaNeue-Light';
  text-align: center;
  color: #707070c6;
`;

export const SimpleCard = styled.View`
  flex: 3;
  align-items: center;
  padding: 15px 25px 25px;
  border-bottom-width: 2px;
  border-color: #00000015;
`;

export const CardImage = styled.Image``;

export const CardTitle = styled.Text`
  margin-top: 10px;
  font-size: 22px;
  font-family: 'HelveticaNeue-Medium';
  text-align: center;
  color: #3c3c3c;
`;

export const CardText = styled.Text`
  margin-top: 20px;
  font-size: 20px;
  font-family: 'HelveticaNeue-Light';
  text-align: center;
  color: #909090;
`;

export const FloatingView = styled.View`
  width: 100%;
  position: absolute;
  background: #fff;
  padding-bottom: 20px;
  bottom: 0;
  z-index: 200;
`;

export const RequestLoanButton = styled(RectButton)`
  align-self: center;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 50px;
  background: #f3903d;
  border-radius: 25px;
  margin-top: 25px;
  margin-bottom: 15px;
`;

export const RequestLoanButtonText = styled.Text`
  font-family: 'HelveticaNeue-Medium';
  font-size: 25px;
  color: #fff;
`;
