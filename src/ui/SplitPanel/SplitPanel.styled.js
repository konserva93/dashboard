import styled from 'styled-components';

export const Panel = styled.div`
  padding: 12px 56px 28px 64px;
  display: flex;
  grid-gap: 76px;
`;

export const ChildWrapper = styled.div`
  &:nth-child(1) {
    width: 260px;
    flex: 0 0 auto;
  }
  &:nth-child(2) {
    flex: 1 1 auto;
  }
`;
