import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import Background from '~/components/Background';
import Head from '~/components/Head';
import api from '~/services/api';
import { Container, SubmitReturn, Label, Time, Question, Top } from './styles';

export default function SeeAnswer({ navigation }) {
  const id = navigation.getParam('id');
  const conectedId = useSelector(state => state.user.profile.id);
  const [question, SetQuestion] = useState([]);

  useEffect(() => {
    async function loadQuestion() {
      const response = await api.get(`orderhelp/${conectedId}`);
      const thisAnswer = response.data.helpOrders.find(p => p._id === id);
      const dateA =
        thisAnswer.createdAt === null
          ? '-'
          : formatRelative(parseISO(thisAnswer.createdAt), new Date(), {
              locale: pt,
              addSuffix: true,
            });
      const dateQ =
        thisAnswer.answer_at === null
          ? 'aguarde mais um pouco ...'
          : formatRelative(parseISO(thisAnswer.answer_at), new Date(), {
              locale: pt,
              addSuffix: true,
            });

      const resposta = {
        answer: thisAnswer.answer,
        dateAnswer: dateA,
        question: thisAnswer.question,
        dateQuestion: dateQ,
      };
      console.tron.log(resposta);
      SetQuestion(resposta);
    }
    loadQuestion();
  }, [conectedId, id]);

  return (
    <Background>
      <Container>
        <Head />
        <Top>
          <Label>Pergunta</Label>
          <Time>{question.dateAnswer}</Time>
        </Top>
        <Question>{question.question}</Question>
        <Top>
          <Label>Resposta</Label>
          <Time>{question.dateQuestion}</Time>
        </Top>
        <Question>{question.answer}</Question>
        <SubmitReturn onPress={() => navigation.goBack()}>
          Retornar...
        </SubmitReturn>
      </Container>
    </Background>
  );
}

SeeAnswer.navigationOptions = {
  header: null,
};
