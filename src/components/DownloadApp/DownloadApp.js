'use client';
import Link from 'next/link';
import styled from 'styled-components';
import { COLORS, QUERIES } from '@/lib/constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Heading2 from '../Heading2';
import Image from 'next/image';

function DownloadApp() {
  return (
    <Wrapper id="cta">
      <InnerWrapper>
        <Heading2 color={COLORS.White}>Download the App</Heading2>

        <ButtonsWrapper>
          <DownloadLink href="/">
            <DownloadLogo
              src="/images/apple.svg"
              width={30}
              height={35}
              alt=""
            />

            <ButtonText>
              <SubText>Download on the</SubText>
              <Text>App Store</Text>
            </ButtonText>
          </DownloadLink>
          <DownloadLink href="/">
            <DownloadLogo
              src="/images/google-play.svg"
              width={31}
              height={29}
              alt=""
            />

            <ButtonText>
              <SubText>Get it on</SubText>
              <Text>Google Play</Text>
            </ButtonText>
          </DownloadLink>
        </ButtonsWrapper>
      </InnerWrapper>
    </Wrapper>
  );
}

const DownloadLogo = styled(Image)`
  width: 40px;
  height: auto;
`;

const Wrapper = styled.section`
  background: ${COLORS.Primary64};
  padding-top: 38px;
  padding-bottom: 38px;

  @media ${QUERIES.mobileAndUp} {
    padding-top: 120px;
    padding-bottom: 120px;
  }
`;

const InnerWrapper = styled(MaxWidthWrapper)`
  display: flex;
  gap: 24px;
  flex-direction: column;
  text-align: center;

  @media ${QUERIES.mobileAndUp} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${QUERIES.mobileAndUp} {
    flex-direction: row;
  }
`;

const DownloadLink = styled(Link)`
  display: flex;
  gap: 10px;

  align-items: center;
  text-decoration: none;
  color: ${COLORS.White};

  background: ${COLORS.Primary5};
  border: 2px solid ${COLORS.White};
  border-radius: 10px;

  padding: 16px;
`;

const ButtonText = styled.p`
  display: flex;
  flex-direction: column;
  text-align: start;
  line-height: 1.1;
`;

const SubText = styled.span`
  font-size: ${14 / 14}rem;
`;

const Text = styled.span`
  font-size: ${38 / 16}rem;
`;

export default DownloadApp;
