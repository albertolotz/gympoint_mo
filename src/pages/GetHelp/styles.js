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
export const SubmitReturn = styled(Button)`
  margin: 10px 30px;
  margin-bottom: 0px;
  background: #333;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;

export const ContainerItem = styled.View`
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  border: 1px solid #ddd;

  display: flex;
`;
export const Info = styled.Text`
  font-weight: bold;
  font-size: 12px;
  color: ${props => (props.wA ? '#116606' : '#9e0308')};
`;
export const Time = styled.Text`
  font-size: 14px;
  color: #808080;
`;
export const Top = styled.View`
  display: flex;

  justify-content: space-between;
  align-items: center;
`;
export const Answer = styled.Text`
  margin-top: 10px;
  font-size: 15px;
  color: #808080;
  display: flex;
`;

export const Separator = styled.View`
  height: 1px;
  background: #ccc;
  margin: 15px 0 5px;
`;
