'use client';
import Link from 'next/link';
import styled from 'styled-components';

function UnstyledLink({ children, href }) {
  return <Wrapper href={href}>{children}</Wrapper>;
}

const Wrapper = styled(Link)`
  text-decoration: none;
`;

export default UnstyledLink;
