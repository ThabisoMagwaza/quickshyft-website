'use client';
import * as Tabs from '@radix-ui/react-tabs';
import styled from 'styled-components';

import { COLORS, QUERIES } from '@/lib/constants';

function FeatureTabs() {
  return (
    <Root defaultValue="hirer">
      <List>
        <Trigger value="hirer">Hirer</Trigger>
        <Trigger value="contractor">Contractor</Trigger>
      </List>
      <Content value="hirer">
        <StepsList>
          <Step>
            <StepHeader>
              <StepNumber>01</StepNumber>
              <StepTitle>Post a Shyft</StepTitle>
            </StepHeader>
            <StepContent>
              Post a short description of the work that you&apos;d like done and
              specify when and where.
            </StepContent>
          </Step>
          <Step>
            <StepHeader>
              <StepNumber>02</StepNumber>
              <StepTitle>A contractor gets in touch</StepTitle>
            </StepHeader>
            <StepContent>
              A skilled contractor accepts the shyft and gets in touch.
            </StepContent>
          </Step>
          <Step>
            <StepHeader>
              <StepNumber>03</StepNumber>
              <StepTitle>Close the loop</StepTitle>
            </StepHeader>
            <StepContent>
              Complete the shyft by accepting the contractor&apos;s request to
              make the job as completed once the work is done to your
              satisfaction.
            </StepContent>
          </Step>
        </StepsList>
      </Content>

      <Content value="contractor">
        <StepsList>
          <Step>
            <StepHeader>
              <StepNumber>01</StepNumber>
              <StepTitle>Select a Shyft</StepTitle>
            </StepHeader>
            <StepContent>
              Find a shyft that you are skilled for on the timeline and select
              the shyft to notify the hirer that you&apos;r are interested.
            </StepContent>
          </Step>
          <Step>
            <StepHeader>
              <StepNumber>03</StepNumber>
              <StepTitle>Get in touch with the hirer</StepTitle>
            </StepHeader>
            <StepContent>
              Chat with the hirer to get more details about the shyft and make
              the necessary arrangements for the successful completion of the
              shyft.
            </StepContent>
          </Step>
          <Step>
            <StepHeader>
              <StepNumber>03</StepNumber>
              <StepTitle>Close the loop</StepTitle>
            </StepHeader>
            <StepContent>
              Complete the shyft by requesting the hirer to confirm that the
              work has been completed to their satisfaction.
            </StepContent>
          </Step>
        </StepsList>
      </Content>
    </Root>
  );
}

const Root = styled(Tabs.Root)`
  max-width: 500px;
`;

const List = styled(Tabs.List)`
  display: flex;
  flex-direction: column;
  gap: 2px;

  @media ${QUERIES.mobileAndUp} {
    flex-direction: row;
    gap: 0;
  }
`;

const Trigger = styled(Tabs.Trigger)`
  border: none;
  border-bottom: 1px solid ${COLORS.Primary5};
  height: 60px;

  font-size: ${18 / 16}rem;
  font-weight: 600;
  color: ${COLORS.Primary5};

  position: relative;

  &[data-state='active']&::after {
    content: '';
    display: block;

    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    margin: 0 auto;

    height: 4px;
    width: 200px;
    background: ${COLORS.AccentOne28};
  }

  @media ${QUERIES.mobileAndUp} {
    flex: 1;

    &[data-state='active']&::after {
      width: auto;
    }
  }
`;

const Content = styled(Tabs.Content)`
  padding-top: 50px;
  padding-bottom: 50px;

  text-align: start;
`;

const StepsList = styled.div``;

const Step = styled.article``;

const StepHeader = styled.header`
  display: flex;
  gap: 10px;
  background: ${COLORS.Primary87};
  margin-right: -24px;

  border-radius: 100px 0px 0px 100px;

  @media ${QUERIES.mobileAndUp} {
    background: unset;
    margin-right: 0;
  }
`;

const StepNumber = styled.span`
  width: 48px;
  border-radius: 100px;
  background: ${COLORS.Primary64};
  color: ${COLORS.White};

  display: flex;

  align-items: center;
  justify-content: center;

  @media ${QUERIES.mobileAndUp} {
    font-size: ${20 / 16}rem;
  }
`;

const StepTitle = styled.h3`
  font-size: ${18 / 16}rem;
  font-weight: 600;
`;

const StepContent = styled.p`
  padding: 18px 0;
`;

export default FeatureTabs;
