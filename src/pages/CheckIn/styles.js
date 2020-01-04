import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #ee4d64;
  align-self: center;
  margin-left: 10px;
`;
export const SubmitButton = styled(Button)`
  margin: 30px;
  margin-bottom: 0px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;
