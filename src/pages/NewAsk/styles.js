import styled from 'styled-components/native';
import { Platform } from 'react-native';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
`;
export const Label = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin: 10px 30px;
`;

export const SubmitButton = styled(Button)`
  margin: 10px 30px;
  margin-bottom: 0px;
`;
export const SubmitReturn = styled(Button)`
  margin: 10px 30px;
  margin-bottom: 0px;
  background: #333;
`;
export const TextArea = styled.TextInput.attrs({
  multiline: true,
  numberOfLines: 10,
  textAlignVertical: 'top',
})`
  font-size: 15px;
  margin-left: 10px;
  color: #333;
  margin: 5px 30px;
  border: 1px solid #ccc;
  background: #fff;
  height: 300px;
`;
