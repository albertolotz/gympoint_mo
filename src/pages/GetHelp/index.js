import React, { useMemo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import Background from '~/components/Background';
import Head from '~/components/Head';
import api from '~/services/api';

import {
  Container,
  SubmitButton,
  SubmitReturn,
  List,
  ContainerItem,
  Top,
  Info,
  Time,
  Separator,
  Answer,
} from './styles';

export default function GetHelp({ navigation }) {
  const [answers, setAnswers] = useState([]);
  const [reLoad, setReLoad] = useState(false);

  const conectedId = useSelector(state => state.user.profile.id);

  useEffect(() => {
    async function loadAnswers() {
      setReLoad(false);
      const response = await api.get(`orderhelp/${conectedId}`);
      const sequence = response.data.helpOrders.map(s => {
        const textAnswer = s.answer_at !== null;
        const info = textAnswer === true ? 'Respondida' : 'Sem Resposta';
        const dateParsed = formatRelative(parseISO(s.createdAt), new Date(), {
          locale: pt,
          addSuffix: true,
        });
        return {
          _id: s._id,
          date: s.createdAt,
          wasAnswer: textAnswer,
          infoFormated: info,
          relativeDate: dateParsed,
          question: s.question,
        };
      });
      setAnswers(sequence.reverse());
    }
    loadAnswers();
  }, [answers.date, conectedId, reLoad]);
  function onRefresh() {
    setReLoad(true);
  }

  return (
    <Background>
      <Container>
        <Head />
        <SubmitButton
          onPress={() => {
            navigation.navigate('NewAsk');
          }}
        >
          Novo pedido de ajuda
        </SubmitButton>
        <SubmitReturn onPress={() => navigation.navigate('CheckIn')}>
          Retornar
        </SubmitReturn>
        <List
          data={answers}
          keyExtractor={item => String(item._id)}
          renderItem={({ item }) => (
            <ContainerItem>
              <Top>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('SeeAnswer', { id: item._id })
                  }
                >
                  <Icon
                    name={item.wasAnswer === true ? 'mail' : 'block'}
                    size={30}
                    color={item.wasAnswer === true ? '#116606' : '#9e0308'}
                  />
                </TouchableOpacity>
                <Info wA={item.wasAnswer}>{item.infoFormated}</Info>
                <Time>{item.relativeDate}</Time>
              </Top>
              <Separator />
              <Answer>{item.question}</Answer>
            </ContainerItem>
          )}
          refreshing={reLoad}
          onRefresh={onRefresh}
        />
      </Container>
    </Background>
  );
}

GetHelp.navigationOptions = {
  header: null,
};
