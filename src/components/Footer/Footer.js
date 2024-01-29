'use client';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { COLORS, QUERIES } from '@/lib/constants';
import MaxWidthWrapper from '../MaxWidthWrapper';
import UnstyledLink from '../UnstyledLink';

function Footer() {
  return (
    <Wrapper>
      <InnerWrapper>
        <UnstyledLink href="/">
          <Image src="/images/logo.svg" width={23} height={26} alt="" />
        </UnstyledLink>

        <nav>
          <NavList>
            <li>
              <NavLink href="/terms-of-service">Terms of Service</NavLink>
            </li>
            <li>
              <NavLink href="/privacy-policy">Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink href="/contact-us">Contact Us</NavLink>
            </li>
          </NavList>
        </nav>
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background: ${COLORS.Primary5};
`;

const InnerWrapper = styled(MaxWidthWrapper)`
  text-align: center;
  padding-top: 24px;
  padding-bottom: 48px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;

  display: flex;
  flex-direction: column;
  gap: 16px;

  @media ${QUERIES.mobileAndUp} {
    flex-direction: row;
    gap: 32px;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.White};
  font-size: ${14 / 16}rem;

  &:hover {
    text-decoration: underline;
  }
`;

export default Footer;
