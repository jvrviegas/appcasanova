import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  align-self: center;
  width: 219px;
  height: 60px;
  background: #f2f2f2;
  border-radius: 10px;
  margin-top: 8px;

  shadow-opacity: 1;
  shadow-radius: 5px;
  shadow-color: #00000029;
  shadow-offset: 1px 1px;

  elevation: 5;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #707070c6;
  font-size: 18px;
  font-family: 'HelveticaNeue-Medium';
`;
