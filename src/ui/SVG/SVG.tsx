import * as S from './SVG.styled';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { IconPaths } from '@src/svg/generated';
import React from 'react';

interface ISVGProps {
  name: string,
  className?: string,
  color?: string,
  height?: number,
  width?: number,
}

export function SVG({ className, color, name, height, width }: ISVGProps) {
  const innerHtml = IconPaths[name];
  return innerHtml
    ? (
      <S.SVG
        className={className}
        color={color}
        height={height}
        innerHtml={innerHtml}
        width={width}
      />
    )
    : null;
}
