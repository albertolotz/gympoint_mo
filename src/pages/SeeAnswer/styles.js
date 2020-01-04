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

export const SubmitReturn = styled(Button)`
  margin: 10px 30px;
  margin-bottom: 0px;
  background: #333;
`;
export const Top = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Question = styled.Text`
  font-size: 16px;
  color: #a2a3a2;
  margin: 10px 30px;
  border: 1px solid #888a88;
  height: 150px;
  padding: 10px;
  background: #fff;
`;
export const Time = styled.Text`
  font-size: 16px;
  color: #333;
  margin: 10px 30px;
`;
