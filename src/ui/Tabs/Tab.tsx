import * as S from './Tab.styled';
import React from 'react';

export interface ITabProps {
  caption: string,
  id: number,
  isSelected: boolean,
  onClick?: () => void,
  panel: React.ReactElement,
  // TODO: add disabled prop support
}
export function Tab({ caption, isSelected, onClick }: Partial<ITabProps>) {
  return (
    <S.Tab isSelected={isSelected} onClick={onClick}>
      {caption}
    </S.Tab>
  );
}
