'use client';
import styled from 'styled-components';
import { COLORS, QUERIES } from '@/lib/constants';

function Heading1({ children }) {
  return <Heading>{children}</Heading>;
}

const Heading = styled.h1`
  line-height: 1.2;
  font-size: ${38 / 16}rem;
  font-weight: 600;
  color: ${COLORS.Primary5};

  @media ${QUERIES.tabletAndUp} {
    font-size: ${60 / 16}rem;
  }
`;

export default Heading1;
