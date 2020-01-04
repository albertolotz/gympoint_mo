import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Background from '~/components/Background';
import logo from '~/assets/logo.png';

import { Container, Form, FormInput, SubmitButton, TextLogo } from './styles';

import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();

  const idRef = useRef();

  const [email, setEmail] = useState('');
  const [id, setId] = useState('');

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(email, id));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <TextLogo>GYMPOINT</TextLogo>
        <Form>
          <FormInput
            icon="mail-outline"
            placeholder="Digite e-mail"
            keyboardType="email-address"
            autoCorrect={false}
            autoCaptalize="none"
            returnKeyType="next"
            onSubmitEditing={() => idRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            secureTextEntry
            icon="lock-outline"
            placeholder="Digite seu Id"
            ref={idRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={id}
            onChangeText={setId}
          />
          <SubmitButton loading={loading} onPress={handleSubmit}>
            Entrar no Sistema
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
