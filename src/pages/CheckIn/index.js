import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Alert } from 'react-native';
import Background from '~/components/Background';
import ItensCheckIn from '~/components/ItensCheckIn';
import Head from '~/components/Head';
import api from '~/services/api';

import { Container, SubmitButton, List } from './styles';

export default function CheckIn() {
  const [checkIns, setcheckIns] = useState([]);
  const [reLoad, setReLoad] = useState(false);
  const conectedId = useSelector(state => state.user.profile.id);

  useEffect(() => {
    async function loadCheckIns() {
      setReLoad(false);
      const response = await api.get(`checkin/${conectedId}/list`);
      let count = 0;
      const sequence = response.data.allCheckins.map(s => {
        count += 1;
        return {
          id: `Check-in #${count}`,
          date: s.dataCheckIn,
        };
      });

      setcheckIns(sequence.reverse());
    }
    loadCheckIns();
  }, [conectedId, reLoad]);

  async function handleSubmit() {
    try {
      const response = await api.post(`checkin/${conectedId}`);
      Alert.alert('Check-in', 'Check-in realizado, bom treino!');
      setReLoad(true);
    } catch (err) {
      Alert.alert('Ocorreu um erro', err.response.data.error);
    }
  }
  return (
    <Background>
      <Container>
        <Head />
        <SubmitButton onPress={handleSubmit}>Novo Check-in</SubmitButton>
        <List
          data={checkIns}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <ItensCheckIn data={item} />}
        />
      </Container>
    </Background>
  );
}

CheckIn.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="room" size={40} color={tintColor} />
  ),
};
// checkin/11/list
