import * as S from './Header.styled';
import React from 'react';

export function Header() {
  return (
    <S.Header>
      <S.LeftSide>
        <S.Logo height="64" viewBox="0 0 187 64" />
      </S.LeftSide>
      <S.RightSide>
        <S.HelpButton />
        <S.UpgradeButton />
        <S.UserPhoto src="Fernando Pidrilio.png" />
      </S.RightSide>
    </S.Header>
  );
}
