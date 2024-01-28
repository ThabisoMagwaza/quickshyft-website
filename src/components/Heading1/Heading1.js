'use client';
import styled from 'styled-components';
import { COLORS } from '@/lib/constants';

function Heading1({ children }) {
  return <Heading>{children}</Heading>;
}

const Heading = styled.h1`
  line-height: 1.2;
  font-size: ${38 / 16}rem;
  font-weight: 600;
  color: ${COLORS.Primary5};
`;

export default Heading1;
