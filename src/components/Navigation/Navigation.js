'use client';
import styled from 'styled-components';

import { COLORS } from '@/lib/constants';
import MaxWidthWrapper from '../MaxWidthWrapper';
import UnstyledLink from '../UnstyledLink';
import Image from 'next/image';
import VisuallyHidden from '../VisuallyHidden';

function Navigation() {
  return (
    <Wrapper>
      <InnerWrapper>
        <UnstyledLink href="/">
          <Image src="/images/logo.svg" width={30} height={26} alt="" />
          <VisuallyHidden>Navigate Home</VisuallyHidden>
        </UnstyledLink>
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  background: ${COLORS.Primary64};
  height: 60px;
`;

const InnerWrapper = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  height: 100%;
`;

export default Navigation;
