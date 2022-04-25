import { Button } from '@src/ui/Button/Button';
import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const Option = styled(Button).attrs(({ selected }) => ({
  minimal: true,
  textAlign: 'left',
  iconColor: `${selected ? '#367BF5' : '#78909C'}`,
}))`
  height: 56px;
  width: 100%;
  background-color: ${({ selected }) => (selected ? '#E5EFFF' : 'transparent')}; // FIXME: debugging color
  
  > span > div:first-child {
    font-family: Quicksand, sans-serif; // TODO: typography
    font-weight: 500;
    letter-spacing: 0.44px;
  }
`;
