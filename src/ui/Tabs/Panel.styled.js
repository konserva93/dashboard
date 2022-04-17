import styled from 'styled-components';

export const Panel = styled.div`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;
