import styled from 'styled-components';

export const Header = styled.div`
  height: 43px;
  display: flex;
  margin-bottom: 31px;
  flex: 0;
`;

export const Title = styled.span`
  font-family: Quicksand, sans-serif;
  font-size: 34px;
  font-weight: 500;
  line-height: 42.5px;
  flex: 1;
`;

export const ToolbarWrapper = styled.div`
  padding: 9px 64px 2px 8px;
  flex: 0;
  display: flex;
  grid-gap: 8px;
`;

export const ViewWrapper = styled.div`
  padding-right: 64px;
  height: 100%;
  width: 100%;
  overflow: auto;
`;
