'use client';
import styled from 'styled-components';

import { COLORS, QUERIES } from '@/lib/constants';
import MaxWidthWrapper from '../MaxWidthWrapper';
import UnstyledLink from '../UnstyledLink';
import Image from 'next/image';
import VisuallyHidden from '../VisuallyHidden';

function Navigation() {
  return (
    <Wrapper>
      <InnerWrapper>
        <LinkStyled href="/">
          <Image src="/images/logo.svg" width={30} height={26} alt="" />
          <LogoText>QuickShyft</LogoText>
          <VisuallyHidden>Navigate Home</VisuallyHidden>
        </LinkStyled>
      </InnerWrapper>
    </Wrapper>
  );
}

const LinkStyled = styled(UnstyledLink)`
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const LogoText = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

const Wrapper = styled.nav`
  background: ${COLORS.Primary64};
  height: 60px;
`;

const InnerWrapper = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Logo = styled(Image)`
  width: 30px;
  height: auto;

  @media ${QUERIES.tabletAndUp} {
    width: 80px;
  }
`;

export default Navigation;
