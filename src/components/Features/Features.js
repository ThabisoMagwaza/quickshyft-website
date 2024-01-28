'use client';
import styled from 'styled-components';
import { COLORS } from '@/lib/constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Heading2 from '../Heading2';
import FeatureTabs from '../FeatureTabs';

function Features() {
  return (
    <Wrapper>
      <InnerWrapper>
        <Column>
          <Heading2>Connecting Hirers and Contractors</Heading2>
          <SubHeading>
            The platform where ordinary people hire contractors to complete
            everyday tasks.
          </SubHeading>
        </Column>
        <FeatureTabs />
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section``;

const InnerWrapper = styled(MaxWidthWrapper)`
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Column = styled.div``;

const SubHeading = styled.p`
  font-size: ${18 / 16}rem;
  color: ${COLORS.Primary5};
  margin-top: 18px;
`;

export default Features;
