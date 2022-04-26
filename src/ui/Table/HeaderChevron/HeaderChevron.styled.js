import { SVG } from '@src/ui/SVG/SVG';
import styled from 'styled-components';

export const ChevronBlock = styled.span`
  display: inline-block;
`;

export const Chevron = styled(SVG).attrs(({ active, name }) => ({
  name,
  color: active ? '#069697' : '#C6CACC',
  height: 6,
}))`
  display: block;
  
  &:first-child {
    margin-bottom: 4px;
  }
`;
