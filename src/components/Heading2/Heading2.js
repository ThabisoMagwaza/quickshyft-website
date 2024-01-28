'use client';
import styled from 'styled-components';
import { COLORS } from '@/lib/constants';

function Heading2({ children, color = COLORS.Primary5 }) {
  return <Heading style={{ '--color': color }}>{children}</Heading>;
}

const Heading = styled.h2`
  font-size: ${32 / 16}rem;
  font-weight: 600;
  line-height: 1.2;
  color: var(--color);
`;

export default Heading2;
