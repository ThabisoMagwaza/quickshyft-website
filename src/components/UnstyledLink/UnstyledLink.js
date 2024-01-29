'use client';
import Link from 'next/link';
import styled from 'styled-components';

function UnstyledLink({ children, href, ...delegated }) {
  return (
    <Wrapper href={href} {...delegated}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled(Link)`
  text-decoration: none;
`;

export default UnstyledLink;
