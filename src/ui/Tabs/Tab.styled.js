import styled from 'styled-components';

export const Tab = styled.div`
  border: ${({ isSelected }) => `1px solid ${(isSelected ? 'gray' : 'transparent')}`}; // TODO: theme
  border-radius: 4px;
  cursor: pointer;
`;
