import styled from 'styled-components';

export const Tab = styled.div`
  border: ${({ isSelected }) => `1px solid ${(isSelected ? '#C6CACC' : 'transparent')}`}; // TODO: theme
  border-bottom: none;
  border-radius: 4px 4px 0 0;
  cursor: pointer;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  vertical-align: center;
  letter-spacing: 0.44px;
  padding: 16px 18.6px;
  height: 56px;
  
  // FIXME: временный костыль, чтобы попасть в макет
  &:nth-child(1) {
    width: 99px;
  }
  &:nth-child(2) {
    width: 153px;
  }
  &:nth-child(3) {
    width: 112px;
  }
`;
