import * as S from './Dashboard.styled';
import React, { ReactElement } from 'react';

interface IDashboardProps {
  title: string,
  toolbar: ReactElement | ReactElement[],
  dataView: ReactElement | null,
}

export function Dashboard({ title, toolbar, dataView }: IDashboardProps) {
  return (
    <>
      <S.Header>
        <S.Title>{title}</S.Title>
        <S.ToolbarWrapper>{toolbar}</S.ToolbarWrapper>
      </S.Header>
      <S.ViewWrapper>{dataView}</S.ViewWrapper>
    </>
  );
}
