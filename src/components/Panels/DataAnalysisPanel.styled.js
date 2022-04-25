import { Button } from '@src/ui/Button/Button';
import styled from 'styled-components';

export const LeftPanel = styled.div`
  padding-left: 40px;
  padding-top: 20px;
`;

export const CreateButton = styled(Button)`
  min-width: 213px;
  margin-bottom: 24px;
  > span {
    text-transform: none;
    font-family: Quicksand, sans-serif;
  }
`;
