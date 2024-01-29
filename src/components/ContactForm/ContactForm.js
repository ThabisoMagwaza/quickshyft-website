'use client';
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '@/lib/constants';
import Heading1 from '../Heading1';
import MaxWidthWrapper from '../MaxWidthWrapper';

function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
  };

  return (
    <Wrapper>
      <Heading1>Contact Us</Heading1>
      <Form onSubmit={onSubmit}>
        <Field>
          <Label htmlFor="name">Name:</Label>
          <TextInput id="name" type="text" />
        </Field>

        <Field>
          <Label htmlFor="email">Email:</Label>
          <TextInput id="email" type="email" />
        </Field>
        <Field>
          <Label htmlFor="message">Message:</Label>
          <TextAreaInput id="message" type="text" />
        </Field>

        <SubmitWrapper>
          {submitted && (
            <SubmittedText>
              ✅ Thank you for reaching out. We&apos;ll be in contact soon!
            </SubmittedText>
          )}
          <Submit>Send</Submit>
        </SubmitWrapper>
      </Form>
    </Wrapper>
  );
}

const SubmittedText = styled.p`
  font-size: ${14 / 16}rem;
  color: ${COLORS.Primary5};
  text-align: center;

  margin-bottom: 8px;
`;

const SubmitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 22px;
`;

const Wrapper = styled(MaxWidthWrapper)`
  padding-top: 24px;
  padding-bottom: 48px;

  text-align: center;

  max-width: 600px;
`;

const Form = styled.form`
  text-align: start;
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: 600;
  margin-bottom: 8px;
`;

const TextInput = styled.input`
  height: 50px;
  border-radius: 10px;
  border: 1px solid ${COLORS.Primary5};
`;

const TextAreaInput = styled.textarea`
  border-radius: 10px;
  border: 1px solid ${COLORS.Primary5};

  height: 150px;
`;

const Submit = styled.button`
  border: none;
  width: 250px;
  height: 50px;

  color: ${COLORS.White};
  font-weight: 600;

  background: ${COLORS.Primary64};
  border-radius: 12px;
`;

export default ContactForm;
