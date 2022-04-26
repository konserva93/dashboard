import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 56px minmax(0, 1fr);
`;

export const Tabs = styled.div`
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-bottom: 1px #E3E5E5;
  border-bottom-style: dashed;
  background-color: #fff;
  flex: 0 1 56px;
`;
