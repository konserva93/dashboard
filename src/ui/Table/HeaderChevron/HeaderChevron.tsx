import * as S from './HeaderChevron.styled';
import React from 'react';

interface IChevronProps {
  sorting: number,
}

export function HeaderChevron({ sorting }: IChevronProps) {
  return (
    sorting && sorting !== 0
      ? (
        <S.ChevronBlock>
          <S.Chevron name="chevron-up" active={sorting === 1} />
          <S.Chevron name="chevron-down" active={sorting === -1} />
        </S.ChevronBlock>
      )
      : null
  );
}
