import { Button } from '@src/ui/Button/Button';
import { ReactComponent as LogoComponent } from '@src/logo.svg';
import styled from 'styled-components';

export const Header = styled.header`
  height: 64px;
  width: 100%;
  background-color: #fff;
`;

export const LeftSide = styled.div`
  height: 100%;
  overflow: hidden;
  display: inline-block;
`;

export const Logo = styled(LogoComponent)`
  margin-top: 8px;
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 16px;
  height: 100%;
  float: right;
  padding-right: 16px;
`;

export const HelpButton = styled(Button).attrs(() => ({
  text: 'Help',
  rightIcon: 'help-circle',
  disabled: true,
}))``;

export const UpgradeButton = styled(Button).attrs(() => ({
  text: 'Upgrade',
  primary: true,
}))``;

export const UserPhoto = styled.img.attrs(() => ({
  alt: 'user',
}))`
  height: 40px;
  width: 40px;
`;
