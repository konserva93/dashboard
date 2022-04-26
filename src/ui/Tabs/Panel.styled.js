import styled from 'styled-components';

export const Panel = styled.div`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  height: 100%;
  flex: 0 1 100%;
`;
