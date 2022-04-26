import { Button } from '@src/ui/Button/Button';
import styled from 'styled-components';

export const PrintButton = styled(Button).attrs(() => ({
  icon: 'printer',
  size: 'small',
}))`
  background-color: #fff;
`;

export const DownloadButton = styled(Button).attrs(() => ({
  icon: 'download',
  size: 'small',
}))`
  background-color: #fff;
`;
