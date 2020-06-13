import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: #f3903d;
  padding: 0 0 ${Platform.OS === 'android' ? 70 : 70 + getBottomSpace()}px;
`;

export const Title = styled.Text`
  margin-left: 30px;
  font-size: 40px;
  font-family: 'HelveticaNeue-Medium';
  color: #fff;
`;

export const LoanDetails = styled.View`
  flex: 1;
  background: #fff;
  padding: 30px;
  margin-top: 15px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const CardDetails = styled.View`
  flex: 1;
  background: #fff;
  padding: 30px;
`;

export const Label = styled.Text`
  font-size: 20px;
  font-family: 'HelveticaNeue-Light';
  color: #f3903d;
`;

export const Value = styled.Text`
  font-size: 25px;
  font-family: 'HelveticaNeue-Light';
  color: #f3903d;
  margin-bottom: 20px;
  padding-left: 10px;
`;

export const ValidInfo = styled.View`
  flex-direction: row;
`;

export const ValidInfoTexts = styled.View`
  width: 150px;
  justify-content: center;
`;

export const ChangeCreditCard = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 0 30px 50px;
`;

export const ChangeCreditCardText = styled.Text`
  font-size: 22px;
  font-family: 'HelveticaNeue-Light';
  color: #f3903d;
  margin-right: 40px;
`;

export const ChangeCreditCardButton = styled(RectButton)`
  width: 50px;
  height: 50px;
  padding-top: ${Platform.OS === 'android' ? 4 : 5}px;
  align-items: center;
  border-radius: 25px;
  background: #f3903d;
`;

export const FloatingView = styled.View`
  width: 100%;
  position: absolute;
  background: #fff;
  padding-bottom: 20px;
  bottom: 0;
  z-index: 200;
`;

export const ConfirmLoanButton = styled(RectButton)`
  align-self: center;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 50px;
  background: #f3903d;
  border-radius: 25px;
  margin-top: 25px;
  margin-bottom: 15px;
`;

export const ConfirmLoanButtonText = styled.Text`
  font-family: 'HelveticaNeue-Medium';
  font-size: 25px;
  color: #fff;
`;
