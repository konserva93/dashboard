import * as S from './SplitPanel.styled';
import React from 'react';

interface ISplitPanelProps {
  children: [React.ReactElement | undefined | null, React.ReactElement | undefined | null]
}

export function SplitPanel({ children }: ISplitPanelProps) {
  return (
    <S.Panel>
      <S.ChildWrapper>{children[0]}</S.ChildWrapper>
      <S.ChildWrapper>{children[1]}</S.ChildWrapper>
    </S.Panel>
  );
}
