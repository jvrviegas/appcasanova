import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;
  background: #f3903d;
`;

export const Header = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-family: 'HelveticaNeue-Light';
  color: #fff;
  margin-bottom: 10px;
`;

export const Subtitle = styled.Text`
  font-size: 22px;
  font-family: 'HelveticaNeue-Light';
  color: #fff;
  text-align: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#fff',
})`
  margin: 40px 0 20px;
  padding: 10px 0;
  align-self: center;
  text-align: center;
  font-family: 'HelveticaNeue-Light';
  font-size: 40px;
  color: #fff;
  border-bottom-width: 2px;
  border-color: #fff;
`;

export const IconButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const IconButtonText = styled.Text`
  font-family: 'HelveticaNeue-Light';
  font-size: 25px;
  color: #fff;
  margin-left: 10px;
`;
