'use client';
import styled from 'styled-components';
import { COLORS } from '@/lib/constants';

function CTA({ children, href }) {
  return <Wrapper href={href}>{children}</Wrapper>;
}

const Wrapper = styled.a`
  text-decoration: none;
  display: inline-block;

  border-radius: 12px;
  width: 250px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${18 / 16}rem;
  font-weight: 700;
  background: ${COLORS.Primary64};

  color: ${COLORS.White};
`;

export default CTA;
