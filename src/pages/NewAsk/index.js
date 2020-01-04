import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Background from '~/components/Background';
import Head from '~/components/Head';
import api from '~/services/api';
import {
  Container,
  SubmitButton,
  SubmitReturn,
  TextArea,
  Label,
} from './styles';

export default function NewAsk({ navigation }) {
  const conectedId = useSelector(state => state.user.profile.id);
  const [msg, setMsg] = useState('');

  async function handleSubmit() {
    const data = { question: msg };
    await api.post(`orderhelp/${conectedId}`, data);

    navigation.navigate('GetHelp', { reload: true });
  }

  return (
    <Background>
      <Container>
        <Head />
        <Label>Escreva sua mensagem:</Label>
        <TextArea
          placeholder="Digite sua mensagem"
          autoCorrect={false}
          autoCaptalize="none"
          value={msg}
          onChangeText={setMsg}
        />
        <SubmitButton onPress={handleSubmit}>Enviar Pedido</SubmitButton>
        <SubmitReturn onPress={() => navigation.goBack()}>
          Retornar sem enviar ...
        </SubmitReturn>
      </Container>
    </Background>
  );
}

NewAsk.navigationOptions = {
  header: null,
};
