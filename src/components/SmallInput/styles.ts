import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 48%;
  height: 60px;
  padding: 0 16px;
  margin-bottom: 23px;
  background: #f2f2f2;
  border-radius: 12px;

  shadow-opacity: 1;
  shadow-radius: 5px;
  shadow-color: #00000029;
  shadow-offset: 1px 1px;

  elevation: 5;

  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #00000029;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #707070c6;
  font-size: 18px;
  font-family: 'HelveticaNeue-Medium';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
