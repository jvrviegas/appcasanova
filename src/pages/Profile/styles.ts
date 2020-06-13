import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  flex-direction: row;
  padding: 0 20px;
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
  margin-top: 20px;
`;

export const AndroidOptionButton = styled(RectButton)`
  flex-direction: row;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  border-radius: 2px;
  background: #fff;
  margin: 2px 10px;
  padding-left: 10px;

  elevation: 5;
`;

export const IphoneOptionButton = styled.TouchableOpacity`
  flex-direction: row;
  height: 60px;
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

export const OptionButtonText = styled.Text`
  color: #f3903d;
  font-size: 22px;
  font-family: 'HelveticaNeue-Light';
`;

export const SmallInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SmallInfoText = styled.Text`
  color: #f3903d;
  font-size: 16px;
  font-family: 'HelveticaNeue-Light';
  margin-right: 5px;
`;
