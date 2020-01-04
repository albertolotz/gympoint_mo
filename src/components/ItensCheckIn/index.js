import React, { useMemo } from 'react';
// import PropTypes from 'prop-types';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, Info, Time } from './styles';

export default function ItensCheckIn({ data }) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.date), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.date]);
  return (
    <Container>
      <Info>{data.id}</Info>
      <Time>{dateParsed}</Time>
    </Container>
  );
}

// ItensCheckIn.propTypes = {
//  data: PropTypes.string.isRequired(),
//  id: PropTypes.integer().isRequired(),
// };
