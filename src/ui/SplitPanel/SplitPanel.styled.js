import styled from 'styled-components';

export const Panel = styled.div`
  padding: 12px 56px 28px 64px;
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  grid-gap: 76px;
  overflow: hidden;
  height: 100%;
  width: 100%;
`;

export const ChildWrapper = styled.div`
  &:nth-child(1) {
    width: 260px;
  }
  &:nth-child(2) {
    height: 100%;
    display: grid;
    grid-template-rows: 43px minmax(0, 1fr);
    grid-gap: 31px;
    overflow: hidden;
    width: 100%;
    grid-template-columns: minmax(0,1fr);
  }
`;
