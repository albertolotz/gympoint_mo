import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '~/assets/l.png';
import { signOut } from '~/store/modules/auth/actions';

import { Container, Title, Right, Center } from './styles';

export default function Head() {
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(signOut());
  }
  return (
    <>
      <Container>
        <Center>
          <Image source={logo} />
          <Title>GYMPOINT</Title>
        </Center>
        <Right>
          <TouchableOpacity onPress={handleLogout}>
            <Icon name="cancel" size={25} color="#ee4d64" />
          </TouchableOpacity>
        </Right>
      </Container>
    </>
  );
}
