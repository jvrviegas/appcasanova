import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #f3903d;
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

export const Actions = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  background: #fff;
  padding: 0 30px 50px;
`;

export const ActionButton = styled(RectButton)`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background: #f3903d;
`;
