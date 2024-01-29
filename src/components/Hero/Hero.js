'use client';
import Image from 'next/image';
import styled from 'styled-components';

import { COLORS, QUERIES } from '@/lib/constants';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Heading1 from '../Heading1';
import CTA from '../CTA';

function Hero() {
  return (
    <Wrapper>
      <InnerWrapper>
        <ImageWrapper>
          <HeroImage
            src="/images/hero.svg"
            width={292}
            height={321}
            alt="Illustration of the quickshyft app"
            priority
          />
        </ImageWrapper>

        <Content>
          <Heading1>Simplify Your Life with QuickShyft</Heading1>
          <SubHeading>Get the help you new, when you need it!</SubHeading>

          <CTA href="#cta">Download the App</CTA>
        </Content>
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section``;

const InnerWrapper = styled(MaxWidthWrapper)`
  padding-top: 25px;
  padding-bottom: 74px;

  @media ${QUERIES.mobileAndUp} {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 60px;

    padding-top: 60px;
  }
`;

const ImageWrapper = styled.div`
  @media ${QUERIES.mobileAndUp} {
    margin: 0 -24px;
  }
`;

const HeroImage = styled(Image)`
  width: 100%;
  max-height: 350px;
  height: auto;

  @media ${QUERIES.mobileAndUp} {
    max-height: 550px;
  }
`;

const Content = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${QUERIES.mobileAndUp} {
    text-align: start;
    align-items: flex-start;

    max-width: 600px;
  }
`;

const SubHeading = styled.p`
  font-size: ${20 / 16}rem;
  color: ${COLORS.Primary5};
  padding-top: 18px;
  padding-bottom: 42px;
`;

export default Hero;
