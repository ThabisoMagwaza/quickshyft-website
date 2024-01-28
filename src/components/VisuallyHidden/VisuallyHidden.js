'use client';
import styled from 'styled-components';

function VisuallyHidden({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  position: absolute;
  padding: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
`;

export default VisuallyHidden;
